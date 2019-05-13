<template>
    <div class="xiazhou">
        <div class="tab-box-cont">
            <div class="tab-box-bj" v-if="qd">
                <div class="jt">
                    <div class="jt-bt"><img src="@/assets/jt.png" /><h2>健康</h2></div>
                    <div class="jt-wenzi"></div>
                </div>
                <div class="jt">
                    <div class="jt-bt"><img src="@/assets/qz.png" /><h2>求职</h2></div>
                    <div class="jt-wenzi"></div>
                </div>
                <div class="jt">
                    <div class="jt-bt"><img src="@/assets/aq.png" /><h2>爱情</h2></div>
                    <div class="jt-wenzi">{{qd.data.love}}</div>
                </div>
                <div class="jt">
                    <div class="jt-bt"><img src="@/assets/aq.png" /><h2>财运</h2></div>
                    <div class="jt-wenzi">{{qd.data.money}}</div>
                </div>
                <div class="jt">
                    <div class="jt-bt"><img src="@/assets/gz.png" /><h2>工作</h2></div>
                    <div class="jt-wenzi">{{qd.data.work}}</div>
                </div>
            </div>
        </div>
        <dibu></dibu>
    </div>
</template>

<script>
    import Dibu from "./dibu";
    export default {
        name: "xiazhou",
        components: {Dibu},
        computed:{
            qd(){
                return this.$store.state.xz
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
        background-color: #f2f2f2;
    }
    .jt{
        width: 6rem;
        margin:0.12rem auto 0;
        border-radius: 0.1rem;
        padding: 0 0.2rem 0;
    }
    .jt-bt{
        display: flex;
        font-size: 0.28rem;
        color: #4e4e4e;
        padding-top: 0.3rem;
        padding-bottom: 0.23rem;
    }
    .jt-bt>img{
        width: 0.5rem;
        height: 0.5rem;
    }
    .jt-bt>h2{
        line-height: 0.5rem;
        margin-left: 0.12rem;
    }
    .jt-wenzi{
        width: 5.6rem;
        font-size: 0.22rem;
        color: #828281;
        padding-bottom: 0.31rem;
    }
</style>

