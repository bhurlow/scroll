'use strict'

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function spam() {
  let time = rand(0, 20) * 100
  setTimeout(function() {
    console.log('hi!!', Date.now())
    spam()
  }, time)
}

spam()
