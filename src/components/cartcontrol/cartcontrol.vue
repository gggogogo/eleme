<template>
  <div class="cartcontrol">
      <transition name="move">
        <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
            <span class="icon-remove_circle_outline inner"></span>
        </div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
    import Vue from 'vue';
export default {
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        addCart (event) {
            if (!this.food.count) {
                Vue.set(this.food, 'count', 1);
            } else {
                this.food.count++;
            }
            console.log('add');
            this.$emit('cartAdd', event.target);
        },
        decreaseCart () {
            if (!this.food.count) {
                return;
            } else {
                this.food.count--;
            }
        }
    }
};

</script>
<style lang='stylus' rel='stylesheet/stylus'>
    .cartcontrol
        font-size 0
        .move-enter-active,.move-leave-active
            transition all 0.4s
            .inner
                transition all 0.4s
        .move-enter,.move-leave-to
            opacity 0
            transform translate3d(24px,0,0)
            .inner
                transform rotate(0)
        .move-enter-to,.move-leave
            opacity 1
            transform translate3d(0,0,0)
            .inner
                transform rotate(180deg)
        .cart-decrease
            display inline-block
            padding 6px
            .inner
                display inline-block
                font-size 24px
                line-height 24px
                color rgb(0,160,220)
        .cart-count
            display inline-block
            vertical-align top
            width 12px
            padding-top 6px
            line-height 24px
            text-align center
            font-size 10px
            color rgb(147,153,159)
        .cart-add
            display inline-block
            padding 6px
            font-size 24px
            line-height 24px
            color rgb(0,160,220)
</style>
