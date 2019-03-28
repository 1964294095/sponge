<template lang="html">
	<div class="xx">
		<!--<div>
			<div>
				<div class="box">
					<label>输入用户名</label>
					<input v-model="username" placeholder="用户名">
				</div>
				<div class="box">
					<label>输入密码</label>
					<input v-model="password" placeholder="密码" />
				</div>
				<div class="box">
					<label>重复输入密码</label>
					<input v-model="rePassword" placeholder="密码" />
				</div>
				<div class="box">
					<label>输入邮箱</label>
					<input v-model="userMail" placeholder="邮箱" />
				</div>
				<div class="box">
					<label>输入手机</label>
					<input v-model="userPhone" placeholder="手机" />
				</div>
				<div class="box">					
					<button v-on:click="userRegister()">注册</button>
				</div>
				
			</div>
		</div>-->
		<header>
			<p class="p1"><span class="sp1"><router-link :to="{path:'login'}"><img src="../assets/login/one.gif"></router-link></span><span class="sp2">注册页面</span></p>
		</header>

		<section>
			<div class="ddd1"><img src="../assets/login/two.gif"><input v-model="username" placeholder="请输入用户名"></div>
			<div class="ddd1"><img src="../assets/login/three.gif"><input v-model="password" placeholder="请输入密码"></div>
			<div class="ddd1"><img src="../assets/login/three.gif"><input v-model="rePassword" placeholder="请输入重复密码"></div>
			<button v-on:click=userRegister() class="bt1">注册</button>
			<p class="pp2">登录后代表您已同意会员<span class="span1">服务条款</span>和<span class="span1">隐私政策</span></p>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				//				userMail:'',
				//				userPhone:'',
				rePassword: '',
			}
		},
		methods: {
			//注册方法
			userRegister: function(event) {
				if(this.password != this.rePassword) {
					alert("两次密码不一致")
				} else {
					let sendDate = {
						username: this.username,
						password: this.password,
						//						userMail:this.userMail,
						//						userPhone:this.userPhone,
					}
					this.$http.post('/api/users/register', sendDate).then((data) => {
						if(data.body.status == 1) {
							alert(data.body.message);
						} else {
							alert(data.body.message)
							this.$router.go(-1)
						}
					})
				}
			},
		}

	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	p {
		width: 100%;
	}
	
	.sp1 img {
		float: left;
		width: 35px;
		height: 55px;
		margin-left: 20px;
		margin-top: 20px;
	}
	
	.sp2 {
		font-size: 45px;
		line-height: 85px;
	}
	
	.p1 {
		text-align: center;
	}
	
	.ddd1 {
		width: 90%;
		background: white;
		margin: 0 auto;
		height: 85px;
	}
	
	.ddd1 img {
		width: 35px;
		height: 45px;
	}
	
	.ddd1 input {
		width: 90%;
		border: none;
		height: 85px;
		margin-left: 25px;
		font-size: 25px;
	}
	
	.ddd1 img,
	.ddd1 input {
		vertical-align: middle;
	}
	
	section {
		margin-top: 100px;
	}
	
	section button {
		width: 90%;
		margin-left: 35px;
		line-height: 80px;
		background: #ff9000;
		border: none;
		font-size: 35px;
		color: white;
		margin-top: 25px;
	}
	
	.bt1 {
		margin-top: 55px;
	}
	
	.pp2 {
		text-align: center;
		margin-top: 590px;
		height: 73px;
		line-height: 80px;
		font-size: 25px;
	}
	
	.span1 {
		color: #ff9000;
		text-decoration: underline;
	}
	
	.xx {
		/*background: url(../assets/login/nine.gif);*/
		background: #fffae7;
		background-size: contain;
		height: 1300px;
		width: 100%;
		background-repeat: no-repeat;
	}
</style>