<script lang='ts' setup>
import md5 from 'md5'

useSeoMeta({
    title: 'MD5_MD5加密_md5在线加密',
    description: 'MD5在线加密,md5加密,md5在线加密,md5加密解密,md5加密算法,md5加密解密算法,md5加密解密在线,md5加密解密在线工具,md5加密解密在线',
    keywords: 'md5加密,md5加密解密,md5加密算法,md5加密解密算法,md5加密解密在线,md5加密解密在线工具,md5加密解密在线,md5加密解密,md5加密,md5'
})

let text = ref('')



</script>
<template>
    <v-row class="md5">
        <v-col cols="12">
            <v-textarea label="需要加密的明文" variant="underlined" v-model="text"></v-textarea>
        </v-col>
        <v-col cols="12" v-if="text != ''">
            <div class="title">加密结果:</div>
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-left"> 类型 </th>
                        <th class="text-left"> 加密结果 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>md5: </td>
                        <td>
                            <ToolsPasswords :password="md5(text)"></ToolsPasswords>
                        </td>
                    </tr>
                    <tr>
                        <td>md5(md5): </td>
                        <td>
                            <ToolsPasswords :password="md5(md5(text))"></ToolsPasswords>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
        <ToolsDescribe :text="`### 工具介绍
MD5在线加密工具是一款基于MD5(Message-Digest Algorithm 5)算法的在线加密服务。MD5算法是一种广泛使用的密码散列函数,能将任意长度的数据转换为固定长度(通常为32位)的哈希值. 这种算法具有较高的安全性,被广泛应用于数据完整性检验和用户密码存储等场景.
### 工具特点
1. 免费使用：本工具完全免费，无需注册或登录，即可随时使用。
2. 快速加密：采用优化的算法，实现快速高效的数据加密。
3. 安全保障：工具不会记录或存储您的原始数据和加密结果，确保数据绝对安全。
4. 跨平台支持：支持多种浏览器和设备，无论您使用电脑、手机还是平板，都可以随时随地进行加密操作。
### 适用场景
1. 用户密码存储: 将用户密码通过MD5加密后存储, 可有效防止密码泄露。
2. 数据完整性校验: 通过计算文件的MD5值, 检验文件是否被篡改。
3. 通信安全: 在数据传输过程中, 使用MD5加密可确保数据的机密性和完整性。
        `"></ToolsDescribe>
    </v-row>
</template>
<script lang='ts'>

export default {
    name: 'Md5',
}
</script>
<style lang='less' scoped>
.md5 {
    .result {
        display: flex;
        flex-direction: column;

        .result-list {
            display: flex;
            align-items: center;

            .label {
                padding: 0 1rem;
            }

            .psd {
                flex: 1 1 auto;
            }
        }


    }

}
</style>