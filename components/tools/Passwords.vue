<script lang='ts' setup>

const props = defineProps<{
    password: string
}>()

function copy() {
    navigator.clipboard.writeText(props.password)
    ElMessage.success('复制成功!')
}

</script>
<template>
    <div class="list">
        <div class="text">
            {{ password }}
        </div>
        <div class="btn">
            <v-btn variant="text" append-icon="mdi-content-copy" @click="copy">复制</v-btn>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'ToolsPasswords',
}
</script>
<style lang='less' scoped>
.list {
    display: flex;
    align-items: center;

    .text {
        flex: 1 1 auto;
        // 溢出隐藏
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>