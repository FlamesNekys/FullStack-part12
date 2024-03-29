const redis = require('redis');
const { promisify } = require('util');
const { REDIS_URL } = require('../util/config');
const { log } = require('console');

let getAsync;
let setAsync;

if (!REDIS_URL) {
    const redisIsDisabled = () => {
        console.log('No REDIS_URL set, Redis is disabled');
        return null;
    };
    getAsync = redisIsDisabled;
    setAsync = redisIsDisabled;
} else {
    const client = redis
        .createClient({
            url: REDIS_URL,
        })
        .on('error', (e) => console.log('Redis error', e));

    getAsync = promisify(client.get).bind(client);
    setAsync = promisify(client.set).bind(client);
}

module.exports = {
    getAsync,
    setAsync,
};
