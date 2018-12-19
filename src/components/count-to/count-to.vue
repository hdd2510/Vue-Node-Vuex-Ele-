<template>
  <div>
    <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>


<script>
  import CountUp from 'countup'
  import './count-to.less'
  export default {
    name: 'CountTo',
    computed: {
      eleId() {
        return `count_up${this._uid}`
      },
      countClass() {
        return [
          'count-to-number',
          this.className
        ]
      }
    },
    data() {
      return {
        counter: {}
      }
    },
    props: {
      // 起始值
      startVal: {
        type: Number,
        default: 0
      },
      // 结束值
      endVal: {
        type: Number,
        required: true
      },
      // 小数点后保留几位小数
      decimals: {
        type: Number,
        default: 0
      },
      // 动画持续时长
      duration: {
        type: Number,
        default: 1
      },
      //  是否使用变速
      useEasing: {
        type: Boolean,
        default: false
      },
      //  是否使用分组
      useGrouping: {
        type: Boolean,
        default: false
      },
      //  分组符号
      separator: {
        type: String,
        default: ','
      },
      //  整数和小数的分组符号
      decimal: {
        type: String,
        default: '.'
      },
      //延时时间
      delay: {
        type: Number,
        default: 0,
      },
      className: {
        type: String,
        default: '',
      }
      // 对象的默认传值需要 在回调函数里传值
      // name : ()=>{
      //   return{
      //     name : 'lison'
      //   }
      //   传递数组
      //   return{
      //     name : 'lison'
      //   }
      // }
    },
    methods: {
      getCount() {
        // console.log(this.$refs.number.innerText)
        return this.$refs.number.innerText
      },
      emitEndEvent() {
        setTimeout(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        }, this.duration * 1000 + 5)
      }
    },
    watch: {
      endVal(newVal, oldVal) {
        // 监听初始值的变化
        this.counter.update(newVal)
        // 动画持续时间
        this.emitEndEvent()
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        })
        setTimeout(() => {
          this.counter.start()
          this.emitEndEvent()
        }, this.delay)
      })
    }
  }
</script>

<style lang="less">
  .count-to-number{
    font-size: 20px
  }
</style>

