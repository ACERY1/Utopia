<template>
  <div class="body">
	  <transition name="router-fade" mode="out-in">
		  <router-view></router-view>
	  </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "common/style/common";
	@import "common/style/mixin";
	.body{
		background-color: $bgClr;
		height: 100rem;
	}
</style>
