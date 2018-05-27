<template>
  <div>
    <div class="car-price">
      <span class="car-item price-ft">工厂公示价：<br><i class="color">￥12980 <span
        style="font-size:.28rem; color:#666;font-weight:bold;">起</span> </i>
      </span>
      <span class="car-item price-ft">市场均价：<br><i class="color">￥12954 </i></span>
    </div>
    <div class="car-score">
      <span class="pf">网友评分： 7.69分</span>
    </div>
    <div class="tab-wrap">
      <table style="width: 100%;">
        <tbody>
        <tr>
          <td class="bg-sp" style="height: 35px;width:40% ;">车型概述</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">名称</td>
          <td style="height: 35px;">{{ this.modeloVerview.name }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">年代款</td>
          <td style="height: 35px;">{{ this.modeloVerview.age }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">版本</td>
          <td style="height: 35px;">{{ this.modeloVerview.ver }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">型号</td>
          <td style="height: 35px;">{{ this.modeloVerview.modelNumber }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">类型</td>
          <td style="height: 35px;">{{ this.modeloVerview.type }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">品牌</td>
          <td style="height: 35px;">{{ this.modeloVerview.brand }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">制造国</td>
          <td style="height: 35px;">{{ this.modeloVerview.form }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">上市时间</td>
          <td style="height: 35px;">{{ this.modeloVerview.timeMarket }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">生产状态</td>
          <td style="height: 35px;">{{ this.modeloVerview.pStates }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">工厂指导价</td>
          <td style="height: 35px;">{{ this.modeloVerview.offer }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">平均零售价</td>
          <td style="height: 35px;">{{ this.modeloVerview.price }}</td>
        </tr>
        <tr >
          <td class="bg-sp" style="height: 35px;width:40% ;">发动机参数</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">实际排量(ml)</td>
          <td style="height: 35px;">{{ this.engineConf.engine }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">缸数(个)</td>
          <td style="height: 35px;">{{ this.engineConf.cylinders }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">冲程</td>
          <td style="height: 35px;">{{ this.engineConf.chongcheng }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">每缸气门(个)</td>
          <td style="height: 35px;">{{ this.engineConf.qimen }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">配气结构</td>
          <td style="height: 35px;">{{ this.engineConf.peiqi }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">压缩比</td>
          <td style="height: 35px;">{{ this.engineConf.yasuobi }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">缸径×行程(mm)</td>
          <td style="height: 35px;">{{ this.engineConf.boreAndStroke }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">最大功率(kw/rpm)</td>
          <td style="height: 35px;">{{ this.engineConf.hignPower }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">最大扭矩(N·m/rpm)</td>
          <td style="height: 35px;">{{ this.engineConf.hignTorque }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">冷却方式</td>
          <td style="height: 35px;">{{ this.engineConf.cooling }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">供油方式</td>
          <td style="height: 35px;">{{ this.engineConf.oilMode }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">启动方式</td>
          <td style="height: 35px;">{{ this.engineConf.BootMode }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">官方油耗(L/100km)</td>
          <td style="height: 35px;">{{ this.engineConf.officialOil }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">网友实测油耗(L/100km)</td>
          <td style="height: 35px;">{{ this.engineConf.TrueOil }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">环保标准</td>
          <td style="height: 35px;">{{ this.engineConf.huanbao }}</td>
        </tr>
        <tr>
          <td class="bg-sp" style="height: 35px;width:40% ;">动力传输</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">官方油耗(L/100km)</td>
          <td style="height: 35px;">{{ this.dongli.biansudangwei }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">网友实测油耗(L/100km)</td>
          <td style="height: 35px;">{{ this.dongli.speedType }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">环保标准</td>
          <td style="height: 35px;">{{ this.dongli.drivingMode }}</td>
        </tr>
        <tr>
          <td class="bg-sp" style="height: 35px;width:40% ;">车体参数</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">长×宽×高(mm)</td>
          <td style="height: 35px;">{{ this.carBody.carLength }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">座高(mm)</td>
          <td style="height: 35px;">{{ this.carBody.highChair }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">最小离地间隙(mm)</td>
          <td style="height: 35px;">{{ this.carBody.lidixi }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">轴距(mm)</td>
          <td style="height: 35px;">{{ this.carBody.zhouju }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">空车质量(kg)</td>
          <td style="height: 35px;">{{ this.carBody.emptyCarQuality }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">整备质量(kg)</td>
          <td style="height: 35px;">{{ this.carBody.carWeight }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">油箱容积(L)</td>
          <td style="height: 35px;">{{ this.carBody.fuelTankCapacity }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">车架形式</td>
          <td style="height: 35px;">{{ this.carBody.frameForm }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">最高车速(km/h)</td>
          <td style="height: 35px;">{{ this.carBody.hignSpeed }}</td>
        </tr>
        <tr>
          <td class="bg-sp" style="height: 35px;width:40% ;">车轮制动</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">轮数（个）</td>
          <td style="height: 35px;">{{ this.wheelBrake.lunshu }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">铸铝车轮</td>
          <td style="height: 35px;">{{ this.wheelBrake.wheel }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">轮胎形式</td>
          <td style="height: 35px;">{{ this.wheelBrake.tireForm }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">轮胎规格(前)</td>
          <td style="height: 35px;">{{ this.wheelBrake.tyreSizeFront }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">轮胎规格(后)</td>
          <td style="height: 35px;">{{ this.wheelBrake.tyreSizeAfter }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">制动系统</td>
          <td style="height: 35px;">{{ this.wheelBrake.retrosystem }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">制动科技</td>
          <td style="height: 35px;">{{ this.wheelBrake.zhidongkeji }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">避震系统</td>
          <td style="height: 35px;">{{ this.wheelBrake.vibrationSystem }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">行程特性</td>
          <td style="height: 35px;">{{ this.wheelBrake.xingchengtexing }}</td>
        </tr>
        <tr>
          <td class="bg-sp" style="height: 35px;width:40% ;">其他配置</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">仪表型式</td>
          <td style="height: 35px;">{{ this.otherConf.instrument }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">仪表型式</td>
          <td style="height: 35px;">{{ this.otherConf.lamps }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">仪表型式</td>
          <td style="height: 35px;">{{ this.otherConf.handlebar }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">仪表型式</td>
          <td style="height: 35px;">{{ this.otherConf.otherConf }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">仪表型式</td>
          <td style="height: 35px;">{{ this.otherConf.dianchiguige }}</td>
        </tr>
        <tr>
          <td class="bg-sp" style="height: 35px;width:40% ;">部件品牌</td>
          <td style="height: 35px;width:60% ; background-color: rgb(245, 245, 245);"></td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">化油器/电喷</td>
          <td style="height: 35px;">{{ this.otherConf.instrument }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">轮胎</td>
          <td style="height: 35px;">{{ this.otherConf.lamps }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">减震</td>
          <td style="height: 35px;">{{ this.otherConf.handlebar }}</td>
        </tr>
        <tr >
          <td class="tab-tit" style="height: 35px;">电池</td>
          <td style="height: 35px;">{{ this.otherConf.otherConf }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modeloVerview: Object,
    engineConf: Object,
    dongli: Object,
    carBody: Object,
    wheelBrake: Object,
    otherConf: Object
  }
}
</script>
<style scoped lang="stylus">
  .car-price
    padding: 10px 15px
    display: flex
    .car-item
      flex: 1
      text-align: center
      line-height: .64rem
  .car-score
    margin: .3rem 0
    text-align: center
    .pf
      color: #f37d00;
      font-weight: bold;
      font-size: 20px;
      line-height: 40px;
      height: 40px;
  .color
    color: #f37d00
  .tab-wrap
    td
      border: .02rem solid #eee
      text-align: center
      color: #777
    .bg-sp
      background-color: #f5f5f5
      text-align: left
      padding: .12rem .3rem
      color: #444
    .tab-tit
      text-align: left
      padding: .12rem .5rem
</style>
