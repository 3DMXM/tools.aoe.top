<script lang='ts' setup>

useSeoMeta({
    title: '密码生成器_随机密码生成器_在线密码生成',
    description: '随机生成密码, 可自定义密码长度、密码组成、密码个数',
    keywords: '随机密码生成器,密码生成器,随机密码,密码生成,密码,在线密码生成,小莫的工具箱',
})

// 大写字母 小写字母 数字 特殊字符
let upperCase = ref(true)
let lowerCase = ref(true)
let number = ref(true)
let special = ref(true)

// 密码长度 生成个数
let length = ref(16)
let count = ref(3)

// 结果
let passwords = ref<string[]>([])

function generate() {
    passwords.value = []
    let result = []
    let str = ''
    if (upperCase.value) {
        str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (lowerCase.value) {
        str += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (number.value) {
        str += '0123456789'
    }
    if (special.value) {
        str += '!@#$%^&*()_+{}|:"<>?'
    }
    for (let i = 0; i < count.value; i++) {
        let password = ''
        for (let j = 0; j < length.value; j++) {
            password += str[Math.floor(Math.random() * str.length)]
        }
        result.push(password)
    }
    passwords.value.push(...result)
}


</script>
<template>
    <v-row class="password">
        <v-col cols="12" class="header">
            <v-switch color="#26C6DA" v-model="upperCase" label="大写字母"></v-switch>
            <v-switch color="#26C6DA" v-model="lowerCase" label="小写字母"></v-switch>
            <v-switch color="#26C6DA" v-model="number" label="数字"></v-switch>
            <v-switch color="#26C6DA" v-model="special" label="特殊字符"></v-switch>
        </v-col>
        <v-col cols="12">
            <v-slider color="#26C6DA" label="密码长度" v-model="length" min="1" max="50" step="1">
                <template v-slot:append>
                    {{ length }}
                </template>
            </v-slider>
            <v-slider color="#26C6DA" label="生成数量" v-model="count" min="1" max="20" step="1">
                <template v-slot:append>
                    {{ count }}
                </template>
            </v-slider>
        </v-col>
        <v-col cols="12" class="btn">
            <v-btn @click="generate">生成密码</v-btn>
        </v-col>
        <v-col cols="12" class="result">
            <tools-passwords v-for="item in passwords" :key="item" :password="item"></tools-passwords>
        </v-col>
        <ToolsDescribe :text="`### 功能介绍
“密码生成器”是一款专业的密码生成工具, 可以帮助用户快速生成复杂、安全的密码。只需点击一下, 您就能得到一个随机生成的密码。该工具具有以下特点：
1. 随机生成：密码由数字、大小写字母以及特殊字符随机组合而成, 确保密码的复杂度和独特性。
2. 可自定义长度：用户可根据需求自行选择生成密码的长度, 既满足各类应用场景的要求, 又确保密码的安全性。
3. 一键复制：生成的密码可直接复制到剪贴板, 方便用户在需要输入密码的地方粘贴使用。
4. 安全可靠：该工具在本地运行, 无需联网, 保证了生成密码过程的安全性。同时我们严格保护用户隐私, 不会收集、储存任何用户信息。
### 使用场景
“密码生成器”适用于各种需要设置密码的场景, 例如：
1. 注册新账户：为避免使用过于简单的密码, 可使用“密码生成器”生成一个安全的密码进行注册。
2. 修改现有密码：定期更换密码是保障账户安全的好习惯, 使用“密码生成器”可轻松实现密码更迭。
3. 多账户管理：拥有多个账户时, 使用不同的密码能有效降低泄露风险。“密码生成器”可帮您快速生成不同的密码, 简化账户管理。
### 使用建议
在使用“密码生成器”生成密码时, 我们建议您：
1. 选择合适的密码长度, 一般推荐至少设置为12位以上。
2. 定期更新密码, 增加账户安全性。
3. 使用密码管理工具保存生成的密码, 避免忘记或遗失。

 “密码生成器”绝对是您在日常生活中不可或缺的密码管理好帮手。它能够快速、高效地为您生成复杂且安全的密码, 保护您的个人信息和账户安全。现在就试试这款神奇的工具吧！让密码安全不再成为您的烦恼！`">
        </ToolsDescribe>

    </v-row>
</template>
<script lang='ts'>

export default {
    name: 'Password',
}
</script>
<style lang='less' scoped>
.password {
    .header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .btn {
        display: flex;
        justify-content: flex-end;
    }
}
</style>