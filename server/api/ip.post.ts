import { Ip } from '@/model/Ip'

export default defineEventHandler(async (event) => {

    let { ip } = await readBody(event);
    let loc = await Ip.GetLocation(ip)
    return { loc, ip }
})


