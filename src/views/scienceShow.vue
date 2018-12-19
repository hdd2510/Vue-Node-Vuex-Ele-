<template>
  <div class="about">
    <h3>{{food}}</h3>
  </div>
</template>
<script>
  export default {
    props: {
      food: {
        type: String,
        default: '水果'
      }
    }
  }
</script>
