<template>
  <div class="index">
    <div class="content">
      <transition
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutUp"
        mode="out-in"
        appear
      >
        <router-view></router-view>
      </transition>
    </div>

    <ul class="footerBar">
      <router-link tag="li" to="/films">
        <i class="iconfont icon-dianying"></i>
        <span>电影</span>
      </router-link>
      <router-link tag="li" to="/cinema">
        <i class="iconfont icon-yingyuan"></i>
        <span>影院</span>
      </router-link>
      <router-link tag="li" to="/news">
        <i class="iconfont icon-zixun"></i>
        <span>咨询</span>
      </router-link>
      <router-link tag="li" to="center">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
@import './src/assets/common/mixins.scss';

.index {
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
  }
  .footerBar {
    @include border-top;
    height: 50px;
    display: flex;

    li {
      flex: 1;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #a7a9ad;

      .iconfont {
        font-size: 23px;
        padding: 8px 0 0 0;
      }
      span {
        font-size: 10px;
        line-height: 20px;
      }

      &.router-link-exact-active {
        color: #ff5f16;
      }
    }
  }
}
</style>
