<template>
	<div class="mainCard-box">
		<div class="mainCard">
			<div class="mainCard-bg">
				<div class="mainCard-bg-img">
					<img v-lazy="picUrl" alt="">
				</div>
				<div class="mainCard-bg-title">
					{{bTitle}}
				</div>
			</div>
			<el-row :gutter="20">
				<el-col :span="18">
					<div class="mainCard-main">
						<div class="mainCard-main-intro">
							{{bIntro}}
						</div>
						<div class="mainCard-main-time">
							{{bTime}}
						</div>
						<div class="mainCard-main-cont" v-html="bCont">
							{{bCont}}
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="mainCard-usr">
						<usr-card></usr-card>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import usrCard from '../../components/cards/userCard.vue'
	import {getTime} from '../../common/scripts/commonMethods'
	export default {
		name: "",
		components: {
			usrCard
		},
		data () {
			return {}
		},
		props: {
			picUrl: {
				default: require('../../assets/imgs/bgs/bg4.jpg')
			},
			bTitle: {
				default: 'es6从入门到放弃'
			},
			bTime: {
				default: getTime(new Date())
			},
			bIntro: {
				default: 'ECMAscript很难啊，学不动啊,typeScript很难啊，去你妈的强类型，var作用域很坑啊用let啊 const是es7的啊,ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。'
			},
			bCont: {
				default: `<h1>mdblog</h1>

<p>无需数据库，markdown文件即为文章的轻博客。</p>

<h1>版本</h1>

<ul><li>V0.2</li></ul>

<h1>功能特点</h1>

<ul><li>静态</li><li>站点配置实时更新，修改config.json里面的站点名称、站点描述、作者即可同步修改所有页面上的信息。</li><li>只需要在./md下直接写入.md文件，就自动发布文章</li></ul>

<h1>环境</h1>

<ul><li>&gt;= NodeJS 4.4.3</li></ul>

<h1>使用</h1>

<p><code>
git clone https://github.com/ranjiayu/mdblog.git
</code></p>

<p><code>
cd mdblog
npm install(如果被墙请使用npm淘宝镜像)
npm start
</code></p>

<p>添加文章到./md目录。
示例：</p>

<blockquote><p>1.test1.md
内容：
<code></code></p></blockquote>

<p>文章地址：http://localhost:3000/article/test1.html</p>

<h1>目录</h1>

<p>├─public  静态文件目录
│  ├─article 文章单页
├─md  文章文件(*.md)</p>

<h1>文章地址</h1>

<p><code>
http://localhost:3000/article/EnglishName.html
</code></p>

<h1>演示</h1>

<p><a href="http://www.ranjiayu.cn:8888">mdblog DEMO</a></p>`
			},

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

	.mainCard {
		width: 100%;
		&-bg {
			overflow: hidden;
			@include wh(100%, 26rem);
			&-img {
				@include wh(100%, 100%);
				img {
					@include wh(100%, 100%);
				}
			}
			&-title {
				width: 100%;
				@include allMidBox();
				@include fontSizeColor(6rem, $bgClr);
				margin-top: -20rem;
				position: absolute;
				font-weight: 300;
			}
		}
		&-usr {

		}
		&-main {
			&-intro {
				margin-top: 2rem;
				@include wh(100%, 6rem);
				@include fontSizeColor(1.4rem, $fontClr);
				font-weight: 300;
				overflow: hidden;
			}
			&-time {
				@include wh(100%, 2rem);
				@include allMidBox();
				@include fontSizeColor(1rem, lighten($fontClr, 20%));
			}
			&-cont {
				@include allMidBox();
				background: #ffffff;
			}

		}
	}
</style>
