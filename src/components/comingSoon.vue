<template>
  <div class="films-page">
    <ul class="film-list">
      <router-link
        tag="li"
        :to="`/film/${film.filmId}`"
        class="filmInfo"
        v-for="film in filmList"
        :key="film.filmId"
      >
        <div class="left">
          <img :src="film.poster" alt />
        </div>
        <div class="center">
          <div class="name">
            {{ film.name }}
            <i class="iconfont icon-d"></i>
          </div>
          <div class="grade">
            观众评分
            <span>{{ film.grade ? film.grade : '暂无评分' }}</span>
          </div>
          <div class="actors">主演：{{ formatActors(film.actors) }}</div>
          <div class="detail">{{ film.nation }} | {{ film.runtime }}分钟</div>
        </div>
        <div class="right">
          <button class="btn">预购</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'nowPlaying',

  data () {
    return {
      filmList: []
    }
  },

  methods: {
    formatActors (actors) {
      let tmp = actors.map(item => {
        return item.name
      })
      return tmp.join(' ')
    }
  },

  created () {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        pageNum: 1,
        pageSize: 10,
        type: 2,
        k: 9718742
      },

      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156975901817665200492650"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then(response => {
        // console.log(response.data.data)
        let result = response.data.data.films
        this.filmList = result
      })
  }

}
</script>

<style lang="scss">
@import '../assets/common/mixins.scss';
.films-page {
  .film-list {
    margin-left: 15px;
  }

  .filmInfo {
    display: flex;
    height: 94px;
    overflow: hidden;
    padding: 15px 15px 15px 0;
    @include border-bottom;

    .left {
      width: 66px;
      flex-shrink: 0;

      img {
        height: 100%;
      }
    }

    .right {
      width: 50px;
      flex-shrink: 0;
      display: flex;
      align-items: center;

      .btn {
        border: none;
        @include border;
        width: 50px;
        height: 25px;
        background: none;
        font-size: 13px;
        color: #ff5f16;
      }
    }

    .center {
      flex: 1;
      padding: 0 10px;
      line-height: 1.6;
      overflow: hidden;

      > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .name {
        font-size: 16px;
        color: #191a1b;
      }

      .grade {
        color: #797d82;
        font-size: 13px;

        span {
          color: #ffb232;
          font-size: 14px;
        }
      }

      .actors {
        color: #797d82;
        font-size: 13px;
      }

      .detail {
        color: #797d82;
        font-size: 13px;
      }
    }

    .icon-d {
      color: #d2d6dc;
      font-size: 12px;
      padding: 0 2px;
    }
  }
}
</style>
