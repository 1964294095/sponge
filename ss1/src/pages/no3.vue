<template>
	<div class="main">
		<div class="header">
			<span class="s1">岳阳<span class="s2"><img src="../assets/num3/n1.gif" width="10px" height="6px"></span></span>
			<span><input type="text" value="" name="" placeholder="  目的地/景点/酒店等"></span>
		</div>
		<div class="dd"></div>
		<div class="dd2">
			<div><img src="../assets/num3/n3.gif" width="100%" height="100%"></div>
			<div><img src="../assets/num3/n4.gif" width="100%" height="100%"></div>
			<div><img src="../assets/num3/n4.gif" width="100%" height="100%"></div>
			<div><img src="../assets/num3/n3.gif" width="100%" height="100%"></div>
		</div>
		<div class="dd1">
			<ul class="mul2">
				<li>
					<router-link :to="{path:'no1'}"><img src="../assets/num3/n5.gif"></router-link>
				</li>
				<li>
					<router-link :to="{path:'no2'}"><img src="../assets/num3/n6.gif"></router-link>
				</li>
				<li>
					<router-link :to="{path:'no3'}"><img src="../assets/num3/n7.gif"></router-link>
				</li>
				<li>
					<router-link :to="{path:'no4'}"><img src="../assets/num3/n8.gif"></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.s1 {
		float: left;
		color: #ff9000;
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
		width: 339px;
		height: 60px;
		border-radius: 25px;
		background-color: #f2f0ea;
		border: none;
		margin-top: 12px;
		margin-left: 15px;
		font-size: 30px;
	}
	
	.dd {
		height: 20px;
		background-color: #f2f0ea;
		margin-top: 10px;
	}
	
	.dd2 {
		margin-bottom: 90px;
	}
	.dd2 img{
		display: flex;
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