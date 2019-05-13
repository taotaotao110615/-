<template>
    <div class="benyue">
        <div class="tab-box-cont">
            <div class="tab-box-bj" v-if="qf">
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/zoushi.png" /><h2>综合运势</h2></div>
                    <div class="gaisu-wenzi">{{qf.data.all}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/jt.png" /><h2>健康运势</h2></div>
                    <div class="gaisu-wenzi">{{qf.data.health}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/aq.png" /><h2>爱情运势</h2></div>
                    <div class="gaisu-wenzi">{{qf.data.love}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/aq.png" /><h2>财运运势</h2></div>
                    <div class="gaisu-wenzi">{{qf.data.money}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/gz.png" /><h2>工作运势</h2></div>
                    <div class="gaisu-wenzi">{{qf.data.work}}</div>
                </div>
            </div>
            <dibu></dibu>
        </div>
    </div>
</template>

<script>
    import Dibu from "./dibu";
    export default {
        name: "benyue",
        components: {Dibu},
        computed:{
            qf(){
                return this.$store.state.by
            }
        },
    }
</script>

<style scoped>
    .tab-box-cont{
        width: 7.5rem;
    }
    .tab-box-bj{
        width: 6rem;
        margin: auto;
        border-radius: 0.1rem;
    }
    .gaisu{
        width: 6rem;
        margin:0.12rem auto 0;
        background-color: #f2f2f2;
        border-radius: 0.1rem;
        padding: 0 0 0 0.1rem;
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
        width: 5.8rem;
        font-size: 0.22rem;
        color: #828281;
        padding-bottom: 0.31rem;
    }
</style>

