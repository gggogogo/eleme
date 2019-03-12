<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <keep-alive>
            <router-view :seller="seller"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import header from './components/header/header';
  import {urlParse} from './common/js/util.js';
  const ERR_OK = 0;
  export default {
    data () {
      return {
        seller: {
          // eslint-disable-next-line
          id: (() => {
            // eslint-disable-next-line
            let queryParam = urlParse();
            console.log('queryParam.id');
            console.log(queryParam.id);
            return queryParam.id;
          })()
        }
      };
    },
    /** create vue生命周期相关内容 */
    created () {
      // console.log(1);
      this.$http.get('api/seller?id=' + this.seller.id).then((response) => {
        // console.log(response);
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = Object.assign(this.seller, response.data);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl";
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    //border-bottom: 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a          //  &表示父元素
        display: block
        text-decoration:none
        font-size: 14px
        color: rgb(77,85,93)
        &.active
          color: rgb(240,20,20)
</style>
