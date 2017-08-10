<template>
	<div class="test">
		<!--<my-header :links="links" :activeIndex="links[3].link"></my-header>-->
		<!--<div class="test2">-->
		<el-row>
			<el-col :span="24">
				<div class="login">
					<div class="login-icon">
						<img v-lazy="iconUrl" alt="">
					</div>
					<div class="login-title">{{myTitle.toUpperCase()}}</div>
					<div class="login-inputs">
						<el-input
							size="large"
							class="login-inputs-item"
							placeholder="在这输入账号"
							icon="edit"
							v-model="input2"
							:on-icon-click="handleIconClick">
						</el-input>
						<el-input
							type="password"
							size="large"
							class="login-inputs-item"
							placeholder="在这输入密码"
							icon="edit"
							v-model="input2"
							:on-icon-click="handleIconClick">
						</el-input>
						<div class="login-inputs-button">
							<el-button type="primary" class="button" size="large">登录</el-button>
						</div>

					</div>
				</div>
			</el-col>
		</el-row>
		<!--</div>-->
	</div>
</template>

<script>
	import myHeader from '../bars/header.vue'
	export default {
		name: "",
		components: {
			myHeader
		},
		data () {
			return {
				iconUrl: require('../../assets/imgs/logos/Browser2_green.png'),
				myTitle: 'write less do more',
//				links: [
//					{name: 'HOME', link: 'homepage'},
//					{name: 'CATEGORY', link: 'categories'},
//					{name: 'IDEAS', link: 'ideas'},
//					{name: 'CONTACT', link: 'contact'}
//				],
				input2: '',
			}
		},
		props: {},
		computed: {},
		created () {
		},
		mounted () {
		},
		methods: {
			handleIconClick(ev) {
				console.log(ev);
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";

	/*.test{
		height: 100%;
		width: 100%;
		background: url("http://www.ban-bai.com/wordpress/wp-content/uploads/2016/10/46.jpg") no-repeat;
		background-size: contain;
	}
	.test2{
		box-sizing: border-box;
		padding-top: 18rem;
		width: 100%;
		height: 100%;
		@include verMidBox();
	}*/
	.login {
		padding: 0 10% 0 10%;
		box-sizing: border-box;
		background: rgba(255, 255, 255, .8);
		// TODO：记得去掉宽度
		//width: 42rem;
		/*height: 28rem;*/
		border-radius: 22px;
		&-icon {
			padding-top: 1.8rem;
			@include allMidBox();
			@include wh(100%, 30%);
			image {
				@include wh(100%, 100%);
			}
		}
		&-title {
			@include fontSizeColor(1.6rem, lighten($fontClr, 10%));
			@include verMidBox();
			@include wh(100%, 10%);
			font-weight: 300;
			cursor: default;
		}
		&-inputs {
			@include verMidBox();
			@include wh(100%, 50%);
			&-item {
				width: 60%;
				margin-top: 5%;
			}
			&-button {
				margin-bottom: 1.2rem;
				margin-top: 4%;
				width: 30%;
				height: 4rem;
				.button {
					width: 100%;
					height: 3rem;
					border: none;
					background-color: #42b983;
				}
				.button:hover {
					transform: translateY(-2%);
					box-shadow: 1px 4px 10px 2px #999999;
					-webkit-box-shadow: 1px 4px 10px 2px #999999;
					-moz-box-shadow: 1px 4px 10px 2px #999999;
					transition: all .3s;
				}

			}
		}
	}
</style>
