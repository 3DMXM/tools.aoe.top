

export default defineEventHandler(async (event) => {
    let ip = require('ip');


    return { ip: ip.address() }
})