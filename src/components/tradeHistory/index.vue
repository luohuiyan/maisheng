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
          <th>平仓价</th>
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
            <td class="size buy">1262.4</td>
          </tr>
          <tr>
            <td class="type"><span class="sell">SELL</span></td>
            <td>
              <p class="black size">USDEUR</p>
              <p class="no">美元/欧元</p>
            </td>
            <td class="black size">2.0</td>
            <td class="size sell">1262.4</td>
            <td class="size sell">1262.4</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="shadow">
        <div class="shadowCon">
          <ul class="payDetail">
            <li>
              <span>获利</span>
              <p>000.000USD</p>
            </li>
            <li>
              <span>类型</span>
              <p class="detailStyle"><span class="buy">BUY</span></p>
            </li>
            <li>
              <span>交易品种</span>
              <p>USDEUR 美元/欧元</p>
            </li>
            <li>
              <span>交易量</span>
              <p>2.0</p>
            </li>
            <li>
              <span>开仓价</span>
              <p class="size buy">2223.00</p>
            </li>
            <li>
              <span>平仓价</span>
              <p class="size buy">2223.00</p>
            </li>
            <li>
              <span>开仓时间</span>
              <p class="no">2017-12-03 12:23:45</p>
            </li>
            <li>
              <span>平仓时间</span>
              <p class="no">2017-12-03 12:23:45</p>
            </li>

          </ul>

        </div>
      </div>

      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  bady{
    background: #000;
  }
  .shadow{
    z-index:10000;
  }
  .payDetail{
    margin-top:0;
  }
  .detailStyle span{
    display: inline-block;
    border-radius: 3px;
    color: #fff;
    width: 30px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size:12px;
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
