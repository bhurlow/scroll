'use strict'

var fs = require('fs')
var Docker = require('dockerode')
var stream = require('stream')

var level = require('level')
var sublevel = require('level-sublevel')
var db = sublevel(level('./store'))
var _ = require('underscore')

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

function processLogEvent(obj) {
  console.log(obj)
  // emit event for websocket connection 
  // store log
}

function listContainers(cb) {
  docker.listContainers((err, containers) => {
    let full = containers.map(c => {
      return {
        id: c.Id,
        name: c.Names.join(' '),
        _container: docker.getContainer(c.Id),
      }
    })
    return cb(full)
  })
}

function tailLogs(container, handlerFn) {
  let opts = {stream: true, stdout: true, stderr: false}
  container._container..attach(opts, function(err, stream) {
    stream.on('data', function(chunk) {
      handlerFn({
        name: container.name,
        data: chunk.toString(),
      })
    })
  })
}

listContainers(function(containers) {
  console.log(containers)
})
