<template>
	<div class="body">
		<my-header :links="links" :activeIndex="links[0].link" ></my-header>
		<transition name="router-fade" mode="out-in">
			<router-view class="App-padding"></router-view>
		</transition>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import myHeader from './components/bars/header.vue'
	import myFooter from './components/bars/footer.vue'
	export default {
		name:'',
		components: {
			myHeader,
			myFooter
		},
		data () {
			return {
				links:[
					{name: '首页', link: 'home'},
					{name: '分类', link: 'categories'},
					{name: '足迹', link: 'footPrint'},
					{name: '后台登录', link: 'admin'}
				]
			}
		},
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "common/style/common";
	@import "common/style/mixin";

	.body {
		background-color: rgba(242,242,242,1);
		height: 100%;
	}
	.App-padding{
		padding-top: 5rem;
	}
</style>
