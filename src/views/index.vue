<template>
  <div
    ref="wrap"
    style="
      width: 100%;
      height: 100%;
      overflow: auto;
      padding-bottom: 50px;
      box-sizing: border-box;
    "
  >
    <div class="index-notice" v-show="showNotice">
      <img
        src="data:image/gif;base64,R0lGODlhkACQAIABAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBMDA1QTYzMzA4RjExRUFBRkNDQjlDNjZFREEzODRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBMDA1QTY0MzA4RjExRUFBRkNDQjlDNjZFREEzODRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEEwMDVBNjEzMDhGMTFFQUFGQ0NCOUM2NkVEQTM4NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEEwMDVBNjIzMDhGMTFFQUFGQ0NCOUM2NkVEQTM4NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFHgABACwAAAAAkACQAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8M4gDEIkCIhBiLyeZiaXRKA9DoNFldXoNZ6PbX9X55YfE4VzafbWn1etZ2v2Fx+bxVt99T+ere1ef3txIoOIhSaHhYkqi4KNLo+PgRKTnJUWl5iZGZtdnR6fmpESo6elFqekqRqroa0er66hArO6tQ23WXy0s019u7BgwsPMxbbFyLnNy6zFzq/NwZLV1JXd14jV2ovd3X7V0HHt42Tl5mfq57pp7N3s79Dv8tPy9eb1+On4++z78+5l+cdP8I8jOYD6E9hfMYwnPYDqI6iecokrMYDqM3ja7bOGLzWA2kNJHPSDIzmQylMZXDWBLzJ1CPk5hpXAaDSZMJzpxHdua0ecwnTaC5fvGUeeWolVsNSjJ9kPIp1JZSp96sSusq1qZBt1pt5lVJrLCwwJL9Ou2s2FBqy6Zti9Yd3Ljx5q5NZFdCpLx68fJ1S+/v3XuCB+srbLgf4sQAFzNG6jjB4ciPdVIGDPmyZFuauWrpPEET6NGkS5s+jTq16tWsW7t+DTu27NkRCgAAIfkEBR4AAQAsWgAqABYAOQAAAnCMgWjLfQmdhBRIVut9Od6uTSAljl5jkk6afKxVmts7p1vA3rYu1+ON+/FAwN6wUxT6kMdMktgMLZ1R1VTqgl6tWeb21KV+W2NFFbwyxrxrbFr5hqPUc/oiF7cHd3X+nZan1Sc4KNbGFYa2BdTHaFAAACH5BAUeAAEALGoAGQAcAFsAAAK4jIFpy+2RIniUSVnrxbnt21kfF0JjVJqnUq5s6L5djKT01Mapuu6679rxRsBekSgMHj/C4SZpXIKgJypSSrJVm1Ht1cvkfsFh8hObhXXVW/MULcuN2WU3ynqG1/Bve5ye57enh0MoNjfTJlgoh6ixlqgIGDjZV5kWSXn5l6nZafmJGXpnSMi4yUmhtHiasdpYN0oK66n66nr7CKkryevoQEMba5v7cIMqCvyDPMjMByrbtFBLJh1QAAA7"
      />
      <div>
        您的
        <span>6580</span>
        积分将在 2020年11月14日 23:59:59过期
      </div>
    </div>
    <div class="index-header-container">
      <div class="index-header-content">
        <div class="index-header-btn">
          <div>查询订单</div>
          <div>联系客服</div>
          <div>积分规则</div>
        </div>
        <div class="index-ring-ctn">
          <div class="index-ring-box">
            <div
              class="ring"
              style="background-image: url(/static/img/ring.svg)"
            ></div>

            <p class="ring_p1">我的积分</p>
            <p class="ring_p2">6630</p>
            <p
              data-clipboard-text="6.0fu置本段内容￥ALrQcfZrW4n￥到👉τa0寳👈或点几链街 https://m.tb.cn/h.VyH3Osd 至瀏lan嘂..【2小时热销爆款排行榜】"
              class="ring_p3"
            >
              已签到
            </p>
          </div>
          <p>积分可兑换商品，七天后过期清零，请尽快使用</p>
        </div>
      </div>
      <div class="index-sign">
        <div class="index-sign-ctt">
          <div class="index-sign-left">
            <div>已签到</div>
            <div class="sign-day">1天</div>
          </div>
          <div class="index-sign-right">
            <ul>
              <li
                v-for="(item, index) in signData"
                :key="index"
                :class="{ signed: item.signed }"
              >
                <div>{{ item.date }}</div>

                <i
                  v-if="item.signed"
                  class="signed-icon van-icon van-icon-checked"
                  style="color: rgb(54, 171, 96)"
                ></i>
                <div v-else class="circle"></div>

                <div>{{ item.text }}</div>
              </li>
              <div class="bg-line"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <van-sticky>
      <div class="index-tabs">
        <div
          class="index-tab"
          v-for="(item, index) in tabsData"
          :key="index"
          :class="{ active: index === tabActive }"
          @click="tabClick(index)"
        >
          <div>{{ item.text }}</div>
          <div class="tab-sub-text">{{ item.label }}</div>
        </div>
      </div>
    </van-sticky>

    <van-count-down
      v-show="tabActive === 0"
      class="count-down-ctn"
      :time="time"
      format="兑换倒计时 HH 时 mm 分 ss 秒"
    />

    <van-pull-refresh v-model="refreshing" @refresh="handleRefresh">
      <van-list
        class="index-list"
        v-model="loading"
        :finished="finished"
        :offset="10"
        :loading-text="`加载中...`"
        @load="onload"
      >
        <div>
          <div
            class="list_item"
            v-for="(item, index) in listData"
            :key="index"
            @click="handlePushDetail(item.id)"
          >
            <van-image
              :src="item.img"
              lazy-load
            ></van-image>
            <div class="list_item_text_ctt">
              <div class="list_item_p1">{{ item.name }}</div>
              <div class="list_item_p2">
                <span class="point">{{ item.integral }}</span>
                <span class="orginal-price">{{ item.discount }}</span>
              </div>
              <div class="list_item_p3">
                <div class="sale-desc">兑换热度5.2万+</div>
                <div class="price">{{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>

    <van-tabbar v-model="tabBarActive">
      <van-tabbar-item
        v-for="(item, index) in tabBarData"
        :key="index"
        :name="item.name"
        :icon="item.icon"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { getList } from "@/api/goods";

export default {
  data() {
    return {
      showNotice: true,
      tabBarActive: "home",
      tabBarData: [
        {
          text: "首页",
          icon: "home-o",
          name: "home",
        },
        {
          text: "积分兑换",
          icon: "points",
          name: "point",
        },
        {
          text: "福利中心",
          icon: "point-gift-o",
          name: "fulizhongxin",
        },
      ],
      time: 2 * 60 * 60 * 1000,
      sign: false,
      current: 1,
      pageSize: 10,
      refreshing: false,
      loading: false,
      finished: false,
      signData: [
        {
          date: "11.6",
          signed: true,
          text: "已签",
        },
        {
          date: "11.7",
          signed: false,
          text: "+100",
        },
        {
          date: "11.8",
          signed: false,
          text: "+100",
        },
        {
          date: "11.9",
          signed: false,
          text: "+100",
        },
        {
          date: "11.10",
          signed: false,
          text: "+100",
        },
        {
          date: "11.11",
          signed: false,
          text: "+100",
        },
        {
          date: "11.12",
          signed: false,
          text: "+100",
        },
      ],
      tabActive: 0,
      tabsData: [
        {
          text: "推荐",
          label: "超级优选",
        },
        {
          text: "美妆",
          label: "焕颜新生",
        },
        {
          text: "电器",
          label: "智能生活",
        },
        {
          text: "居家",
          label: "温暖的家",
        },
        {
          text: "美食",
          label: "吃货必看",
        },
      ],
      listData: [],
    };
  },
  methods: {
    onload() {
      getList({ current: this.current, pageSize: this.pageSize })
        .then((response) => {
          const { current, pageSize, total, data } = response;
          this.listData = [...this.listData, ...data];
          this.loading = false;

          if (Number(current) * Number(pageSize) >= Number(total)) {
            this.finished = true;
          } else {
            this.current += this.current + 1;
          }
        })
        .catch((e) => {
          this.loading = false;
          this.finished = true;
        });
    },
    tabClick(index) {
      this.$refs.wrap.scrollTop = 300;
      this.tabActive = index;
      this.listData = [];
      this.loading = true;
      this.finished = false;

      this.onload();
    },
    handleRefresh() {
      this.finished = true;
      this.loading = true;
      this.onload();
    },
    handlePushDetail(id) {
      this.$router.push({
        path: `/${id}/detail`,
        params: {
          id: id
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
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
.index-header-container {
  position: relative;
  padding: 0 0 35px 0;
  background-color: #fff;
  .index-header-content {
    width: 100%;
    height: 260px;
    position: relative;
    z-index: 10;
    background-image: url("/static/img/bg_1.png");
  }
  .index-header-btn {
    position: absolute;
    z-index: 11;
    right: 0;
    height: 100%;
    padding-top: 50px;
    > div {
      padding: 5px 8px 5px 12px;
      margin: 8px 0;
      font-size: 12px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: rgba(26, 142, 233, 0.7);
      color: #fff;
    }
  }
}

.index-ring-ctn {
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  > p {
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #333;
    margin-top: 19px;
  }
  .ring {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .index-ring-box {
    position: relative;
    width: 140px;
    height: 140px;
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    left: 0;
    right: 0;
    border-radius: 50%;
  }
  .index-ring-box1 {
    position: absolute;
    top: 30%;
    left: 0;
    text-align: center;
  }
  .ring_p1 {
    padding-top: 30px;
    width: 100%;
    font-size: 14px;
    color: #383838;
  }
  .ring_p2 {
    width: 100%;
    padding-top: 5px;
    font-size: 28px;
    color: #383838;
  }
  .ring_p3 {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;
    width: 120px;
    height: 35px;
    line-height: 35px;
    border-radius: 25px;
    text-align: center;
    background-image: linear-gradient(-90deg, #1a8ee9, #1a8ee9);
    color: #fff;
    font-weight: 700;
  }
}

.index-sign {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
  .index-sign-ctt {
    margin: 0 10px;
    height: 70px;
    z-index: 50;
    border: 1px solid #f1f1f1;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
}
.index-sign-left {
  height: 100%;
  padding: 0 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #1a8ee9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  align-items: center;
  .sign-day {
    font-size: 20px;
  }
}

.index-sign-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  > ul {
    position: relative;
    height: 100%;
    justify-content: space-between;
    display: flex;
    padding: 0;
    margin: 0;
    > li {
      display: flex;
      color: #1a8ee9;
      padding: 6px 0;

      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      &.signed {
        color: #1368de;
      }
    }
    > div {
      position: absolute;
      top: 50%;
      left: 10px;
      width: calc(100% - 20px);
      height: 1px;
      border-top: 1px dotted #1a8ee9;
    }
    .signed-icon {
      font-size: 16px;
    }
    .circle {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #1a8ee9;
    }
  }
}
.index-tabs {
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px #ccc;
  > .index-tab {
    text-align: center;

    &.active {
      color: #e54635;
      .tab-sub-text {
        color: #fff;
        background: #e54635;
      }
    }
    .tab-sub-text {
      padding: 2px 5px;
      font-size: 12px;
      color: #b1b1b1;
      border-radius: 11px;
      background: #fff;
    }
  }
}
.count-down-ctn {
  width: 80%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #ffc155;
  border-radius: 20px;
  padding: 8px;
  margin-top: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  // span.block {
  //   font-size: 16px;
  //   font-weight: 600;
  //   margin: 0 10px;
  // }
}
.index-list {
  width: 100%;
  min-height: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  box-sizing: border-box;
  .list_item {
    width: calc(50% - 10px);
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
    margin-top: 10px;
    img {
      width: 100%;
    }
  }
  /deep/ .van-list__loading {
    width: 100%;
  }
  .list_item_text_ctt {
    height: 85px;
    padding-bottom: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 7px;
    padding-right: 7px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .list_item_p1 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .list_item_p2 {
    color: #e54635;
    font-size: 16px;
    > .point {
      font-weight: 700;
    }
    .orginal-price {
      font-size: 13px;
    }
  }
  .list_item_p3 {
    display: flex;
    justify-content: space-between;
    color: #ff3600;
  }
  .sale-desc {
    font-size: 12px;
  }
  .price {
    text-decoration: line-through;
    font-size: 12px;
    color: #888;
  }
}
/deep/ .van-tabbar-item {
  font-size: 14px;
}
</style>