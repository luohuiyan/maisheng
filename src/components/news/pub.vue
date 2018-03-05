<template>
    <div class="pub">
      <rightTab></rightTab>

      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="newCon">
          <h3 class="newsTime">2018/01/04</h3>
          <ul>
            <li>
              <span>16:12:50</span>
              <p>martkit经济学家哈克：尽管西班牙2017年第四季度经济表现不如前三季度，但总体来讲经济活动持续以稳健速度扩张。</p>
            </li>
            <li>
              <span>16:12:50</span>
              <p>martkit经济学家哈克：尽管西班牙2017年第四季度经济表现不如前三季度，但总体来讲经济活动持续以稳健速度扩张。</p>
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
.newCon{
  padding:25px 15px 15px;
}
.newsTime{
  font-size:14px;
  font-weight:normal;
  color: #7f7f7f;
  height: 30px;
}
.newCon li{
  background: #fff;
  padding:15px;
  -webkit-border-radius:8px;
  -moz-border-radius:8px;
  border-radius:8px;
  margin-bottom:15px;
}
.newCon li span{
  display: block;
  font-size:12px;
  color: #7f7f7f;
  height:20px;
}
.newCon li p{
  font-size:14px;
  line-height:24px;
  color: #000;
}


</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  export default {
    name:'pub',
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
      $(function () {
        $('.pub').css({'background':'#f5f5f9',minHeight:$(window).height()});

      })

    }
  }


</script>
