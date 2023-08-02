<script lang='ts' setup>

useSeoMeta({
    title: 'IP_IP地址查询_本机IP_我的IP',
    description: '在线查询IP, 可以随时查看我的IP、本机IP、其他IP地址、IP归属地、IP地理位置、IP运营商等信息',
    keywords: 'IP,IP地址查询,IP查询,IP地址,IP地址'
})

// console.log(ip.address());

fetch('/api/ip', { method: 'post' }).then(res => res.json()).then(res => {
    console.log(res);
})


</script>
<template>
    <div class="ip">

    </div>
</template>
<script lang='ts'>

export default {
    name: 'Ip',
}
</script>
<style lang='less' scoped></style>