<template>
    <div class="smallBanner">
		<el-carousel height="200px" :interval="5000" arrow="never" trigger="click">
			<el-carousel-item v-for="item,index in smBannerItems" :key="item" class="smallBanner-item"
							  :style="{'background-color': 'rgba('+test[index]+')'}"
			>
				<div class="smallBanner-item-title">{{item.title}}</div>
				<div class="smallBanner-item-cont" v-html="">{{item.cont}}</div>
			</el-carousel-item>
		</el-carousel>

    </div>
</template>

<script>
	import {randomColor} from '../../common/scripts/commonMethods'
	export default {
		name: "",
		components: {},
		data () {
			return {
				colors:[],
				test:[]
			}
		},
		props: {
			smBannerItems:{
				type:Array,
				default: ()=>{
					return [
						{
							title:'ECMAScript从入门到放弃',
							cont:'ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。'
						},
						{
							title:'ECMAScript从入门到放弃',
							cont:'ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。'
						},
					]
				}
			}
		},
		computed: {

		},
		created () {
			this.toStrings();
		},
		mounted () {
		},
		methods: {
			/**
			 * [{r,g,b},...] 随机背景颜色
			 */
			toStrings(){
				for (let i=0; i<this.smBannerItems.length;++i){
					this.colors.push(randomColor())
				}
				for(let item of this.colors){
					let _temp=item.r+','+item.g+','+item.b+',1';
					this.test.push(_temp);
				}
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";
	.smallBanner{
		width: 100%;
		&-item{
			box-sizing: border-box;
			padding: 0 10% 0 10%;
			background: #3b3b3b;
			&-title{
				margin-top: 10px;
				height: 34%;
				@include allMidBox();
				@include fontSizeColor(2rem,lighten($fontClr,80%));
			}
			&-cont{
				overflow: hidden;
				height: 40%;
				@include verMidBox();
				@include fontSizeColor(1.2rem,lighten($fontClr,80%));
			}
		}
	}

	@media screen  and (max-width: 414px){
		.smallBanner{
			&-item{
				&-title{
					font-size: 1.4rem;
				}
				&-cont{
					font-size: 1rem;
					font-weight: 400;
				}
			}
		}
	}
</style>
