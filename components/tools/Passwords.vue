<script lang='ts' setup>

const props = defineProps({
    password: String
})

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
    name: 'Passwords',
}
</script>
<style lang='less' scoped>
.list {
    display: flex;

    .text {
        flex: 1 1 auto;
    }
}
</style>