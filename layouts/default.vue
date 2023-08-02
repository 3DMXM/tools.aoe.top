<script lang='ts' setup>

useHead({
    htmlAttrs: {
        class: 'dark'
    }
})
</script>
<template>
    <v-app>
        <SeoKit />
        <v-main class="layout">
            <BaseHeader></BaseHeader>
            <router-view></router-view>
            <BaseFooter></BaseFooter>
        </v-main>
    </v-app>
</template>
<script lang='ts'>

export default {
    name: 'layoutsDefault',
}
</script>
<style lang='less' scoped></style>