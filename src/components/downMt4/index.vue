<template>
    <div class="downMT4">
      <rightTab></rightTab>
      <div class="downBTN">
        <span class="mt4Img"><img src="../../assets/images/mt4.jpg" width='100'></span>
        <h3>MetaTrader 4</h3>
        <p>官方服务商：</p>
        <span>MasterSelectGroup</span>
        <a href=" " class="down">下载</a>
      </div>
      <div class="uses">
        <h3 class="useTitle">IOS系统使用教程</h3>
        <div class="swiper-container iosContainer" id="IOSswiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/images/IOS-1.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/IOS-2.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/IOS-3.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/IOS-4.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/IOS-5.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/IOS-6.png" class="img_zoom">
            </div>
          </div>
        </div>
        <h3 class="useTitle androidTitle">Android系统使用教程</h3>
        <div class="swiper-container iosContainer" id="ANDROIDswiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/images/android-1.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/android-2.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/android-3.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/android-4.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/android-5.png" class="img_zoom">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/android-6.png" class="img_zoom">
            </div>
          </div>
        </div>


      </div>

      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 70%;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
.downBTN{
  padding:30px 20px 0 125px;
  height:150px;
  position: relative;
}
.mt4Img{
  position: absolute;
  left:15px;
  top:32px;
}
  .downBTN h3{
    font-size:20px;
    color: #000;
    font-weight:normal;
  }
  .downBTN p{
    font-size:14px;
    color:#8e8e93;
    line-height:20px;
  }
  .downBTN span{
    font-size:14px;
    color: #000000;
    display: block;
  }
.down{
  position: absolute;
  right:20px;
  bottom:18px;
  font-size:16px;
  color: #fff;
  padding:5px 20px;
  -webkit-border-radius:20px;
  -moz-border-radius:20px;
  border-radius:20px;
  background: #00cfff;
}
.uses{
  padding-top:20px;
}
  .useTitle{
    font-size:20px;
    padding-left:15px;
    font-weight:normal;
    color: #000;
  }
.androidTitle{
  padding-top:30px;
}







</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  import tabbar from '../userCenter/bottomTabBar.vue'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name:'downMT4',
    components:{
      rightTab,tabbar
    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted:function () {
      setTimeout(function () {
        new Swiper('#IOSswiper', {
          slidesPerView: 'auto',
          paginationClickable: true,
          spaceBetween:0
        });
      }, 100)
      setTimeout(function () {
        new Swiper('#ANDROIDswiper', {
          slidesPerView: 'auto',
          paginationClickable: true,
          spaceBetween:0
        });
      }, 100)
    }
  }

</script>
