<script lang='ts' setup>

const { logo, lazy_img } = useMain()

let navItems = [
    // { text: '首页', to: 'https://www.aoe.top' },
    { text: '博客园', to: 'https://blog.aoe.top' },
    { text: '云网盘', to: 'https://pan.aoe.top' },
    { text: '游戏库', to: 'https://game.aoe.top' },
    { text: '云签到', to: 'https://tb.aoe.top' },
]

</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="header">
                <div>
                    <router-link to="/">
                        <v-btn variant="text" color="#fff">小莫的工具箱
                            <template v-slot:prepend>
                                <v-avatar>
                                    <v-img :src="logo" :lazy-src="lazy_img"></v-img>
                                </v-avatar>
                            </template>
                        </v-btn>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'BaseHeader',
}
</script>
<style lang='less' scoped>
.header {
    display: flex;
    justify-content: space-between;
}
</style>