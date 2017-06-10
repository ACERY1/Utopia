<template>
	<div class="bannerBox">
		<el-carousel :interval="5000" arrow="always" height="24rem"  trigger="click">
			<el-carousel-item v-for="item,index in bannerItems" :key="item" class="banner">
				<div class="banner-bg">
					<img v-lazy="item.picUrl" alt="">
				</div>
				<div class="banner-item">
					<div class="banner-item-title">{{item.bnrTitle}}</div>
					<div class="banner-item-cont">{{item.bnrCont}}</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		props: {
			bannerItems: {
				type: Array,
				default: function () {
					return [
						{
							picUrl: "http://pic1.5442.com/2013/0525/05/13.jpg",
							bnrTitle: "ECMAScript6 从入门到放弃",
							bnrCont: "ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。"
						}
					]
				}
			}
		},
		computed: {},
		created () {
		},
		mounted () {
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";

	.banner {
		/*position: relative;*/
		width: 100%;
		&-bg {
			position: absolute;
			width: 100%;
			height: 100%;
			img {
				margin-top: -20%;
				width: 100%;
			}
		}
		&-item {
			@include allMidBox();
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.3);
			position: absolute;
			color: #333333;
			&-title {
				border: solid #ffffff;
				border-width: 0 0 1px 0;
				@include allMidBox();
				height: 30%;
				margin-bottom: 1rem;
				@include fontSizeColor(4rem, lighten($fontClr, 60%));
				font-weight: 300;
			}
			.divider {
				@include allMidBox();
				height: 2%;
				@include fontSizeColor(4rem, lighten($fontClr, 60%));
			}
			&-cont {
				@include verMidBox();
				height: 40%;
				width: 80%;
				overflow: hidden;
				@include fontSizeColor(1.4rem, lighten($fontClr, 60%));
				font-weight: 300;
			}
		}
	}

	/*
	screen  width小于1060不显示
	 */
	@media screen and (max-width: 1060px) {
		.bannerBox{
			display: none;
		}
	}
</style>
