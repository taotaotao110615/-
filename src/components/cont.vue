<template>
    <div class="cont">
        <div class="cont-img"><img src="@/assets/xuanzexingzuo.jpg" width="100%" height="100%"/></div>
        <div class="xuanze">选择星座</div>
        <div class="cont-box">
            <div v-for="item in pc">
                <router-link to="/xianqing">
                    <div class="f-img">
                        <img :src=item.Img @click="cc(item)" />
                    </div>
                </router-link>
                <div class="box-yr" style="position: relative">
                    <p style="font-size: 0.26rem;margin-top: 0.17rem">{{item.Name}}</p>
                    <p style="font-size: 0.22rem;margin-top: 0.12rem">{{item.EnglishName}}</p>
                    <p style="font-size: 0.22rem;margin: 0.09rem 0.37rem 0 0;" >{{item.Time}}</p>
                </div>
            </div>
        </div>
        <router-link to="/">
            <div class="jinru">
                <img src="@/assets/icon-wrong.png" />
            </div>
        </router-link>
    </div>
</template>

<script>

    export default {
        name: "cont",
        data(){
          return{
            msg:""
          }
        },
        methods:{
            cc(e){
                console.log(e);
                this.msg=e
                window.localStorage.setItem('yi',this.msg)
                 this.$router.push({
                     name: 'xianqing',
                     params:{
                         cc: this.msg
                     }
                 } )
            }
        },
        computed:{
            pc (){
                return this.$store.state.xx
            }
        },
        // created(){
        //     this.axios.get('/static/home.json')
        //         .then((res) =>{
        //         this.msg=res.data.data
        //         console.log(res)
        //         // 将接收到的数据传递到data的数据中
        //     }).catch(function (res) {
        //         console.log(res);
        //     });
        // },
    }
</script>

<style scoped>
.cont-img{
    width: 7.5rem;
    height: 100vh;
    font-size: 0;
    position: absolute;
    top: 0;
    z-index: -1;
}
.xuanze{
    font-size: 0.34rem;
    color: #fefefe;
    text-align: center;
    margin-top: 0.6rem;
}
.cont-box{
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.33rem;
    margin-top: 0.3rem;
}
.cont-box>div{
    margin-left: 0.42rem;
}
    .f-img{
        width: 1.2rem;
        height: 1.2rem;
        padding-top: 0.2rem;
    }
    .f-img>img{
        width: 100%;
        height: 100%;
    }
    .box-yr{
        color: #fefefe;
        text-align: center;
        position: absolute;
        top: 0 ;
        right: 0.2rem;
    }
.box-yr>p{
    width: 1.6rem;
}
    .jinru{
        width: 0.8rem;
        height: 0.8rem;
        margin: 0.5rem auto 0;
    }
.jinru>img{
    width: 100%;
    height: 100%;
}
</style>
