<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><jinri></jinri></swiper-slide>
        <swiper-slide><mingri></mingri></swiper-slide>
        <swiper-slide><benzhou></benzhou></swiper-slide>
        <swiper-slide><xiazhou></xiazhou></swiper-slide>
        <swiper-slide><benyue></benyue></swiper-slide>
        <swiper-slide><year></year></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import Jinri from './jinri.vue'
import Mingri from './mingri.vue'
import Benzhou from './benzhou.vue'
import Xiazhou from './xiazhou.vue'
import Year from './year.vue'
import Benyue from "./benyue";


    export default {
        name: "lunbo",
        data(){
            return {
                swiperOption: {
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        autoHeigth:true,
                        renderBullet: function (index, className, text) {
                            switch (index) {
                                case 0:
                                    text = '今日';
                                    break;
                                case 1:
                                    text = '明日';
                                    break;
                                case 2:
                                    text = '本周';
                                    break;
                                case 3:
                                    text = '下周';
                                    break;
                                case 4:
                                    text = '本月';
                                    break;
                                case 5:
                                    text = '本年';
                                    break;
                            }
                            return '<span class="' + className + '">' + text + '</span>';
                        },
                    },
                }
            }
        },
        components:{
            Benyue,
            Jinri,
            Mingri,
            Benzhou,
            Xiazhou,
            Year
        },
        created(){
            let str = this.$route.params.cc?this.$route.params.cc.Name:"白羊座";
                this.$store.dispatch('get',str)
                // console.log(this);
        },
    }
</script>

<style>
    .swiper-container {
        position: relative;
        padding-top: 0.8rem !important;
    }
    .swiper-pagination-bullet-active {

        opacity: 1 !important;
    }
    .swiper-pagination-bullet{
        color: blueviolet;
        font-size:0.4rem;
        width: 1rem !important;
        background: transparent !important;
        height: 0.5rem !important;
        line-height: 0.5rem;
        position: relative;
        top: -0.2rem;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
    }
</style>
