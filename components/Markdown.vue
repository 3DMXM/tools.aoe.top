<script lang='ts' setup>
import { marked } from 'marked'
import 'github-markdown-css/github-markdown-light.css'
import { useTheme } from 'vuetify'

const porps = defineProps<{
    text: string
}>()

const theme = useTheme()
marked.setOptions({ mangle: false, headerIds: false })

const body_color = computed(() => {
    return theme.global.current.value.dark ? "#fff" : "#24292e"
})

const md = computed(() => {
    return marked(porps.text)
})

</script>
<template>
    <div class="markdown-body" v-html="md"></div>
</template>
<script lang='ts'>

export default {
    name: 'Markdown',
}
</script>
<style lang='less' scoped>
.markdown-body {
    padding: 8px 15px;
    border-radius: 3px;
    display: inline-block;
    background-color: transparent;
    color: v-bind(body_color);
}
</style>