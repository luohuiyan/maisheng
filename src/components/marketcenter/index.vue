<template>
    <div class="marketCenter">
      <rightTab></rightTab>
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <table cellspacing="0" cellpadding="1">
        <thead>
        <th style="width:45px;"> </th>
        <th>名称</th>
        <th>买价/卖家</th>
        <th>状态</th>
        </thead>
        <tbody>
        <tr>
          <td><span class="marketImg"></span></td>
          <td>
            <p class="font14">GBPUSD</p>
            <p class="font13">英镑/美元</p>
          </td>
          <td class="num up">1234.12/1234.12</td>
          <td><i class="iconfont up">&#xe7f1;</i></td>
        </tr>
        <tr>
          <td><span class="marketImg"></span></td>
          <td>
            <p class="font14">GBPUSD</p>
            <p class="font13">英镑/美元</p>
          </td>
          <td class="num down">1234.12/1234.12</td>
          <td><i class="iconfont down">&#xe7f1;</i></td>
        </tr>
        </tbody>

      </table>


    </div>
</template>
<style scoped>
  .marketCenter .registerTab{
    left: 0;
    top:0;
    position: fixed;
    z-index: 1001;
    width: 100px;
    height: 45px;
    padding: 0;
  }
  .registerReturn{
    top:12px;
  }
  .marketCenter table th{
    font-weight:normal;
    font-size:12px;
    color: #000;
    line-height:25px;
    border-top:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    background: #f6f5fa;
  }
  .marketCenter table{
    width:100%;
    text-align: center;
    font-size:14px;
  }
  .marketCenter table tr td{
    padding:10px 0;
    border-bottom:1px solid #d9d9d9;
  }
  .marketCenter table i{
    font-size:18px;
  }
.marketImg{
  display: block;
  width:35px;
  height:25px;
  overflow: hidden;
  background: url("../../assets/images/market.png") no-repeat left top;
  -webkit-background-size: 100%;
  background-size: 100%;
  margin-left:10px;
}
.num{
  font-size:16px !important;
}
  .font14{
    font-size:14px;
    color: #000;
  }
  .font13{
    font-size:13px;
    color: #9eacbd;
  }





</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  export default {
    name:'helpcenter',
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
