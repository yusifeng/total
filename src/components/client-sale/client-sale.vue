<template>
  <div class="desc-background">
    <div class="container">
      <ul>
        <li><img src="./01.png" alt="" width="100%"></li>
        <li><img src="./02.png" alt="" width="100%"></li>
        <li><img src="./03.png" alt="" width="100%"></li>
        <li><img src="./04.png" alt="" width="100%"></li>
        <li><img src="./05.png" alt="" width="100%"></li>
        <li><img src="./06.png" alt="" width="100%"></li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .desc-background
    width 100%
    height 410px
    .container
      padding-top 60px
      ul
        li
          float left 
          width 33.3%
          height 105px
          margin-bottom 25px
</style>
