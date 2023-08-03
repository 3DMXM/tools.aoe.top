import request from 'request'


export class Ip {
    // 获取IP归属地
    static GetLocation(ip: string): Promise<string> {
        // const request = require('request');
        let now_time = Date.now();
        let qs = {
            query: ip,
            co: '',
            resource_id: 6006,
            t: now_time,
            ie: 'utf8',
            oe: 'utf8',
            // cb: 'op_aladdin_callback',
            format: 'json',
            tn: 'baidu',
            cb: 'jQuery110208921704571784295_' + now_time,
            _: Date.now()
        };
        let url = 'https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php';
        return new Promise((resolve, reject) => {
            request.get({
                url: url,
                qs: qs,
                encoding: 'utf8'
            }, function (err: any, res: any, body: any) {
                if (!err && res.statusCode == 200) {
                    try {
                        let result = JSON.parse(body.substring(5 + qs.cb.length, body.length - 2));
                        let ip_location = result.data[0].location;
                        resolve(ip_location);
                    } catch (e) {
                        reject(`错误: ${e}`);
                    }
                } else {
                    reject('未知错误~');
                }
            });
        });
    }
}