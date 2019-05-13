<template>
    <div class="xianqing" v-if="hh">
        <div class="beij"><img src="@/assets/bjj.jpg" /></div>
        <router-link to="/cont">
            <div class="fanhui">
                <img src="@/assets/tuc-5@2x.png" />
            </div>
        </router-link>
        <div class="bl">星座伴侣</div>
        <div class="tb"><img src="@/assets/tb-4.png" /></div>
        <div class="wenzi-tb">
            <div class="pone">{{hh.Name}}({{hh.EnglishName}})</div>
            <div class="ptwo">{{hh.Time}}</div>
        </div>
        <div class="tab-box">
            <lunbo></lunbo>
        </div>
    </div>
</template>

<script>
import Dibu from './index/dibu.vue'
import Lunbo from "./index/lunbo.vue";

    export default {
        name: 'carrousel',
        data (){
            return {
            }
            },
        computed:{
            hh(){
                let lo=this.$route.params.cc?this.$route.params.cc:window.localStorage.getItem('yi')
                return lo
            }
        },
        created(){
            console.log(this)
        },
        components:{
            Lunbo,
            Dibu,
        },
    }
</script>

<style scoped>
.beij{
    width: 7.5rem;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
.beij>img{
    width: 100%;
}
.fanhui{
    width: 0.6rem;
    height: 0.6rem;
    padding-top: 0.2rem;
}
.fanhui>img{
    width: 100%;
    height: 100%;
    margin:0.8rem 0 0 0.5rem;
}
    .bl{
        width: 1.6rem;
        font-size: 0.34rem;
        color: #ffffff;
        margin: 0.3rem auto 0;
        text-align: center;
    }
    .tb{
        width: 1.32rem;
        height: 1.48rem;
        margin:0.7rem auto 0;
    }
    .wenzi-tb{
        width: 3rem;
        margin:0.26rem auto 0;
        text-align: center;
    }
    .pone{
        font-size: 0.26rem;
        color: #313030;
        padding-bottom: 0.11rem;
    }
    .ptwo{
        font-size: 0.22rem;
        color: #6a6a6a;
    }
    .tab-box{
        display: flex;
        overflow: hidden;
    }
</style>
