<script lang='ts' setup>
const main = useMain()

</script>
<template>
    <v-container>
        <v-breadcrumbs :items="[
            {
                title: '首页',
                disabled: false,
                to: '/',
            },
            {
                title: main.toolsList.filter(item => item.to === $route.path)[0].title,
                disabled: true,
                to: main.toolsList.filter(item => item.to === $route.path)[0].to,
            },
        ]">
            <template v-slot:prepend>
                <v-icon size="small" icon="mdi-home"></v-icon>
            </template>
        </v-breadcrumbs>
        <NuxtPage />
        <v-card title="其他工具" class="other">
            <v-card-text>
                <ToolsList></ToolsList>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'Tools',
}
</script>
<style lang='less' scoped>
.other {
    margin: 1rem 0;
}
</style>