const dotenv = require('dotenv');
const envFound = dotenv.config({path:`.env`});

if(!envFound){
    throw new Error('can\'t find .env file')
}
//set NODE_ENV to devopment by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';



module.exports = {
    port: parseInt(process.env.PORT,10),
    EMAIL_ADDRESS: process.env.E_A,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    API_KEY: process.env.API_KEY,
    NAMESPACE : process.env.NAMESPACE,
    QUEUENAME1 : process.env.NM,
    QUEUENAME2 : process.env.MN
}
