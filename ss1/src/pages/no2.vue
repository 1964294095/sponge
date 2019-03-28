<template>
	<div class="main">
		<header>
			<div class="d1"><img class="d1img" src="../assets/num2/no1.gif"></div>
			<p class="d1p"><span class="s1"><input type="text" value="" name="" placeholder="  目的地/景点/酒店等"></span></p>
			<ul class="ul1">
				<li>热门</li>
				<li>周边</li>
				<li>湖南</li>
				<li>湖北</li>
				<li>热门</li>
				<li>周边</li>
				<li>湖南</li>
			</ul>
		</header>
		<section>
			<div style="width: 100%;">
				<p class="s3 ">全国热门主题游</p>
			</div>
			<div class="div1">
				<img src="../assets/num2/no4.gif" style="margin-right: 10px;">
				<img src="../assets/num2/no4.gif">
			</div>
			<div class="div1">
				<img src="../assets/num2/no4.gif" style="margin-right: 10px;">
				<img src="../assets/num2/no4.gif">
			</div>

			<div style="width: 100%;">
				<p class="s3 ">全国热门主题游</p>
			</div>
			<div class="div1">
				<img src="../assets/num2/no4.gif" style="margin-right: 10px;">
				<img src="../assets/num2/no4.gif">
			</div>
			<div class="div1">
				<img src="../assets/num2/no4.gif" style="margin-right: 10px;">
				<img src="../assets/num2/no4.gif">
			</div>
			<div style="margin-bottom: 60px;">
				<div style="width: 100%;">
					<p class="s3 ">全国热门主题游</p>
				</div>
				<div class="div1">
					<img src="../assets/num2/no4.gif" style="margin-right: 10px;">
					<img src="../assets/num2/no4.gif">
				</div>
				<div class="div1">
					<img src="../assets/num2/no4.gif" style="margin-right: 10px;">
					<img src="../assets/num2/no4.gif">
				</div>
			</div>

		</section>
		<footer>
			<div class="dd1">
				<ul class="mul2">
					<li>
						<router-link :to="{path:'no1'}"><img src="../assets/num3/n5.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no2'}"><img src="../assets/num1/no7.gif"></router-link>
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
</script>

<style scoped="scoped">
	.d1img {
		width: 752px!important;
	}
	
	.main {
		margin: 0px auto;
	}
	
	.div1 {
		display: flex;
		margin-left: 32px;
		margin-top: 10px;
	}
	
	.div1 img {
		width: 320px;
		height: 200px;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	img {
		display: flex;
	}
	
	.d1 img {
		width: 100%;
	}
	
	.d1p {
		position: absolute;
		top: 100px;
	}
	
	.s1 {
		/*position: absolute;
		top: 100px;*/
	}
	
	.s1 input {
		width: 656px;
		height: 60px;
		border-radius: 25px;
		background-color: #f2f0ea;
		border: none;
		margin-left: 25px;
		background-color: rgba(255, 255, 255, 0.4);
		font-size: 30px;
	}
	
	.ul1 li {
		flex: 1;
		text-align: center;
		font-size: 25px;
		color: white;
	}
	
	.ul1 {
		width: 100%;
		display: flex;
		list-style-type: none;
		position: absolute;
		top: 190px;
	}
	
	.s3 {
		text-align: center;
		color: #574324;
		font-size: 45px;
		margin-top: 40px;
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