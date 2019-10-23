<template>
  <div class="swiper">
    <van-swipe class="slide" :autoplay="3000" indicator-color="#fff">
      <van-swipe-item v-for="item in imgList" :key="item.bannerId" style="float:left">
        <img v-lazy="item.imgUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Films',

  data () {
    return {
      imgList: []
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
.swiper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .slide {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
    .van-swipe__indicators {
      position: relative;
      top: -20px;
      right: -80%;

      .van-swipe__indicator {
        float: left;
        border: 1px solid #fff;
        margin-left: 10px;
        height: 5px;
        width: 5px;
        display: block;
        border-radius: 20px;
      }
    }
  }
}
</style>
