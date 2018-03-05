<template>
    <div class="positionOrder">
      <rightTab></rightTab>
      <div class="orderTable">
        <table cellspacing='0' cellpadding='0'>
          <thead>
          <th></th>
          <th>交易品种</th>
          <th>交易量</th>
          <th>开仓价</th>
          <th>开仓时间</th>
          </thead>
          <tbody>
          <tr>
            <td class="type"><span class="buy">BUY</span></td>
            <td>
              <p class="black size">USDEUR</p>
              <p class="no">美元/欧元</p>
            </td>
            <td class="black size">2.0</td>
            <td class="size buy">1262.4</td>
            <td>
              <p class="no">2017-12-12</p>
              <p class="no">12:22:23</p>
            </td>
          </tr>
          <tr>
            <td class="type"><span class="sell">SELL</span></td>
            <td>
              <p class="black size">USDEUR</p>
              <p class="no">美元/欧元</p>
            </td>
            <td class="black size">2.0</td>
            <td class="size sell">1262.4</td>
            <td>
              <p class="no">2017-12-12</p>
              <p class="no">12:22:23</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  bady{
    background: #000;
  }
.orderTable table{
  text-align: center;
  font-size:12px;
  width:100%;
}
  .orderTable table thead{
    background: #f6f5fa;
    font-size:14px;
    color: #000;
    height:25px;
    line-height:24px;
  }
  .orderTable table thead th{
    font-weight:normal;
    border-top:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
  }
  .orderTable table tr{
    height:40px;
  }
  .orderTable table tr td{
    border-bottom:1px solid #d9d9d9;
  }






</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'positionOrder',
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

    }
  }
</script>
