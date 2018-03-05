<template>
    <div class="pub">
      <rightTab></rightTab>

      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="actList">
        <ul>
          <li>
            <a href="">
              <p>
                <span class="time">2018/01/04</span>
                <b class="state on">进行中</b>
              </p>
              <div class="actImg">
                <img src="../../assets/images/alpha.png" class="alpha img_zoom">
                <img src="../../assets/images/act.png" class="img_zoom actIMG">
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <p>
                <span class="time">2018/01/04</span>
                <b class="state down">已结束</b>
              </p>
              <div class="actImg">
                <img src="../../assets/images/alpha.png" class="alpha img_zoom">
                <img src="../../assets/images/act.png" class="img_zoom actIMG">
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>
</template>
<style scoped>
.registerTab{
  position: fixed;
  z-index:10000;
  padding: 0;
  left: 0;
  top: 0;
  height: 45px;
  width: 100px;
}
.registerReturn{
  top:11px;
}
.actList{
  padding:25px 15px;
}
.actImg{
  width:100%;
  position: relative;
  -webkit-border-radius:8px;
  -moz-border-radius:8px;
  border-radius:8px;
  overflow: hidden;
}
.actImg img{
  display: block;
  font-size:0;
}
  .actIMG{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
  }
.actList li{
  padding-bottom:20px;
}
.actList li p{
    overflow: hidden;
    height:25px;
  }
  .time{
    float: left;
    font-size:12px;
    color: #7f7f7f;
  }
.state{
  float: right;
  font-size:12px;
  font-weight:normal;
}
.state.on{
  color: #000;
}
.state.down{
  color:#f21b1b;
}




</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  export default {
    name:'newsDetail',
    components:{
      rightTab
    },
    data () {
      return {

      }

    },
    methods: {

    },
    mounted:function () {

    }
  }


</script>
