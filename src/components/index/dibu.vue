<template>
    <div class="dibu">
        <div class="meirituijian">
            <div class="tuijian-bt"><img src="@/assets/tuijian.png" /><h2>每日推荐</h2></div>
            <div class="tuijiang-guanggao">此处应有广告</div>
        </div>
        <div class="shouyetiaozhuang">
            <router-link to="/">
                <div class="sytz-box">
                    <div class="sytz">
                        <img src="@/assets/shouye.png" />
                        <h2>首页</h2>
                    </div>
                </div>
            </router-link>
            <div class="toutiao">
                <img src="@/assets/toutiao.png" />
                <h2>头条</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dibu"
    }
</script>

<style scoped>
    .dibu{

    }
.meirituijian{
    width: 6rem;
    margin:0.12rem auto 0.3rem;
    border-radius: 0.1rem;
    padding: 0 0.2rem 0;
}
    .tuijian-bt{
        display: flex;
        font-size: 0.28rem;
        color: #4e4e4e;
        padding-top: 0.3rem;
        padding-bottom: 0.23rem;
    }
.tuijian-bt>img{
    width: 0.5rem;
    height: 0.5rem;
}
.tuijian-bt>h2{
    line-height: 0.5rem;
    margin-left: 0.12rem;
}
.tuijiang-guanggao{
    text-align: center;
    font-size: 0.5rem;
    color: #828281;
    border: 0.01rem solid;
    border-radius: 0.1rem;
    padding: 0.2rem;
}
    .shouyetiaozhuang{
        width: 7.5rem;
        height: 1.7rem;
        background-color: #f2f2f2;
        position: relative;
    }
    .sytz-box{
        width: 1.11rem;
        height: 1.11rem;
        border-radius: 50%;
        background-color: #eeeeee;
        font-size: 0;
        position: absolute;
        bottom: 0.65rem;
        left: 1.5rem;
    }
.sytz{
    text-align: center;
    padding-top: 0.15rem;
}
.sytz>img{
        padding-bottom: 0.07rem;
}
.sytz>h2{
    font-size: 0.22rem;
    color: #b73ed6;
}
    .toutiao{
        position: absolute;
        right: 1.98rem;
        top: -0.3rem;
    }
    .toutiao>h2{
        font-size: 0.22rem;
        color: #6c6c6c;
    }
</style>
