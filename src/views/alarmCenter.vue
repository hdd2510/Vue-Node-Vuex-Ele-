<template>
  <div class="home">
    <h2>
      userName: {{userName}}
    </h2>
    <h3>
      firstLetter:{{firstLetter}}
    </h3>
    <el-button type="info" @click="changeUserName">改值</el-button>
  </div>
</template>

<script>
import {} from 'element-ui'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    name : 'store',
    data () {
      return {

      }
    },
    computed: {

      ...mapState({
         userName: (state)=>{
          return state.user.userName
        }
      }),
      ...mapGetters([
        'firstLetter'
        ]),

    },
    components: {

    },
    methods: {
      ...mapActions([
        'updateUserName'
      ]),
      changeUserName () {
        this.updateUserName({userId:1})
      },
    }
  }
</script>


<style lang="less">


</style>

