<template>
    <div class="qidongye">
        <div class="img"><img src="@/assets/qidongye.jpg" /></div>
        <div class="wenzi">
            <h2>寻找</h2>
            <h2>星座伴侣</h2>
        </div>
        <router-link to="/cont">
            <div class="dianji">点击进入</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "qidongye"
    }
</script>

<style scoped>
.img{
    width: 7.5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size:0;
    z-index: -1;
}
.img>img{
    width: 100%;
    height: 100%;
}
    .wenzi{
        font-size: 0.7rem;
        color: white;
        text-align: center;
        margin-top: 24%;
    }
    .wenzi>h2{
        margin-bottom: 0.2rem;
    }
    .dianji{
        width: 5rem;
        color: white;
        font-size: 0.4rem;
        text-align: center;
        border: 0.01rem solid #eeeeee;
        border-radius: 0.1rem;
        padding: 0.3rem 0;
        margin: 80% auto 0;
    }
</style>
