'use strict';

const request = require('superagent');
const Promise = require('bluebird');
const url = '[site url]';
const endpoint = '[slack endpoind]';

function fetch() {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .end((err, res) => {
        if(err) reject(err);
        resolve(res);
      });
  });
}

fetch()
  .timeout(60000, '1分経過してもアクセスできない')
  .then((res) => {
    request
      .post(endpoint)
      .type("form")
      .send({
        payload: JSON.stringify({text: 'status code: '+res.statusCode})
      })
      .end((err, res) => {
        if(err) return console.error(err);
      });
  })
  .catch((error) => {
    request
      .post(endpoint)
      .type("form")
      .send({
        payload: JSON.stringify({text: 'access error, '+error})
      })
      .end((err, res) => {
        if(err) return console.error(err);
      });
  });
