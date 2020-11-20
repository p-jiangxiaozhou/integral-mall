<template>
  <div
    ref="detailWrap"
    style="
      width: 100%;
      height: 100%;
      overflow: auto;
      padding-bottom: 50px;
      box-sizing: border-box;
    "
  >
    <div class="index-notice">
      <img
        src="data:image/gif;base64,R0lGODlhkACQAIABAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBMDA1QTYzMzA4RjExRUFBRkNDQjlDNjZFREEzODRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBMDA1QTY0MzA4RjExRUFBRkNDQjlDNjZFREEzODRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEEwMDVBNjEzMDhGMTFFQUFGQ0NCOUM2NkVEQTM4NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEEwMDVBNjIzMDhGMTFFQUFGQ0NCOUM2NkVEQTM4NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFHgABACwAAAAAkACQAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8M4gDEIkCIhBiLyeZiaXRKA9DoNFldXoNZ6PbX9X55YfE4VzafbWn1etZ2v2Fx+bxVt99T+ere1ef3txIoOIhSaHhYkqi4KNLo+PgRKTnJUWl5iZGZtdnR6fmpESo6elFqekqRqroa0er66hArO6tQ23WXy0s019u7BgwsPMxbbFyLnNy6zFzq/NwZLV1JXd14jV2ovd3X7V0HHt42Tl5mfq57pp7N3s79Dv8tPy9eb1+On4++z78+5l+cdP8I8jOYD6E9hfMYwnPYDqI6iecokrMYDqM3ja7bOGLzWA2kNJHPSDIzmQylMZXDWBLzJ1CPk5hpXAaDSZMJzpxHdua0ecwnTaC5fvGUeeWolVsNSjJ9kPIp1JZSp96sSusq1qZBt1pt5lVJrLCwwJL9Ou2s2FBqy6Zti9Yd3Ljx5q5NZFdCpLx68fJ1S+/v3XuCB+srbLgf4sQAFzNG6jjB4ciPdVIGDPmyZFuauWrpPEET6NGkS5s+jTq16tWsW7t+DTu27NkRCgAAIfkEBR4AAQAsWgAqABYAOQAAAnCMgWjLfQmdhBRIVut9Od6uTSAljl5jkk6afKxVmts7p1vA3rYu1+ON+/FAwN6wUxT6kMdMktgMLZ1R1VTqgl6tWeb21KV+W2NFFbwyxrxrbFr5hqPUc/oiF7cHd3X+nZan1Sc4KNbGFYa2BdTHaFAAACH5BAUeAAEALGoAGQAcAFsAAAK4jIFpy+2RIniUSVnrxbnt21kfF0JjVJqnUq5s6L5djKT01Mapuu6679rxRsBekSgMHj/C4SZpXIKgJypSSrJVm1Ht1cvkfsFh8hObhXXVW/MULcuN2WU3ynqG1/Bve5ye57enh0MoNjfTJlgoh6ixlqgIGDjZV5kWSXn5l6nZafmJGXpnSMi4yUmhtHiasdpYN0oK66n66nr7CKkryevoQEMba5v7cIMqCvyDPMjMByrbtFBLJh1QAAA7"
      />
      <div>
        您的
        <span>6580</span>
        积分将在 2020年11月14日 23:59:59过期
      </div>
    </div>

    <van-swipe
      class="banner-swipe"
      :autoplay="3000"
      indicator-color=" rgb(255, 68, 68)"
    >
      <van-swipe-item v-for="(item, index) in goods.goodsPics" :key="index">
        <van-image :src="item.url" lazy-load />
      </van-swipe-item>
    </van-swipe>

    <div class="detail-price-ctn">
      <div class="price-left">
        <p style="color: rgb(255, 255, 255)">
          <span class="point" style="font-size: 24px">{{
            goods.integral
          }}</span>
          <span class="price">
            <span class="fs24" style="font-size: 24px">积分</span>
            <span>+{{ goods.discount }}元</span>
          </span>
          <span class="original-price">￥{{ goods.price }}</span>
        </p>
        <div class="hot">兑换热度1.3万+</div>
      </div>
      <div class="price-right">
        积分已省￥{{ goods.price - goods.discount }}元
      </div>
    </div>
    <div class="detail-header-info">
      <div class="goods-name">【{{ goods.name }}】{{ goods.subTitle }}</div>
      <div class="share-btn-box">
        <van-icon name="replay"></van-icon>
        <span style="padding-top: 1px">分享</span>
      </div>
      <div class="recommend">
        <div class="desc">
          <div class="rec-t">推荐理由</div>
          <div v-for="(item, index) in recommandData" :key="index">
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="fxg flex items-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAhCAYAAAD0zKSpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0RjZBQjBCMUNFNzExRUI4QjAwQ0E4OUU3OEJGMTA1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0RjZBQjBDMUNFNzExRUI4QjAwQ0E4OUU3OEJGMTA1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkFCMDkxQ0U3MTFFQjhCMDBDQTg5RTc4QkYxMDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkFCMEExQ0U3MTFFQjhCMDBDQTg5RTc4QkYxMDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4kq3hxAAAF3ElEQVR42sRb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"
          alt
        />
        <div v-for="(item, index) in fxgData" :key="index">
          <i class="fxg-icon" :class="item.icon"></i>
          <span class="fxg-text">{{ item.text }}</span>
        </div>
        <span
          class="van-icon van-icon-arrow"
          style="font-size: 14px; margin-right: 5px"
        ></span>
      </div>

      <div
        class="van-divider van-divider--hairline"
        style="height: 5px; background: rgb(239, 239, 239); margin: 10px 0px"
      ></div>

      <div class="count-down-container flex justify-between items-center">
        <div>
          <div class="count-down-container-title">厂家直供，仅剩27件</div>
        </div>
        <div class="flex flex-column items-end">
          <div class="flex items-center" style>
            <i class="van-icon van-icon-clock-o" style="margin-right: 5px"></i>
            <span class="count-text">限时抢购</span>
          </div>

          <van-count-down
            class="g-count-down-ctn"
            millisecond
            :time="time"
            format="HH:mm:ss:SS"
          ></van-count-down>
        </div>
      </div>
      <van-swipe
        vertical
        :show-indicators="false"
        :touchable="true"
        style="height: 100px; padding: 0 10px"
        :loop="true"
        :autoplay="2000"
      >
        <van-swipe-item v-for="(item, index) in dealNewData" :key="index">
          <div class="com-deal-recent" style="box-sizing: border-box">
            <div
              class="deep_black flex justify-between items-center"
              v-for="(ele, i) in item"
              :key="i"
            >
              <div>
                <img :src="ele.img" alt class="userIcon mr2" />
                <span class="deal-news">{{ ele.text }}</span>
              </div>
              <div class="newestBuy">马上抢</div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div
      class="van-divider van-divider--hairline"
      style="height: 5px; background: rgb(239, 239, 239); margin: 10px 0px 0"
    ></div>
    <van-cell
      title="选择规格"
      value="有一个规格"
      center
      clickable
      isLink
      @click="showGoods = true"
    />
    <div
      class="van-divider van-divider--hairline"
      style="height: 5px; background: rgb(239, 239, 239); margin: 0"
    ></div>
    <div class="com-section">
      <div class="title">积分精品推荐</div>
      <van-swipe :loop="false" :show-indicators="false" :width="146">
        <van-swipe-item
          style="width: 146px"
          v-for="(item, index) in pointRecData"
          :key="index"
        >
          <div class="P_ul_li com-box sbImg">
            <!-- <img src="/static/img/jf1.627a1c8b.png" class="In_c_r_Img1" />-->
            <div style="width: 100%; position: relative">
              <div style="position: relative" class="phImg">
                <img :src="item.img" />
              </div>
            </div>
            <p class="In_c_r_p">{{ item.title }}</p>
            <p class="In_c_r_p1">
              <span class="In_c_r_p2">{{ item.point }}</span>
              <span class="In_c_r_p3">{{ item.price }}</span>
            </p>
            <p class="In_c_r_p4">{{ item.hot }}+</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-divider
      style="height: 5px; background: rgb(239, 239, 239); margin: 10px 0"
    ></van-divider>

    <div class="comment-ctn">
      <div class="comment-title flex justify-between">
        <div>用户评价（300）</div>
        <div>89.89%好评</div>
      </div>
      <van-swipe
        class="comment-swipe"
        :loop="false"
        :show-indicators="false"
        :width="262"
      >
        <van-swipe-item
          style="width: 262px"
          v-for="(item, index) in commentData"
          :key="index"
        >
          <div style="margin-right: 10px">
            <div class="H_pl_ubox">
              <div class="H_pl_user">
                <img :src="item.img" class="H_pl_uImg" />
                <p class="H_pl_uname">{{ item.username }}</p>
              </div>
              <p class="H_pl_txt">{{ item.desp }}</p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-divider
      style="height: 5px; background: rgb(239, 239, 239); margin: 10px 0"
    ></van-divider>

    <div class="detail-ctn">
      <div class="detail-title">商品详情</div>
      <div v-html="goods.summary" />
    </div>

    <van-goods-action style="justify-content: flex-end">
      <van-goods-action-icon
        class="footer-home-btn"
        icon="home-o"
        text="首页"
        @click="$router.push('/')"
      />
      <van-goods-action-icon
        icon="service-o"
        text="客服"
        style="margin: 0 10px"
      />
      <van-goods-action-button
        type="danger"
        text="立即兑换"
        class="btn-bgcolor"
        @click="$router.push('/pay')"
        style="
          width: 60%;
          height: 100%;
          flex: none;
          border-radius: 0;
          margin: 0;
          align-self: flex-end;
          background: #ffb40e;
        "
      />
    </van-goods-action>

    <van-action-sheet v-model="showGoods" title="商品规格选择">
      <div class="content">
        <div class="goods-content">
          <div class="info-zone">
            <div class="flex items-end">
              <div
                class="van-image"
                style="
                  width: 80px;
                  height: 80px;
                  overflow: hidden;
                  border-radius: 5px;
                "
              >
                <img
                  src="https://img.jingdongyouxuan.com/841258620157952"
                  class="van-image__img"
                  style="object-fit: cover"
                />
              </div>
              <div class="ml2 flex flex-auto justify-between">
                <div class="flex items-end">
                  <div class="color_primary fs18 bold">
                    {{ goods.integral }}积分
                  </div>
                  <div class="color_primary">+</div>
                  <span class="color_primary">199元</span>
                </div>
                <div
                  class="color_gray_888"
                  style="text-decoration: line-through"
                >
                  3688元
                </div>
              </div>
            </div>
            <div class="mt2 spec-zone">
              <div>
                <div class="mb1 mt2 spec-title">样式</div>
                <div class="flex flex-wrap">
                  <span
                    class="mr2 my1 van-tag van-tag--round van-tag--large van-tag--default"
                    style="
                      background-color: rgba(229, 70, 53, 0.15);
                      color: rgb(229, 70, 53);
                    "
                    >TRS 8382</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="submit-btn bg_primary white flex flex-column items-center justify-center"
          >
            <!-- <div  class="extra-text"></div> -->
            <div class="submit-text">立即兑换</div>
          </div>
        </div>
      </div>
    </van-action-sheet>

    <div class="detail-back-top" v-show="showTop" @click="scrollTop">
      <i class="van-icon van-icon-upgrade"></i>
    </div>
  </div>
</template>
<script>
import { getDetail } from "@/api/goods";

export default {
  data() {
    return {
      currentId: null,
      showTop: false,
      showGoods: false,
      time: 10 * 60 * 60 * 1000,
      recommandData: [
        {
          text: "① 精工打造：一键跑秒，原装品质石英机芯",
        },
        {
          text: "② 高清镜面：防刮耐磨，强视夜光不惧黑夜",
        },
        {
          text: "③ 精钢表链：质感七珠，佩戴舒适经久耐用。",
        },
      ],
      bannerSwipeData: [
        {
          img: "https://img.jingdongyouxuan.com/837675033559040",
        },
        {
          img: "https://img.jingdongyouxuan.com/837675033559043",
        },
        {
          img: "https://img.jingdongyouxuan.com/837675033559041",
        },
      ],
      fxgData: [
        {
          icon: "van-icon van-icon-diamond-o",

          text: "差必赔",
        },
        {
          icon: "van-icon van-icon-diamond-o",

          text: "假一赔十",
        },
        {
          icon: "van-icon van-icon-diamond-o",

          text: "7天退换",
        },
        {
          icon: "van-icon van-icon-diamond-o",

          text: "全国包邮",
        },
      ],
      dealNewData: [
        [
          {
            img: "https://img.jingdongyouxuan.com/834327216685061",
            text: "刘**（188****6993）在6分钟前积分兑换了该商品,省了3389元",
          },
          {
            img: "https://img.jingdongyouxuan.com/834327216685061",
            text: "刘**（188****6993）在6分钟前积分兑换了该商品,省了3389元",
          },
        ],
        [
          {
            img: "https://img.jingdongyouxuan.com/834327216685061",
            text: "刘**（188****6993）在6分钟前积分兑换了该商品,省了3389元",
          },
          {
            img: "https://img.jingdongyouxuan.com/834327216685061",
            text: "刘**（188****6993）在6分钟前积分兑换了该商品,省了3389元",
          },
        ],
        [
          {
            img: "https://img.jingdongyouxuan.com/834327216685061",
            text: "刘**（188****6993）在6分钟前积分兑换了该商品,省了3389元",
          },
          {
            img: "https://img.jingdongyouxuan.com/834327216685061",
            text: "刘**（188****6993）在6分钟前积分兑换了该商品,省了3389元",
          },
        ],
      ],
      pointRecData: [
        {
          img: "https://img.jingdongyouxuan.com/841258356441088",
          title: "创维12L多功能电烤箱",
          point: "899积分",
          price: "+199元",
          hot: "兑换热度1万",
        },
        {
          img: "https://img.jingdongyouxuan.com/841258356441088",
          title: "创维12L多功能电烤箱",
          point: "899积分",
          price: "+199元",
          hot: "兑换热度1万",
        },
        {
          img: "https://img.jingdongyouxuan.com/841258356441088",
          title: "创维12L多功能电烤箱",
          point: "899积分",
          price: "+199元",
          hot: "兑换热度1万",
        },
      ],
      commentData: [
        {
          img: "https://img.jingdongyouxuan.com/838582359556096",
          username: "喜欢你de笑容",
          desp:
            "外观漂亮，小巧方便，功能实用，烧水泡茶做吃的都可以，居然还可以煮蛋！打算再买一个去办公室和同事一起分享",
        },
        {
          img: "https://img.jingdongyouxuan.com/838582359556096",
          username: "喜欢你de笑容",
          desp:
            "外观漂亮，小巧方便，功能实用，烧水泡茶做吃的都可以，居然还可以煮蛋！打算再买一个去办公室和同事一起分享",
        },
        {
          img: "https://img.jingdongyouxuan.com/838582359556096",
          username: "喜欢你de笑容",
          desp:
            "外观漂亮，小巧方便，功能实用，烧水泡茶做吃的都可以，居然还可以煮蛋！打算再买一个去办公室和同事一起分享",
        },
        {
          img: "https://img.jingdongyouxuan.com/838582359556096",
          username: "喜欢你de笑容",
          desp:
            "外观漂亮，小巧方便，功能实用，烧水泡茶做吃的都可以，居然还可以煮蛋！打算再买一个去办公室和同事一起分享",
        },
      ],
      detailImg: [
        {
          img: "https://img.jingdongyouxuan.com/838581752430592",
        },
        {
          img: "https://img.jingdongyouxuan.com/838581754003456",
        },
        {
          img: "https://img.jingdongyouxuan.com/838581755576320",
        },
        {
          img: "https://img.jingdongyouxuan.com/838581752430592",
        },
        {
          img: "https://img.jingdongyouxuan.com/838581754003456",
        },
        {
          img: "https://img.jingdongyouxuan.com/838581755576320",
        },
      ],
      goods: {},
    };
  },
  created() {
    const id = this.$route.params.id;
    this.currentId = id;
    getDetail(id).then((response) => {
      const { data } = response;
      this.goods = data;
    });
  },
  mounted() {
    let self = this;
    let wrap = self.$refs.detailWrap;
    wrap.onscroll = function () {
      let scrollTop = wrap.scrollTop;
      if (scrollTop > 60) {
        self.showTop = true;
      } else {
        self.showTop = false;
      }
    };
  },
  methods: {
    scrollTop() {
      this.$refs.detailWrap.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/common.less";
.index-notice {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  background-color: rgba(0, 0, 0, 0.4);
  > img {
    display: inline-block;
    vertical-align: middle;
    width: 15px;
    margin-left: 12px;
    margin-right: 7px;
  }
  > div {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #fff;
  }
}
.banner-swipe {
  height: 100vw;
}
.detail-price-ctn {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 1;
  padding: 0 12px;
  box-sizing: border-box;
  position: relative;
  background: url(/static/img/priceBg_1.png) no-repeat;
  background-size: 100% 100%;
  .price-left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    color: #fff;
  }
  .original-price {
    text-decoration: line-through;
    margin-left: 5px;
    font-weight: 400;
    color: #fff;
    font-size: 15px;
    opacity: 0.7;
  }
  .hot {
    font-size: 12px;
    opacity: 0.7;
  }
  .price-right {
    align-self: flex-end;
    color: #fff;
    width: 35%;
    color: #fff;
    text-align: right;
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 10px;
  }
}

.detail-header-info {
  position: relative;
}

.goods-name {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 10px;
  padding-right: 55px;
  box-sizing: border-box;
}

.share-btn-box {
  padding: 5px 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 15px 0 0 15px;
  background-color: #fcdad7;
  color: #e63729;
  position: absolute;
  right: 0;
  top: 30px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.recommend {
  margin-top: 10px;
  padding: 0 10px;
}
.desc {
  font-size: 12px;
  background-color: #f2f2f2;
  color: #4c4c4c;
  border-radius: 5px;
  line-height: 1.5;
  padding: 5px 10px;
}
.rec-t {
  color: #c7000b;
  margin-bottom: 5px;
  font-size: 14px;
}
.divider {
  width: 96%;
  position: relative;
  left: 2%;
  height: 1px;
  background-color: #f2f2f2;
  margin-top: 10px;
}

.fxg {
  margin-bottom: 9px;
  margin-top: 9px;
  padding-bottom: 5px;
  padding-left: 9.375px;
  padding-right: 5px;
  padding-top: 5px;
  color: #b29183;
  font-size: 12px;
  > img {
    width: 50px;
    height: 16px;
    margin-right: 5px;
  }
  > div {
    margin-right: 10px;
  }

  .fxg-icon {
    margin-right: 4px;
    display: inline-block;
    vertical-align: middle;
  }
  .fxg-text {
    display: inline-block;
    vertical-align: middle;
  }
}
.count-down-container {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

.count-text,
.g-count-down-ctn {
  font-weight: 500;
  font-size: 15px;
  color: rgb(223, 75, 46);
}
.count-down-container-title {
  font-weight: 700;
  font-size: 16px;
}
.deep_black {
  color: #656565;
  font-size: 14px;
  margin-top: 8px;
}
.userIcon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 7px;
}
.deal-news {
  display: inline-block;
  width: 80%;
  padding-right: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.newestBuy {
  width: 30%;
  text-align: center;
  padding: 3px;
  font-size: 16px;
  background-color: #e54635;
  border-radius: 31.5px;
  padding: 6px 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  -ms-flex-item-align: center;
  align-self: center;
}
.com-section {
  padding: 0 10px;
  .title {
    font-weight: 700;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
}
.com-box {
  width: 93.5%;
  display: inline-block;
  vertical-align: top;
  position: relative;
  overflow: hidden;
  margin: 10px auto 0;
  border-radius: 5px;
  font-size: 0;
  padding-bottom: 8px;
  background-color: #fff;
}
.phImg {
  height: 136px;
  > img {
    width: 100%;
    height: 100%;
  }
}
.In_c_r_Img1 {
  width: 20%;
  position: absolute;
  top: 0;
  left: 5px;
  z-index: 1;
}
.In_c_r_p {
  width: 90%;
  margin: 8px 0 2px 6%;
  font-size: 16px;
  color: #555;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.In_c_r_p1 {
  width: 90%;
  margin: 3px 0 0 6%;
  color: #ff3600;
}

.In_c_r_p2 {
  font-size: 14px;
}

.In_c_r_p3 {
  font-size: 12px;
}

.In_c_r_p4 {
  width: 90%;
  margin: 0 0 6px 6%;
  color: #666;
  font-size: 12px;
}

.comment-ctn {
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  .comment-title {
    > div:first-child {
      font-weight: 700;
    }
    > div:last-child {
      color: rgb(229, 70, 53);
    }
  }
}
.comment-swipe {
  margin-top: 10px;
}

.H_pl_ubox {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 3px;
  padding: 10px 0;
  min-height: 97px;
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.H_pl_ub1 {
  width: auto;
}

.H_pl_user {
  width: 90%;
  margin: 0 auto;
}

.H_pl_uImg {
  width: 30px;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 5px;
}

.H_pl_uname {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.6rem;
  color: #2a2a2c;
}

.H_pl_txt {
  width: 90%;
  margin: 0 auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.6rem;
  color: #7f7f7f;
  letter-spacing: 1px;
  margin-top: 10px;
}
.detail-title {
  font-size: 14px;
  font-weight: 700;
  height: 35px;
  line-height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
}
.footer-home-btn /deep/ .van-goods-action-icon__icon {
  color: #e54635;
}

.btn-bgcolor {
  -webkit-animation: bgcolor 0.5s infinite normal;
  animation: bgcolor 0.5s infinite normal;
}

@-webkit-keyframes bgcolor {
  50% {
    background-color: #e00;
  }
}

@keyframes bgcolor {
  50% {
    background-color: #e00;
  }
}

.detail-back-top {
  position: fixed;
  bottom: 80px;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.4);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 40px;
  > i {
    font-size: 22px;
    display: inline-block;
    vertical-align: middle;
  }
}
.goods-content {
  padding: 0 20px;
  .spec-zone {
    min-height: 200px;
  }

  .submit-btn {
    margin-bottom: 20px;
    border-radius: 22px;
    height: 44px;
    text-align: center;
    color: #fff;
  }
  .spec-title {
    margin: 10px 0 6px;
    font-size: 15px;
  }
}
</style>