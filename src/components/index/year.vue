<template>
    <div class="year">
        <div class="tab-box-cont">
            <div class="tab-box-bj" v-if="qg">
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/mm.png" /><h2>健康运</h2></div>
                    <div class="gaisu-wenzi">{{qg.data.health[0]}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/gz.png" /><h2>事业运</h2></div>
                    <div class="gaisu-wenzi">{{qg.data.career[0]}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/aq.png" /><h2>爱情运</h2></div>
                    <div class="gaisu-wenzi">{{qg.data.love[0]}}</div>
                </div>
                <div class="gaisu">
                    <div class="gaisu-bt"><img src="@/assets/aq.png" /><h2>财运</h2></div>
                    <div class="gaisu-wenzi">{{qg.data.finance[0]}}</div>
                </div>
            </div>
            <dibu></dibu>
        </div>
    </div>
</template>

<script>
    import Dibu from "./dibu";
    export default {
        name: "year",
        components: {Dibu},
        computed:{
            qg(){
                return this.$store.state.bn
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
