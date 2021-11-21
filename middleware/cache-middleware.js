const cache = require('memory-cache');
const memCache = new cache.Cache();

module.exports.cacheMiddleware = (duration) => {
    return (req, res, next) => {
        const key = `__express__${req.originalUrl || req.url}`
        const cachedData = memCache.get(key);
        if (cachedData) {
            return res.status(200).json(JSON.parse(cachedData));
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key, body, duration * 1000);
                res.sendResponse(body);
            }
            next()
        }
    }
}
