<script lang='ts' setup>
const props = defineProps<{
    text: string
}>()

let panel = ref([0])

</script>
<template>
    <v-col cols="12" class="describe">
        <v-expansion-panels v-model="panel">
            <v-expansion-panel title="介绍">
                <v-expansion-panel-text>
                    <Markdown :text="text"> </Markdown>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-col>
</template>
<script lang='ts'>

export default {
    name: 'ToolsDescribe',
}
</script>
<style lang='less' scoped></style>