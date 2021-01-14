const env = require('./env');
const request = require('request');

function GlobalIP(config = {}) {
  this.config = config;

  this.CANNOT_FETCH_SELF_IP = 10;
  this.CANNOT_CONNECT_INTERNET = 20;
  this.SOME_ERROR_HAPPENED = 90;

  this.execute = () => {
    return new Promise((resolve, reject) => {
      request(env.endpoint, (error, response, body) => {
        try {
          if (error) { throw error; }
          if (response.statusCode === 200) {
            const { query } = JSON.parse(body);
            if (query !== undefined) { return resolve(query); }
            else { return reject(this.CANNOT_FETCH_SELF_IP); }
          } else {
            return reject(this.CANNOT_CONNECT_INTERNET);
          }
        } catch (_) {
          return reject(this.CANNOT_CONNECT_INTERNET);
          // return reject(this.SOME_ERROR_HAPPENED);
        }
      });
    })
  }
}
module.exports = GlobalIP;
