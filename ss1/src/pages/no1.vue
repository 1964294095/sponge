<template>
	<div class="bo">
		<header>
			<div class="dv1">
				<Carousel autoplay v-model="value2" loop>
					<div v-for="i in srca">
						<CarouselItem>
							<!--<div class="demo-carousel"><img src="../assets/num1/lb1.jpg" class="img3" /></div>-->
							<div class="demo-carousel"><img :src="i.src" class="img3"></div>
						</CarouselItem>
					</div>
				</Carousel>
			</div>
			<div class="dv2">
				<span class="s1">岳阳<span class="s2"><img src="../assets/num1/no26.gif" width="8px" height="5px"></span></span>
				<span><input type="text" value="" name="" placeholder="  目的地/景点/酒店等"></span>
				<img src="../assets/num1/no8.gif" class="img1"><img src="../assets/num1/no9.gif" class="img2">
			</div>
		</header>
		<section>
			<div class="div2">
				<img src="../assets/num1/no10.gif" class="tp">
				<ul class="uu">
					<li class="li3">温泉</li>
					<li class="li5">门票</li>
					<li class="li6">酷芽亲子房</li>
					<li class="li7">亲子游</li>
					<li class="li4">山水自然</li>
				</ul>
				<ul class="uu1">
					<li class="li8">领券</li>
					<li class="li9">签到福利</li>
					<li class="li10">赚积分</li>
					<li class="li11">境外</li>
				</ul>
			</div>

			<img src="../assets/num1/no20.gif" class="img6">
			<ul class="uu2">
				<li style="float: left;"><img src="../assets/num1/no21.gif" style="width: 100%;"></li>
				<li style="float: right"><img src="../assets/num1/no21.gif" style="width: 100%;"></li>
			</ul>

			<div class="div3">
				<p class="p2"><span>目的地推荐</span><span>精选推荐好玩的景区，城市</span></p>
				<ul class="uu3">
					<li class="li12">株洲方特</li>
					<li class="li13">长沙生态动物园</li>
					<li class="li14">武陵源</li>
				</ul>
				<ul class="uu4">
					<li class="li15">湘潭</li>
					<li class="li15">怀化</li>
					<li class="li15">长沙</li>
					<li class="li15">株洲</li>
					<li class="li16">更多</li>
				</ul>
			</div>

			<div class="div3">
				<p class="p2"><span>精品周边游</span><span>用心推荐，优质体验</span></p>
				<img src="../assets/num1/no25.gif" class="img4">
				<p class="tx"><span style="color:#574324;">桂林超然派高寨国际大酒店</span> - 入住民族特色客房，享受精致服务，饱览山水美景，青山绿水环绕。</p>
				<ul class="uu5">
					<li class="li17">可定今日</li>
					<li class="li18">桂林</li>
					<li class="li18">酒店</li>
				</ul>

				<img src="../assets/num1/no25.gif" class="img4">
				<p class="tx"><span style="color:#574324;">桂林超然派高寨国际大酒店</span> - 入住民族特色客房，享受精致服务，饱览山水美景，青山绿水环绕。</p>
				<ul class="uu5">
					<li class="li17">可定今日</li>
					<li class="li18">桂林</li>
					<li class="li18">酒店</li>
				</ul>

				<img src="../assets/num1/no25.gif" class="img4">
				<p class="tx"><span style="color:#574324;">桂林超然派高寨国际大酒店</span> - 入住民族特色客房，享受精致服务，饱览山水美景，青山绿水环绕。</p>
				<ul class="uu5">
					<li class="li17">可定今日</li>
					<li class="li18">桂林</li>
					<li class="li18">酒店</li>
				</ul>
			</div>

			<div class="div4">
				<img src="../assets/num1/no27.gif" class="img7">
				<p class="p3">附近</p>
			</div>
		</section>
		<footer>
			<div class="dd1">
				<ul class="mul2">
					<li>
						<router-link :to="{path:'no1'}"><img src="../assets/num1/no5.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no2'}"><img src="../assets/num3/n6.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no3'}"><img src="../assets/num3/n9.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no4'}"><img src="../assets/num3/n8.gif"></router-link>
					</li>
				</ul>
			</div>
		</footer>

	</div>

</template>

<script>
	import Divider from "iview/src/components/divider/divider";
	export default {
		components:{Divider},
		data() {
			return {
				value2: 0,
				srca:undefined
			}
		},
		created(){
			this.$http.post('/api/lubo/lubos').then((data) => {
				this.srca = data.body.data;
			})
		}
	}
</script>

<style scoped="scoped">
	.div2 {
		background: white;
		height: 500px;
	}
	
	.bo {
		background: #f0ede2;
		height: 2500px;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.p3 {
		text-align: center;
		font-size: 18px;
		color: white;
	}
	
	.s1 {
		float: left;
		color: white;
		font-size: 30px;
		line-height: 85px;
		margin-left: 44px;
	}
	
	.s2 {
		margin-left: 8px;
	}
	
	.s1 img {
		vertical-align: middle;
	}
	
	input {
		width: 400px;
		height: 60px;
		border-radius: 25px;
		background-color: #f2f0ea;
		border: none;
		margin-top: 12px;
		margin-left: 15px;
		font-size: 30px;
	}
	
	.dv2 {
		position: absolute;
		top: 10px;
	}
	
	.img1,
	.img2 {
		width: 47px;
		height: 50px;
		margin-left: 30px;
		float: right;
		margin-top: 20px;
	}
	
	.tp {
		width: 500px;
		margin-left: 100px;
		margin-top: 30px;
	}
	
	.img4 {
		width: 100%;
	}
	
	ul li {
		/*float: left;*/
		list-style: none;
	}
	
	.uu {
		display: flex;
		width: 100%;
		padding-left: 25px;
		/*padding-right: 20px;*/
		margin-top: 30px;
	}
	
	.uu1 {
		display: flex;
		width: 100%;
		padding-left: 25px;
		padding-right: 0px;
		margin-top: 40px;
	}
	
	.uu3 {
		display: flex;
		width: 100%;
		padding-left: 20px;
		/*padding-right: 20px;*/
	}
	
	.uu4 {
		display: flex;
		width: 100%;
		margin-top: 70px;
		padding-left: 30px;
		/*padding-right: 20px;*/
		margin-bottom: 30px;
	}
	
	.uu5 {
		display: flex;
		margin-left: 22px;
		margin-top: 15px;
		margin-bottom: 40px;
	}
	
	.uu5 li {
		margin-left: 5px;
	}
	
	.li3 {
		margin-left: 10px;
		margin-right: 39px;
		line-height: 270px;
		background: url(../assets/num1/no11.gif) no-repeat;
		/*background-size: contain;*/
		width: 100px;
		height: 140px;
		background-size: contain;
		font-size: 25px;
		text-indent: 20px;
	}
	
	.li4 {
		line-height: 270px;
		background: url(../assets/num1/no15.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: -4px;
	}
	
	.li5 {
		margin-right: 13px;
		line-height: 270px;
		background: url(../assets/num1/no12.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: 20px;
	}
	
	.li6 {
		margin-right: 13px;
		line-height: 270px;
		background: url(../assets/num1/no13.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: -15px;
	}
	
	.li7 {
		margin-right: 13px;
		line-height: 270px;
		background: url(../assets/num1/no14.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: 8px;
	}
	
	.li8 {
		margin-left: 10px;
		margin-right: 47px;
		line-height: 270px;
		background: url(../assets/num1/no18.gif) no-repeat;
		/*background-size: contain;*/
		width: 90px;
		height: 170px;
		background-size: contain;
		font-size: 25px;
		text-indent: 15px;
	}
	
	.li9 {
		margin-right: 15px;
		line-height: 270px;
		background: url(../assets/num1/no19.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: -4px;
	}
	
	.li10 {
		margin-right: 15px;
		line-height: 270px;
		background: url(../assets/num1/no17.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: 8px;
	}
	
	.li11 {
		margin-right: 22px;
		line-height: 270px;
		background: url(../assets/num1/no16.gif) no-repeat;
		/*background-size: contain;*/
		width: 125px;
		height: 90px;
		background-size: contain;
		font-size: 25px;
		text-indent: 20px;
	}
	
	.li12 {
		font-size: 25px;
		margin-right: 12px;
		background: url(../assets/num1/no22.gif)no-repeat;
		background-size: contain;
		width: 220px;
		height: 170px;
		line-height: 380px;
		text-align: center;
	}
	
	.li13 {
		font-size: 25px;
		margin-right: 12px;
		background: url(../assets/num1/no23.gif)no-repeat;
		background-size: contain;
		width: 220px;
		height: 170px;
		line-height: 380px;
		text-align: center;
	}
	
	.li14 {
		font-size: 25px;
		background: url(../assets/num1/no24.gif)no-repeat;
		background-size: contain;
		width: 220px;
		height: 170px;
		line-height: 380px;
		text-align: center;
	}
	
	.li15 {
		font-size: 25px;
		text-align: center;
		width: 100px;
		border: 1px solid #d1d1d1;
		border-radius: 50px;
		padding: 5px 10px;
		margin-right: 8%;
	}
	
	.li16 {
		font-size: 25px;
		text-align: center;
		width: 100px;
		border: 1px solid #d1d1d1;
		border-radius: 50px;
		padding: 5px 10px;
		margin-right: 5%;
	}
	
	.li17 {
		border: 1px solid #c0d7a8;
		border-radius: 50px;
		background: #c0d7a8;
		color: white;
		padding: 1px 4px 1px 4px;
		font-size: 16px;
	}
	
	.li18 {
		border: 1px solid #d1d1d1;
		border-radius: 50px;
		background: #d1d1d1;
		padding: 1px 8px 1px 8px;
		font-size: 16px;
	}
	
	.img3 {
		width: 100%;
		height: 350px;
	}
	
	.img6 {
		width: 100%;
		margin-top: 20px;
	}
	
	.img7 {
		width: 50px;
		height: 60px;
		margin-left: 37px;
		margin-top: 13px;
	}
	
	.uu2 {
		width: 100%;
		margin-top: 15px;
	}
	
	.uu2 li {
		width: 49.8%;
	}
	
	.div3 {
		float: left;
		background: white;
		margin-top: 10px;
		width: 100%;
	}
	
	.div4 {
		border: 1px solid #ff9130;
		border-radius: 50%;
		background: #ff9130;
		width: 130px;
		height: 130px;
		position: fixed;
		top: 65%;
		left: 585px;
	}
	
	.p2 {
		line-height: 80px;
		margin-left: 20px;
	}
	
	.p2 span:first-child {
		font-size: 30px;
		font-weight: bold;
		border-right: 1px solid #d1d1d1;
		padding-right: 30px;
	}
	
	.p2 span:last-child {
		font-size: 22px;
		color: #d1d1d1;
		margin-left: 30px;
	}
	
	.tx {
		width: 90%;
		margin-left: 30px;
		font-size: 26px;
	}
	
	.tx span {
		font-weight: bold;
	}
	
	.dd1 {
		background: white;
		height: 100px;
		width: 752px;
		position: fixed;
		bottom: 0px;
	}

	
	.mul2 li {
		list-style: none;
		margin-left: 60px;
		margin-right: 70px;
		text-align: center;
	}
	
	.mul2 img {
		margin-top: 20px;
		width: 52px;
	}
	
	.mul2 a {
		display: inline-block;
	}
</style>