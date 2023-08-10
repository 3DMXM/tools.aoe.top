<script lang='ts' setup>

let main = useMain()

</script>
<template>
    <div class="list-wrap">
        <v-card class="list" v-for="item in main.toolsList" variant="tonal" :to="item.to">
            <v-card-title>
                <v-chip variant="text" :prepend-icon="item.icon">
                    {{ item.title }}
                </v-chip>
            </v-card-title>
            <v-card-text>
                {{ item.desc }}
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'ToolsList',
}
</script>
<style lang='less' scoped>
.list-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .list {
        min-width: 300px;
        margin: 10px;
        flex: 1 1 auto;
    }
}
</style>