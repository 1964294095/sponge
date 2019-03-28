<template>
	<div class="xx">
		
			<header>
				<p class="p1"><span class="sp1"><router-link :to="{path:'no4'}"><img src="../assets/login/one.gif"></router-link></span><span class="sp2">登录</span><span class="sp3"><router-link to="register">注册</router-link></span></p>
			</header>
			
			<section>
				<div class="ddd1"><img src="../assets/login/two.gif"><input v-model="username" placeholder="请输入用户名"></div>
				<div class="ddd1"><img src="../assets/login/three.gif"><input v-model="password" placeholder="请输入密码"></div>
					<button v-on:click=userlogin() class="bt1">登 录</button>
					<button class="bt2">本机号码登录</button>
				<ul class="as">
					<li class="li1">微信登录</li>
					<li class="li2">QQ登录</li>
				</ul>
				<p class="pp1">登录后代表您已同意会员<span class="span1">服务条款</span>和<span class="span1">隐私政策</span></p>			
			</section>	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				password:'',
			}
		},
		methods:{
			userlogin:function(event){
				this.$http.post('/api/users/login',{username:this.username,password:this.password}).then((data)=>{
					if(data.body.status==1){
						alert(data.body.message)
					}else{
						let save_token={
							token:data.body.data.token,
							username:this.username,
						}
						localStorage.setItem('token',data.body.data.token);
						localStorage.setItem('username',data.body.data.user[0].username);
						localStorage.setItem('_id',data.body.data.user[0]._id);
						this.$router.push({path:'no4'})
						alert("登录成功")
					}
				})
			},
		}
	}
</script>

<style scoped="scoped">
	
	.wximg{
		height: 136px;
	}
	*{
		margin: 0;
		padding: 0;
	}
	p{
		width: 100%;
	}
	.sp1 img{
		float: left;
		width: 45px;
		padding-left: 20px;
		margin-top: 20px;
	}
	.sp2{
		font-size: 45px;
		line-height: 85px;
		margin-left: 40px;
	}
	.p1{
		width: 100%;
		text-align: center;
	}
	.sp3{
		float: right;
		font-size: 45px;
		line-height: 85px;
		padding-right: 20px;	
	}
	.sp3 a{
		text-decoration: none;
		color:#ff9000;
	}
	
	.ddd1{
		width: 90%;
		background: white;
		margin: 0 auto;
		height: 85px;
	}
	.ddd1 img{
		width: 35px;
		height: 45px;
	}
	.ddd1 input{
		width: 90%;
		border: none;
		height: 85px;
		margin-left: 25px;
		font-size: 25px;
	}
	.ddd1 img,.ddd1 input{
		vertical-align: middle;
	}

	section{
		margin-top: 100px;
	}
	section button{
		width: 90%;
		margin-left: 35px;
		line-height: 80px;
		background: #ff9000;
		border: none;
		font-size: 35px;
		color: white;
		margin-top: 25px;
	}
	.bt1{
		margin-top: 55px;
	}
	
	.as{
		display: flex;
		margin-left: 220px;
		margin-top: 100px;
	}
	li{
		list-style: none;
	
	}
	.li1{
		text-align: center;
		width: 136px;
		background-image: url(../assets/login/four.gif);
		background-size: contain;
		height: 136px;
		line-height: 320px;
		font-size: 25px;
		margin-right: 40px;
		border-radius: 50%;
	}
	.li2{
		text-align: center;
		width: 136px;
		background-image: url(../assets/login/five.gif);
		background-size: contain;
		height: 136px;
		line-height: 320px;
		font-size: 25px;
		border-radius: 50%;
	}

	/*.ddd3{
		background: url(../assets/login/eight.gif);
		background-size: contain;
		height: 500px;
		width: 100%;
		position: fixed;
		bottom: 0;
	}*/
	.pp1{
		text-align: center;
		margin-top: 330px;
		font-size: 25px;
		bottom: 0;
		background: #fffae7;
		height: 73px;
		line-height: 80px;
	}
	.span1{
		color:#ff9000;
		text-decoration: underline;
	}
	.xx{
		/*background: url(../assets/login/nine.gif);*/
		background: #fffae7;
		background-size: contain;
		height: 1300px;
		width: 100%;
		
		background-repeat: no-repeat;
	}
</style>