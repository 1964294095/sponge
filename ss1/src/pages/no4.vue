<template>
	<div class="xx">
		<header>
			<div style="background: white;">
				<p class="p4"><span class="span2"><img src="../assets/num4/no1.gif"></span><span class="span4">我的</span><span class="span3"><img src="../assets/num4/no2.gif"></span></p>

				<div v-if=!isLogin class="header">
					
							<!--<router-link to="/login">-->
							<div class="header_menu1">
								<Icon type="person" />
								<p class="p5"><span class="ss1"><router-link :to="{path:'login'}">登录</router-link></span><span class="ss1"><router-link :to="{path:'register'}">注册</router-link></span></p>
							</div>
							<!--</router-link>-->
					
				</div>
				<div v-else class="header">
					
							<router-link :to="{path: '/userInfo', query:{ id: id }}">
								<div class="header_menu">
									<Icon type="person" />
									<router-link to="/login">欢迎您  ^_^：{{username}}</router-link>
								</div>
							</router-link>
					
				</div>
			</div>
		</header>
		<section>
			<div class="div5">
				<p class="p6">订单</p>
				<ul class="uu6">
					<li class="l1">我的订单</li>
					<li class="l2">抢购订单</li>
					<li class="l3">拼团订单</li>
					<li class="l4">保险订单</li>
				</ul>
			</div>
			<div class="div6">
				<p class="p6">常用</p>
				<ul class="uu7">
					<li class="l5">新人专区</li>
					<li class="l6">会员中心</li>
					<li class="l7">积分商城</li>
				</ul>
				
				<ul class="uu7">
					<li class="l5">新人专区</li>
					<li class="l6">会员啊中心</li>
					<li class="l7">积分商城</li>
				</ul>
				
				<ul class="uu7">
					<li class="l5">新人专区</li>
					<li class="l6">会员中心</li>
					<li class="l7">积分商城</li>
				</ul>

			</div>
		</section>
		<footer>
			<div class="dd1">
				<ul class="mul2">
					<li>
						<router-link :to="{path:'no1'}"><img src="../assets/num3/n5.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no2'}"><img src="../assets/num3/n6.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no3'}"><img src="../assets/num3/n9.gif"></router-link>
					</li>
					<li>
						<router-link :to="{path:'no4'}"><img src="../assets/num4/no3.gif"></router-link>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				username: '',
			}
		},
		created() {
			//    此时登录成功
			let token = localStorage.getItem('token')
			//    console.log(token)
			if(token) {
				this.isLogin = true
				this.username = localStorage.getItem('username')
				this.id = localStorage.getItem('_id')
			} else {
				console.log('用户获得登录失败');
				//      this.localStorage.setItem(data.body.data);
			}
		}
	}
</script>

<style scoped="scoped">
	.xx {
		background: #f0ede2;
		height: 1480px;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.p4 {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid #edeadd;
	}
	ul li{
		
		list-style: none;
	}
	.span2 img {
		float: left;
		width: 60px;
		margin-top: 20px;
		padding-left: 15px;
	}
	section{
		width: 90%;
		margin-left: 35px;
	}
	
	.span3 img {
		float: right;
		width: 60px;
		margin-top: 20px;
		padding-right: 15px;
	}
	
	.span4 {
		font-size: 40px;
		line-height: 85px;
	}
	
	.p5 {
		text-align: center;
		margin-top: 10px;
		margin-left: 15px;
	}
	
	.ss1 {
		padding: 25px 40px 25px 40px;
		background: #f6f4ee;
		margin-right: 25px;
		border-radius: 15px;
		font-size: 25px;
		line-height: 80px;
	}
	
	.div5 {
		margin-top: 20px;
		background: white;
		
	}
	.div6 {
		margin-top: 20px;
		background: white;
		
	}
	.p6{
		font-size: 32px;
		text-indent: 15px;
		line-height: 80px;
		border-bottom: 1px solid #edeadd;
	}
	.uu6{
		padding-left: 40px;
		padding-right: 40px;
		margin-top: 40px;
		height: 160px;
		display: flex;
	}
	.l1{
		margin-right: 42px;
		background: url(../assets/num4/no4.gif) no-repeat center;
		background-size: contain;
		width: 110px;
		height: 75px;
		text-align: center;
		font-size: 22px;
		line-height: 210px;
	}
	.l2{
		margin-right: 42px;
		background: url(../assets/num4/no5.gif) no-repeat center;
		background-size: contain;
		width: 110px;
		height: 75px;
		text-align: center;
		font-size: 22px;
		line-height: 210px;
	}
	.l3{
		margin-right: 42px;
		background: url(../assets/num4/no6.gif) no-repeat center;
		background-size: contain;
		width: 110px;
		height: 75px;
		text-align: center;
		font-size: 22px;
		line-height: 210px;
	}
	.l4{
		background: url(../assets/num4/no7.gif) no-repeat center;
		background-size: contain;
		width: 110px;
		height: 75px;
		text-align: center;
		font-size: 22px;
		line-height: 210px;
	}
	.uu7{
		display: flex;
		height: 150px;
		padding-left: 50px;
		padding-right: 50px;
		margin-top: 40px;
		margin-bottom: 50px;
	}
	.l5{
		margin-right: 64px;
		background: url(../assets/num4/no8.gif) no-repeat center;
		background-size: contain;
		width: 140px;
		height: 45px;
		text-align: center;
		font-size: 22px;
		line-height: 180px;
	}
	.l6{
		margin-right: 64px;
		background: url(../assets/num4/no9.gif) no-repeat center;
		background-size: contain;
		width: 140px;
		height: 45px;
		text-align: center;
		font-size: 22px;
		line-height: 180px;
	}
	.l7{
		background: url(../assets/num4/no10.gif) no-repeat center;
		background-size: contain;
		width: 130px;
		height: 45px;
		text-align: center;
		font-size: 22px;
		line-height: 180px;
	}
	
	.dd1 {
		background: white;
		height: 100px;
		width: 752px;
		position: fixed;
		bottom: 0px;
	}
	
	.header_menu {
		font-size: 36px;
		text-align: center;
		line-height: 200px;
	}
	.header_menu1{
		height: 180px;
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