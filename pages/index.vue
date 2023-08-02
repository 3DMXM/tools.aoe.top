<script lang='ts' setup>

const { logo, lazy_img } = useMain()
</script>
<template>
    <v-container>
        <div class="index">
            <v-icon icon="mdi-tools" size="100"></v-icon>
            <h1>小莫的工具箱</h1>
            <p>随心制作一些便利有用的工具</p>
        </div>
        <v-divider></v-divider>
        <ToolsList></ToolsList>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'Index',
}
</script>
<style lang='less' scoped>
.index {
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #10b981;
        font-size: 2.5rem;
    }

}
</style>