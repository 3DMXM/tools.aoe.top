<script lang='ts' setup>
import { join } from 'path';

useSeoMeta({
    title: 'IP_IP地址查询_本机IP_我的IP',
    description: '在线查询IP, 可以随时查看我的IP、本机IP、其他IP地址、IP归属地、IP地理位置、IP运营商等信息',
    keywords: 'IP,IP地址查询,IP查询,IP地址,IP地址'
})


let ip = ref('')
let loc = ref('')
let loc_city = ref('')
fetch('https://www.aixiezuo.com.cn/api/common/ip', { method: 'get' }).then(res => res.json()).then(res => {
    // console.log(res);
    if (res.status == 'Success') {
        ip.value = res.data.ip
        loc.value = res.data.loc.join(" ")
        getIpLoc(ip.value).then(async res => {
            let data = await res.json()
            loc_city.value = data.loc
        })
    }
})

let inquire = reactive({
    ip: '',
    loc: '',
    loc_city: ''
})

function search() {

    if (inquire.ip == '') {
        ElMessage.error('请输入IP地址')
        return
    }
    // 判断IP是否合法
    let reg = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
    if (!reg.test(inquire.ip)) {
        ElMessage.error('请输入正确的IP地址')
        return
    }

    getIpLoc(inquire.ip).then(res => res.json()).then(res => {
        inquire.loc_city = res.loc
    })

}


function getIpLoc(ip: string) {
    return fetch('/api/ip', { method: 'post', body: JSON.stringify({ ip }) })
}

</script>
<template>
    <v-row class="ip">
        <v-col cols="12" class="my my-ip">本机IP: {{ ip }}</v-col>
        <v-col cols="12" class="my my-loc">归属地: {{ loc }}</v-col>
        <v-col cols="12" class="my my-loc-city">归属地: {{ loc_city }}</v-col>
        <v-col cols="12" class="inquire">
            <v-card text="查询IP归属地">
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="IP地址" v-model="inquire.ip" append-inner-icon="mdi-magnify"
                                @click:append-inner="search" @keyup.enter="search"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <div class="my loc-city" v-if="inquire.loc_city != ''">IP归属地: {{ inquire.loc_city }}</div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" class="describe">
            <v-expansion-panels>
                <v-expansion-panel title="介绍" open>
                    <v-expansion-panel-text>
                        <Markdown :text="`### 功能介绍
随着互联网的普及和发展, IP地址作为网站、服务器和各种网络设备的唯一标识, 在网络安全、网站运营和网络故障排查等方面扮演着越来越重要的角色。要查询IP地址的归属地、运营商等信息, 就需要一款功能强大、操作简便的查询工具。今天, 我们向大家推荐一款名为“IP归属地查询”的工具, 让您可以轻松查询IP地址的相关信息。
“IP归属地查询”是一款专业的IP地址查询工具, 旨在帮助用户快速、准确地查询IP地址的归属地、运营商、地理位置等信息。
### 主要特点和功能
1. 界面简洁明了: IP归属地查询工具的界面设计简洁, 用户可以直观地看到查询框和查询结果, 同时还提供了一键复制功能, 方便用户将查询结果复制到剪贴板。
2. 查询速度快: 通过优化查询算法, 该工具可以在短时间内完成IP地址的查询, 减少用户的等待时间。
3. 数据准确全面: IP归属地查询工具内置了世界各地的IP地址数据库, 可以为用户提供准确的归属地信息。同时, 工具还会定期更新数据库, 确保查询结果的准确性。
4. 多种查询方式: 用户可以通过输入IP地址、域名或URL等方式进行查询。此外, 支持批量查询, 方便用户一次性查询多个IP地址的信息。

在网络安全方面, IP归属地查询工具可以帮助用户识别来自特定地区或运营商的恶意IP, 从而采取相应的防护措施；在网站运营方面, 了解访客的地理位置和运营商信息, 可以帮助网站运营者更好地针对不同地区的用户进行内容优化和推广；在网络故障排查方面, 查询IP归属地有助于用户快速定位问题, 提高故障处理效率。

无论您是网络安全工程师、网站运营者还是普通用户, “IP归属地查询”工具都将成为您查询IP地址信息的得力助手。现在就尝试使用这款工具, 轻松掌握IP地址的归属地信息吧！`">
                        </Markdown>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>
<script lang='ts'>

export default {
    name: 'Ip',
}
</script>
<style lang='less' scoped>
.ip {
    .my {
        font-size: 20px;
        font-weight: bold;
    }

    .my-ip {

        color: #26C6DA;
    }

    .inquire {
        margin-top: 20px;
    }
}
</style>