<template>
    <div class="cardList">
        <div class="registerTab">
            <span class="registerReturn" @click='$router.history.go(-1)'>
              <i class="iconfont">&#xe604;</i>
            </span>
            <p class="addCard"><router-link to=''><i class="iconfont">&#xe61a;</i></router-link></p>
        </div>
        <div class="commonLoginPd">
          <ul id="ddd" class="allList">
            <li :class="{ changeLeft: toggleCls}">
              <div class="card">
                <div class="cardName">
                  <p class="cardOuter">
                    <span class="cardImg"></span>
                  </p>
                  <p class="name">中国招商银行-银联借记卡</p>
                </div>
                <p class="cardNum"><span>****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;</span>3456</p>
                <span class="cardCUE" @click='toastup'><i class="iconfont">&#xe607;</i></span>
              </div>
              <p class="cardDelete" @click='moveClass'><span></span></p>
            </li>
            <li :class="{ changeLeft: toggleCls}">
              <div class="card">
                <div class="cardName">
                  <p class="cardOuter">
                    <span class="cardImg"></span>
                  </p>
                  <p class="name">中国招商银行-银联借记卡</p>
                </div>
                <p class="cardNum"><span>****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;</span>3456</p>
                <span class="cardCUE" @click='toastup'><i class="iconfont">&#xe607;</i></span>
              </div>
              <p class="cardDelete"><span></span></p>
            </li>
          </ul>
        </div>
        <!--解绑银行卡-->
        <div class="shadow">
          <div class="shadowCon addLate">
            <h3>确定解绑此银行卡？</h3>
            <span class="sure">确认删除</span>
            <span class="cancel">取消</span>
          </div>
        </div>



    </div>
</template>
<script>
  // 引入国家相关文件
  import '../../assets/country/country.css'
  import {country} from  '../../assets/country/country.js'

  export default {
    name: 'cardList',
    components : {
    },
    data () {
      return {
        toggleCls:false
      }
    },
    methods:{
        toastup:function () {
          this.$toast({
            message: '左滑删除',
            position: 'middle',
            iconClass: 'icon hua',
            className:'addpd',
            duration: 2000
          });
        },
        moveClass:function () {
            this.toggleCls=false;
//            点击当前添加class，其他删除class
//          <div id="app">
//            <p v-for='(data,key,index) in datas' v-on:click="addClassFun(index)" v-bind:class='{class1:index==qwerqwre}'>{{data.data}}</p>
//          </div>
//
//          <script>
//          new Vue({
//            el: '#app',
//            data: {
//              datas: {
//                data1: {
//                  data: "测试1",
//                  ifAdd: 0
//                },
//                data2: {
//                  data: "测试2",
//                  ifAdd: 1
//                },
//                data3: {
//                  data: "测试3",
//                  ifAdd: 2
//                }
//              },
//              qwerqwre:"0"
//            },
//
//
//            methods: {
//              addClassFun: function(index) {
//                this.qwerqwre = index;
//              }
//            }
//          })
        }
    },
    mounted:function () {
        var _this=this;
      function load(dom){
        dom.addEventListener('touchstart',touch, false);
        dom.addEventListener('touchmove',touch, false);
        dom.addEventListener('touchend',touch, false);
        function touch (event){
          var event = event || window.event;
          var distance,clientX_start,clientX_end,
            minRange=20;
          this.clientX_start;
          this.direction;

          this.callbackFun=function(){
            if(this.direction=='rtl'&& this.direction) {
              _this.toggleCls=true;



            }
          }
          switch(event.type){
            case "touchstart":
              this.direction='';
              clientX_start=event.touches[0].clientX;
              this.clientX_start=clientX_start;
              break;
            case "touchend":
              this.callbackFun();
              break;
            case "touchmove":
              event.preventDefault();

              clientX_end = event.changedTouches[0].clientX;
              //判断移动的方向
              distance=clientX_end-this.clientX_start;
              if((this.clientX_start+minRange)<clientX_end) {
                this.direction='ltr';
              }
              else if(this.clientX_start-minRange>clientX_end){
                this.direction='rtl';
              }
              break;
          }
        }
      }
      var ddd=document.querySelectorAll('.allList li');
      for(var i=0;i<ddd.length;i++){
        load(ddd[i])
      }

    }
  }





</script>
<style scoped>
  .commonLoginPd{
    width:100%;
    padding:15px 20px;
    overflow: hidden;
  }
  .registerTab{
    padding-bottom:25px;
  }
.addCard{
  position: absolute;
  right: 15px;
  top: 15px;
  width: 25px;
  height: 25px;
  line-height: 26px;
  text-align: center;
  border-radius: 100%;
  overflow: hidden;
  background: #00b9e4;
}
.addCard i{
  font-size:20px;
  color: #fff;
}
.addCard a{
  display: block;
  height:100%;
}
.allList li{
  width:125%;
  margin-bottom:20px;
  position: relative;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -ms-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
}
.card{
  width:80%;
  height:160px;
  position: relative;
  background: #e0121f url("../../assets/images/cardIcon.png") no-repeat right bottom;
  -webkit-background-size:80% auto;
  background-size:90% auto;
  -webkit-border-radius:10px;
  -moz-border-radius:10px;
  border-radius:10px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .5) ;
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .5) ;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5) ;
  padding:20px;
}
.cardName{
  position: relative;
  padding-left:50px;
  height:62px;
}
.cardOuter{
  position: absolute;
  left:0;
  top:0;
  padding:3px;
  background: #fff;
  -webkit-border-radius:100%;
  -moz-border-radius:100%;
  border-radius:100%;
}
.cardImg{
  width:30px;
  height:30px;
  display: block;
  -webkit-border-radius:100%;
  -moz-border-radius:100%;
  border-radius:100%;
  overflow: hidden;
  background: url('../../assets/images/bankCard.png') no-repeat left top;
}
.name{
  font-size:16px;
  color: #fff;
  height:30px;
  line-height:30px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  position: relative;
  top:5px;
}
.cardNum{
  font-size:25px;
  color: #fff;
  text-align: right;
}
.cardNum span{
  position: relative;
  top:10px;
}
.cardCUE{
  position: absolute;
  right:15px;
  bottom:15px;
  width:22px;
  height:22px;
}
  .cardCUE i{
    font-size:22px;
    color: #fff;
  }
.cardDelete{
  position: absolute;
  right:20px;
  top:50%;
  width: 25px;
  height: 25px;
  line-height: 28px;
  font-size:14px;
  text-align: center;
  border-radius: 100%;
  overflow: hidden;
  background: #ff3e32;
  margin-top:-13px;
}
  .cardDelete span{
    position: absolute;
    width:54%;
    height:2px;
    background: #fff;
    left:23%;
    top:50%;
    margin-top:-1px;
  }
.changeLeft{
  -webkit-transform: translate(-14%,0);
  -moz-transform: translate(-14%,0);
  -ms-transform: translate(-14%,0);
  -o-transform: translate(-14%,0);
  transform: translate(-14%,0);
}
.shadowCon{
  text-align: center;
}
.shadowCon h3{
  font-weight:normal;
  font-size:16px;
  color: #888888;
  height:65px;
  line-height:65px;
  border-bottom:1px solid #d9d9d9;
}
.sure{
  font-size:18px;
  color: #e64845;
  height:60px;
  line-height:54px;
  border-bottom:6px solid #ececec;
  display: block;
  width:100%;
}
.cancel{
  font-size:18px;
  height:50px;
  line-height:50px;
  color: #000;
  display: block;
}






</style>

