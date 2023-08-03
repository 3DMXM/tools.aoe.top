

export default defineEventHandler(async (event) => {
    let req = event.node.req

    // 获取IP
    let ip = req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        req.socket.remoteAddress
    // req.socket.socket.remoteAddress;

    // let ip = req.headers['x-forwarded-for'];
    // 从IP中移除::ffff:

    // console.log(ip);


    // ip = ip.replace(/::ffff:/, '');

    // ip = ip.split(",");


    return { ip: ip }
})