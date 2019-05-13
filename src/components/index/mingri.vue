<template>
    <div class="mingri">
        <div class="tab-box-cont" v-if="qb">
            <div class="zhishu">
                <div><p>综合指数 ：</p><span><xingxing :num="qb.data.all"></xingxing></span></div>
                <div><p>健康指数 ：</p><span><xingxing :num="qb.data.health"></xingxing></span></div>
                <div><p>爱情指数 ：</p><span><xingxing :num="qb.data.love"></xingxing></span></div>
                <div><p>财运指数 ：</p><span><xingxing :num="qb.data.money"></xingxing></span></div>
                <div><p>工作指数 ：</p><span><xingxing :num="qb.data.work"></xingxing></span></div>
                <div><p>速配星座 ：</p><span>{{qb.data.QFriend}}</span></div>
                <div><p>幸运颜色 ：</p><span>{{qb.data.color}}</span></div>
                <div><p>幸运数字 ：</p><span>{{qb.data.number}}</span></div>
            </div>
            <div class="gaisu">
                <div class="gaisu-bt"><img src="@/assets/yunshi.png" /><h2>今日概述</h2></div>
                <div class="gaisu-wenzi">{{qb.data.summary}}</div>
            </div>
            <div class="zonghe">
                <div class="zonhe-bt"><img src="@/assets/zoushi.png" /><h2>综合运势</h2></div>
                <div class="zonhe-wemnzi">{{qb.data.summary}}</div>
            </div>
        </div>
        <dibu></dibu>
    </div>
</template>

<script>
    import Xingxing from "./xingxing";
    import Dibu from "./dibu";
    export default {
        name: "mingri",
        components: {Dibu, Xingxing},
        computed:{
            qb(){
                return this.$store.state.mr
            }
        },

    }
</script>

<style scoped>
    .tab-box-cont{
        width: 7.5rem;
    }
    .zhishu{
        display: flex;
        width: 6rem;
        flex-wrap: wrap;
        margin: 0.54rem auto 0;
        border-bottom: 0.01rem solid #eeeeee;
    }
    .zhishu>div{
        display: flex;
        width: 3rem;
        font-size: 0.26rem;
        color: #4e4e4e;
        padding-bottom: 0.4rem;
    }
    .gaisu{
        width: 6rem;
        margin:0.12rem auto 0;
        background-color: #f2f2f2;
        border-radius: 0.1rem;
        padding: 0 0.2rem 0;
    }
    .gaisu-bt{
        display: flex;
        font-size: 0.28rem;
        color: #4e4e4e;
        padding-top: 0.3rem;
        padding-bottom: 0.23rem;
    }
    .gaisu-bt>img{
        width: 0.5rem;
        height: 0.5rem;
    }
    .gaisu-bt>h2{
        line-height: 0.5rem;
        margin-left: 0.12rem;
    }
    .gaisu-wenzi{
        font-size: 0.22rem;
        color: #828281;
        padding-bottom: 0.31rem;
    }
    .zonghe{
        width: 6rem;
        margin:0.12rem auto 0;
        background-color: #f2f2f2;
        border-radius: 0.1rem;
        padding: 0 0.2rem 0;
    }
    .zonhe-bt{
        display: flex;
        font-size: 0.28rem;
        color: #4e4e4e;
        padding-top: 0.3rem;
        padding-bottom: 0.23rem;
    }
    .zonhe-bt>img{
        width: 0.5rem;
        height: 0.5rem;
    }
    .zonhe-bt>h2{
        line-height: 0.5rem;
        margin-left: 0.12rem;
    }
    .zonhe-wemnzi{
        font-size: 0.22rem;
        color: #828281;
        padding-bottom: 0.31rem;
    }
</style>

