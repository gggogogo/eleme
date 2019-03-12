<template>
  <div class="test">
      <div ref="wrapper"></div>
      <ul class="par" ref="par">
          <li v-for="(item,index) in seller.pics" :key="index">
              <img :src="item" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
props: {
    seller: {
        type: Object
    }
}
};

</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
