'use strict'

var fs = require('fs')
var Docker = require('dockerode')
var stream = require('stream')

var host = 'tcp://192.168.99.100:2376'
var host = '192.168.99.100'
var port = 2376
var certPath = '/Users/pretzel/.docker/machine/machines/default'

var docker = new Docker({
  host: host,
  port: port,
  ca: fs.readFileSync(certPath + '/ca.pem'),
  cert: fs.readFileSync(certPath + '/cert.pem'),
  key: fs.readFileSync(certPath + '/key.pem')
});

function handleLogEvent(obj) {
  console.log(obj)
}

docker.listContainers((err, containers) => {
  containers.forEach(info => {
    console.log(info)
    let id = info.Id
    let name = info.Names.join(' ')
    let container = docker.getContainer(id)
    container.attach({stream: true, stdout: true, stderr: false}, function(err, stream) {
      stream.on('data', function(chunk) {
        handleLogEvent({
          name: name,
          data: chunk.toString(),
        })
      })
    })
  })
})

// my stream 

// class MyStream extends stream.Duplex {

//   constructor(options) {
//     super({
//       readableObjectMode : true,
//       writableObjectMode: true
//     });
//   }

//   _read(n) {
//     // console.log('reading from sgream')
//     this.push('my acutal data')
//   }

//   _write(chunk, enc, next) {
//     // console.log(chunk)
//     // next()
//   }

// }

