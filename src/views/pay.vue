<template>
  <div class="bg-24 pay-wrap">
    <div class="pay-header">
      <img src="/static/img/pay_header_bg.png" alt />
      <div class="pay-header-ctt">
        <div class="desc flex flex-column items-center center justify-center">
          <div style="desc-text">本品库存告急，请尽快支付</div>
          <div class="flex justify-center items-center time-ctt">
            <i
              class="van-icon van-icon-clock-o"
              style="margin-right: 5px; font-size: 18px"
            ></i>

            <van-count-down
              class="count-down-ctn"
              :time="time"
              format="mm:ss:SS"
            ></van-count-down>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-card-ctt">
            <van-form>
              <van-field
                v-model="model.username"
                name="收货人"
                label="收货人"
                placeholder="收货人"
                required
                :rules="[{ required: true, message: '请输入收货人姓名' }]"
              />
              <van-field
                v-model="model.phone"
                type="number"
                name="手机号"
                label="手机号"
                placeholder="手机号"
                required
                :rules="[{ required: true, message: '请输入手机号' }]"
              />
              <van-field
                v-model="model.area"
                name="省市区县"
                label="省市区县"
                placeholder="点击选择省市区县"
                required
                @click="showArea = true"
                :rules="[{ required: true, message: '请选择省市区县' }]"
              />
              <van-field
                v-model="model.address"
                name="详细地址"
                label="详细地址"
                placeholder="详细地址"
                required
                :rules="[{ required: true, message: '请输入详细地址' }]"
              />
            </van-form>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-ctn">
      <div class="goods-info rounded-large flex justify-between">
        <div
          class="flex-none goods-image van-image"
          style="
            width: 90px;
            height: 90px;
            overflow: hidden;
            border-radius: 5px;
          "
        >
          <img
            class="van-image__img"
            src="https://img.jingdongyouxuan.com/838581587279872"
            style="object-fit: cover"
          />
        </div>
        <!---->
        <div class="pay-text flex flex-column justify-between flex-auto ml2">
          <div class="pay-text-ctt">
            <p class="goods-name van-ellipsis fs15">夏新1.5L多用养生壶</p>
            <p class="spec-desc van-ellipsis fs12">HT-321</p>
          </div>
          <div class="flex" style="margin: 6px 0">
            <van-tag round class="pay-tag">差必赔</van-tag>
            <van-tag round class="pay-tag">假一赔十</van-tag>
            <van-tag class="pay-tag" round>24小时发货</van-tag>
          </div>
          <div class="flex items-center justify-between fs14">
            <!---->
            <div class="flex items-end">
              <div class="color_primary fs17 bold">868积分</div>
              <div class="color_primary">+</div>
              <span class="color_primary">168元</span>
            </div>
            <div class="gray" style="text-decoration: line-through">599元</div>
          </div>
        </div>
      </div>

      <div class="bg-white way-ctn rounded-large flex items-center">
        <div class="flex flex-auto">配送方式</div>
        <div class="color_black_222 bold fs15">免费包邮</div>
      </div>

      <div class="pay-point bg-white rounded-large mx2 py2 px3 mt2">
        <div style="font-size: 15px">平台优惠</div>
        <div style="margin: 10px 0">
          <div class="flex justify-between mt2">
            <div class="color_gray_666">商品总价</div>
            <div class="color_primary">868积分+168元</div>
          </div>
          <!---->
          <div class="flex justify-between mt2">
            <div class="color_gray_666">积分已抵扣</div>
            <div class="color_primary">431.0元</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-large payment-wrap">
        <div class="select-payment-container">
          <div class="title">支付方式</div>
          <van-radio-group v-model="pay">
            <van-cell-group>
              <van-cell clickable @click="pay = 'weixin'">
                <div slot="title" class="flex items-center">
                  <img
                    cla
                    width="35"
                    src="/static/img/weixin.png"
                    class="payImg"
                  />
                  <div class="pay-text-span">
                    <span class="bold fs17">微信支付</span>
                    <span class="payt1 bold" style="color: rgb(224, 0, 0)"
                      >(推荐)</span
                    >
                    <span class="color-99">使用微信支付</span>
                    <span class="color_primary">安全·方便</span>
                  </div>
                </div>

                <template #right-icon>
                  <van-radio
                    name="weixin"
                    :class="{ checked: pay === 'weixin' }"
                    class="pay-radio"
                  />
                </template>
              </van-cell>
              <van-cell clickable @click="pay = 'zfb'">
                <div slot="title" class="flex items-center">
                  <img width="35" src="/static/img/zfb.png" class="payImg" />
                  <div class="pay-text-span">
                    <span class="bold fs17">支付宝支付</span>
                    <span class="payt1 color-99">使用支付宝支付</span>
                    <span class="color_primary">支持花呗·分期</span>
                  </div>
                </div>
                <template #right-icon>
                  <van-radio
                    class="pay-radio"
                    :class="{ checked: pay === 'zfb' }"
                    name="zfb"
                  />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </div>
    </div>

    <van-submit-bar
      class="pay-submit-bar"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <div class="flex items-center mr2">
        <div class="mr1">合计:</div>
        <div class="flex items-end color_primary">
          <span> <span class="fs17 bold">868积分</span>+ </span>
          <span>168元 (免运费)</span>
        </div>
      </div>
      <template #tip>
        <div>
          <img class="pay_t_img" src="/static/img/pay_t.png" alt="" />
          您正在安全购物环境中，请放心购买
        </div>
      </template>
    </van-submit-bar>

    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="areaConfirm"
        @cancel="showArea = false"
      />
    </van-popup>
  </div>
</template>
<script>
import areaList from "./area.js";
export default {
  data() {
    return {
      showArea: false,
      areaList: areaList, // 数据格式见 Area 组件文档
      pay: "weixin",
      time: 3 * 60 * 1000,
      model: {
        username: "",
        phone: "",
        area: "",
        address: "",
      },
    };
  },
  methods: {
    onSubmit() {
      for (let key in this.model) {
        if ({}.hasOwnProperty.call(this.model, key)) {
          return false;
        }
      }
      this.$router.push("/order");
    },
    areaConfirm(values) {
      this.model.area = values.map((item) => item && item.name).join("/");
      this.showArea = false;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/less/common.less";
.pay-wrap {
  padding-bottom: 110px;
}
.pay-header {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  position: relative;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
  }
}

.pay-header-ctt {
  padding: 20px 10px 0;
  box-sizing: border-box;
  z-index: 1;
  position: relative;
  .desc {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
  .desc-text {
    z-index: 1;
  }
  .time-ctt {
    margin-top: 4px;
  }
  .count-down-ctn {
    color: #fff;
    font-size: 18px;
  }
}
.contact-card {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 20px;
}
.contact-card-ctt {
  background-color: #fff;
  border-radius: 6px;
  padding: 18px;
}
.goods-ctn {
  padding: 0 10px;
  box-sizing: border-box;
  .goods-info {
    background-color: #fff;
    padding: 18px;
  }
  .pay-text {
    margin-left: 10px;
  }
  .spec-desc {
    color: #7c7c7c;
    font-size: 12px;
  }
  .pay-tag {
    background-color: rgba(229, 70, 53, 0.2);
    color: rgb(229, 70, 53);
  }
}

.way-ctn {
  height: 50px;
  padding: 0 18px;
  margin-top: 10px;
}
.pay-point {
  padding: 10px 18px;
  margin-top: 10px;
}
.payment-wrap {
  margin-top: 10px;
  padding: 10px;
  .payImg {
    margin-right: 10px;
  }
  .van-cell {
    padding: 10px 0px;
  }
  .payt1 {
    margin: 0 6px;
  }
}

.select-payment-container {
  .title {
    height: 30px;
  }
}
.pay-text-span {
  display: inline-block;
}

.pay-radio.checked /deep/ i {
  color: #fff;
  background-color: rgb(224, 0, 0);
  border-color: rgb(224, 0, 0);
}

.pay-submit-bar {
  .van-submit-bar__tip {
    background-color: #dff1da;
    color: #636862;
    text-align: center;
  }
}

.pay_t_img {
  width: 23px;
  height: 23px;
  vertical-align: middle;
  display: inline-block;
}
</style>