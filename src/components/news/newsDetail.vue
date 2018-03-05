<template>
    <div class="pub">
      <rightTab></rightTab>

      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="newsDetail">
        <h3>新闻标题</h3>
        <span class="detailTime">018/01/04 12:16:33</span>
        <p>artkit经济学家哈克：尽管西班牙2017年第四季度经济表现不如前三季度，但总体来讲经济活动持续以稳健速度扩张。</p>
        <p>artkit经济学家哈克：尽管西班牙2017年第四季度经济表现不如前三季度，但总体来讲经济活动持续以稳健速度扩张。</p>
        <p>artkit经济学家哈克：尽管西班牙2017年第四季度经济表现不如前三季度，但总体来讲经济活动持续以稳健速度扩张。</p>
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
.newsDetail{
  padding:25px 15px;
}
.newsDetail h3{
  font-size:20px;
  color: #000000;
  font-weight:normal;
  height:35px;
}
.detailTime{
  font-size:12px;
  color: #888888;
  height:30px;
  display: block;
}
.newsDetail p{
  font-size:14px;
  line-height:24px;
  color: #000000;
  padding-bottom:5px;
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
      $(function () {
        $('.pub').css({'background':'#f5f5f9',minHeight:$(window).height()});

      })

    }
  }


</script>
