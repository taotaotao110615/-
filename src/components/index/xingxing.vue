<template class="xingxing">
    <ul class="evaluate">
        <li v-for='item in itemClass' :class='item'></li>
    </ul>
</template>

<script>
    export default {
        name: 'xx',
        props: ["num"],
        data() {
            return {
                r: 5,
            }
        },
        computed: {
            itemClass() {
                let arr = []
                //计算星星个数(整数和半个)
                let i = parseInt(this.num)/10/2
                let on = Math.floor(i)
                let half = (i - on) * 10
                while (arr.length < on) {
                    arr.push('on')
                }
                if (half > 4) arr.push('half')
                while (arr.length < this.r) {
                    arr.push('off')
                }
                return arr;
            }
        }
    }

</script>

<style scoped>
    .evaluate{
        display: flex;
    }
    .evaluate>li{
        width: 0.3rem;
        height: 0.3rem;
        text-align: center;
        background: url(../../assets/xone.png) no-repeat center/cover;
    }
    .no{
        background: url(../../assets/xone.png) no-repeat center/cover;
    }
    ul>.off{
        background: url(../../assets/xthree.png) no-repeat center/cover;
    }
    ul>.half{
        background: url(../../assets/xtwo.png) no-repeat center/cover;
    }
</style>
