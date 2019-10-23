<template>
  <div class="films-page">
    <!-- 轮播图 -->
    <van-swipe class="slide" :autoplay="3000" indicator-color="#fff">
      <van-swipe-item v-for="item in imgList" :key="item.bannerId">
        <img v-lazy="item.imgUrl" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 切换按钮 -->
    <div class="tabs">
      <ul>
        <li
          @click="chgFilmType('nowPlaying')"
          :class="{'active': curFilmType === 'nowPlaying'}"
        >正在热映</li>
        <li
          @click="chgFilmType('comingSoon')"
          :class="{'active': curFilmType === 'comingSoon'}"
        >即将上映</li>
      </ul>
      <div class="active-line" :style="{'left':curFilmType === 'nowPlaying' ? '0' : '50%'}">
        <span></span>
      </div>
    </div>

    <!-- 影片列表的数据，使用动态组件来控制 -->
    <component :is="curFilmType" />
  </div>
</template>

<script>
import nowPlaying from '../../components/nowPlaying'
import comingSoon from '../../components/comingSoon'

import axios from 'axios'

export default {
  name: 'Films',

  components: {
    nowPlaying,
    comingSoon
  },

  data () {
    return {
      imgList: [],
      curFilmType: 'nowPlaying'// 当前的影片类型
    }
  },

  methods: {
    // 切换当前影片类型
    chgFilmType (type) {
      this.curFilmType = type
    }
  },

  created () {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        type: 2,
        cityId: 440300,
        k: 3016065
      },

      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156975901817665200492650"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    })
      .then(Response => {
        console.log(Response.data.data)
        let result = Response.data.data
        this.imgList = result
      })
  }
}
</script>

<style lang="scss">
@import './src/assets/common//mixins.scss';
.films-page {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .slide {
    position: relative;
    height: 200px;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }

    .van-swipe__indicators {
      position: absolute;
      bottom: 10px;
      left: 90%;
      display: flex;
    }
  }

  .tabs {
    height: 50px;
    @include border-bottom;

    ul {
      height: 50px;
      display: flex;
      align-items: center;

      li {
        flex: 1;
        text-align: center;
        font-size: 14px;
      }

      &.active {
        color: #ff5f16;
      }
    }
  }

  .active-line {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 50%;
    transition: left 0.3s;

    span {
      height: 2px;
      display: block;
      width: 56px;
      margin: auto;
      background: #ff5f16;
    }
  }
}
</style>
