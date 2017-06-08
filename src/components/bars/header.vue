<template>
	<div class="header-box">
		<el-row>

			<el-menu :default-active="activeIndex" class="header" mode="horizontal" @select="handleSelect">
				<el-col :span="display" v-for="link of links" :key="link" class="header-item">
					<el-menu-item :index="link.link" class="header-button">{{link.name}}</el-menu-item>
				</el-col>
			</el-menu>

		</el-row>
	</div>
</template>

<script>
	export default {
		name: "header",
		components: {},
		data () {
			return {
			}
		},
		props: {
			links: {
				default: [
					{name: 'null', link: 'null'}
				]
			},
			activeIndex: {
				default: 'null'
			}
		},
		computed: {
			display () {
				return parseInt(24 / this.links.length)
			}
		},
		created () {

		},
		mounted () {

		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";

	.el-menu-item.is-active {
		color: #42b983;
		//	@include fullBorder(1px,#42b983); button加边框
		border-bottom: 5px solid #42b983;

	}

	.header-box {
		position: fixed;
		width: 100%;
		box-shadow: lighten($fontClr, 40%) 1px 5px 5px;
	}

	.header {
		height: 5rem;
		width: 100%;
		background: #ffffff;
		&-item {
			margin-top: .4rem;
			margin-bottom: .4rem;
			height: 4rem;
			/*margin: 20px;*/
		}
		&-button {
			@include wh(80%, 100%);
			@include allMidBox();
			font-size: 1.4rem;
			font-weight: 200;
			margin-left: 10%;
		}
		&-button:hover {
			background-color: transparent;
			border-bottom: 5px solid #42b983;
			transition-property: border-color, background-color, color;
			transition-duration: 0.3s, 0.3s, 0.3s;
			transition-timing-function: initial;
			transition-delay: initial;
		}
		&-buttonHover {
			//@include fullBorder(1px,lighten($fontClr,10%))
		}
	}
</style>
