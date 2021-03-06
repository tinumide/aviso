const client = require("redis").createClient(process.env.REDIS_URL);
const RedisMQ = require("rsmq");
if (process.env.NODE_ENV === "production") {
    module.exports = {
        rsmq : new RedisMQ({ client: client })
    }
  } else {
    module.exports = {
        rsmq : new RedisMQ({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ns: process.env.NAMESPACE
    })
     }
}
