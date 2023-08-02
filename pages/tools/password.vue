<script lang='ts' setup>
useSeoMeta({
    title: '密码生成器_随机密码生成器_在线密码生成',
    description: '随机生成密码，可自定义密码长度、密码组成、密码个数',
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