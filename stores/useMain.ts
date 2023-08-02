export const useMain = defineStore('main', {
    state: () => ({
        lazy_img: '/lazy_img.webp',
        logo: 'https://mod.3dmgame.com/static/upload/mod/202211/MOD6386ccf455c06.png@webp',
        toolsList: [
            {
                title: '密码生成器',
                desc: '随机生成密码，可自定义密码长度、密码组成、密码个数',
                icon: 'mdi-lock',
                to: '/tools/password'
            },
            {
                title: 'IP查询',
                desc: '查询我的IP地址、地理位置、运营商等信息',
                icon: 'mdi-web',
                to: '/tools/ip'
            }
        ]
    }),

    getters: {
        // 相当于计算属性
        // double: (state) => state.n * 2,
    },

    actions: {
        // 修改 state 中的值
        // increment(amount = 1) { this.n += amount }
    },
})
