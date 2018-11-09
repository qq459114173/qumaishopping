<template>
<div>
  <div class="container">
     <div class="login-box">

		<div class="box-con tran">

			<div class="login-con f-l">

				<div class="form-group">

					<input type="text" v-model="user_name" name="txtUserName" placeholder="用户名/手机号码" />

					<span class="error-notic">用户名/手机号码不正确</span>

				</div>

				<div class="form-group">

					<input type="password" v-model="password" name="txtPassword" placeholder="密码">

					<span class="error-notic">密码不正确</span>

				</div>

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" @click="login" class="tran">登录</a>

						<img class="loading" src="images/loading.gif" style="display:none">

					</button>

				</div>

				<div class="from-line"></div>

				<div class="form-group">

					<a href="javascript:;" class="move-signup a-tag tran blue-border">还没有帐号？免费注册<i class="iconfont tran">&#xe606;</i></a>

				</div>

				<div class="form-group">

					<a href="javascript:;" class="move-reset a-tag tran">忘记密码？重置 <i class="iconfont tran">&#xe606;</i></a>

				</div>

				<div class="form-group">

					<a href="javascript:;" class="move-other a-tag tran">使用第三方帐号登录<i class="iconfont tran">&#xe606;</i></a>

				</div>

			</div>

			<!-- 登录 -->



			<div class="signup f-l">

				<div class="form-group">

					<div class="signup-form">

						<input type="text" placeholder="邮箱" class="email-mobile">

						<!--<a href="javascript:;" class="signup-select">手机注册</a>-->

					</div>

					<span class="error-notic">邮箱格式不正确</span>

				</div>

				<div class="signup-email">

					<div class="form-group">

						<input type="text" placeholder="您的名字">

					</div>

					<div class="form-group">

						<input type="password" placeholder="密码（字母、数字，至少6位）" onblur="verify.PasswordLenght(this)">

						<span class="error-notic">密码长度不够</span>

					</div>

					<div class="form-group">

						<button type="submit" class="tran pr">

							<a href="javascript:;" class="tran">注册</a>

							<img class="loading" src="images/loading.gif">

						</button>

					</div>

					<p class="view-clause">点击注册，即同意我们的 <a href="#">用户隐私条款</a></p>

				</div><!-- 邮箱注册 -->

				<div class="signup-tel" style="display:none">

					<div class="signup-form" id="message-inf" style="display:none">

						<input type="text" placeholder="短信验证码" style="width:180px;" onblur="verify.VerifyCount(this)">

						<a href="javascript:;" class="reacquire">重新获取（59）</a>

						<span class="error-notic">验证码输入错误</span>

					</div>

					<div class="form-group">

						<button type="submit" class="tran get-message pr">

							<a href="javascript:;" class="tran">获取短信验证码</a>

							<img class="loading" src="images/loading.gif">

						</button>

					</div>

				</div><!-- 手机号码注册 -->

				<div class="from-line"></div>

				<div class="form-group">

					<a href="javascript:;" class="move-login a-tag tran blue-border">已有帐号？登录<i class="iconfont tran">&#xe606;</i></a>

				</div>

				<div class="form-group">

					<a href="javascript:;" class="move-other a-tag tran">使用第三方帐号登录<i class="iconfont tran">&#xe606;</i></a>

				</div>

			</div>

			<!-- 注册 -->



			<div class="other-way f-l">

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" class="tran">QQ帐号登录</a>

						<img class="loading" src="images/loading.gif">

					</button>

				</div>

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" class="tran">新浪微博帐号登录</a>

						<img class="loading" src="images/loading.gif">

					</button>

				</div>

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" class="tran">微信帐号登录</a>

						<img class="loading" src="images/loading.gif">

					</button>

				</div>

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" class="tran">网易帐号登录</a>

						<img class="loading" src="images/loading.gif">

					</button>

				</div>

				<div class="from-line"></div>

				<div class="form-group">

					<a href="javascript:;" class="move-signup a-tag tran blue-border">还没有帐号？免费注册<i class="iconfont tran">&#xe606;</i></a>

				</div>

				<div class="form-group">

					<a href="javascript:;" class="move-login a-tag tran">已有帐号？登录<i class="iconfont tran">&#xe606;</i></a>

				</div>

			</div>

			<!-- 第三方登录 -->



			<div class="mimachongzhi f-l">

				<div class="form-group">

					<input type="text" placeholder="请输入您的邮箱地址">

					<span class="error-notic">邮箱格式不正确</span>

				</div>

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" class="tran">发送重置密码邮件</a>

						<img class="loading" src="images/loading.gif">

					</button>

				</div>

				<div class="from-line"></div>

				<div class="form-group">

					<a href="javascript:;" class="move-signup	a-tag tran blue-border">还没有帐号？免费注册<i class="iconfont tran">&#xe606;</i></a>

				</div>

				<div class="form-group">

					<a href="javascript:;" class="move-login a-tag tran">已有帐号？登录<i class="iconfont tran">&#xe606;</i></a>

				</div>

			</div>

			<!-- 密码重置 -->



			<div class="mobile-success f-l">

				<p>手机号 <span>186****7580</span> 验证成功</p>

				<p>请完善您的账号信息，您也可以<a href="#">绑定现有账号</a></p>

				<div class="form-group">

					<input type="text" placeholder="邮箱" class="email-mobile" onblur="verify.verifyEmail(this)" />

					<span class="error-notic">邮箱格式不正确</span>

				</div>

				<div class="form-group">

					<input type="text" placeholder="您的名字">

				</div>

				<div class="form-group">

					<input type="password" placeholder="密码（字母、数字，至少6位）" onblur="verify.PasswordLenght(this)" />

					<span class="error-notic">密码长度不够</span>

				</div>

				<div class="form-group">

					<button type="submit" class="tran pr">

						<a href="javascript:;" class="tran">注册</a>

						<img class="loading" src="images/loading.gif">

					</button>

				</div>

				<p class="view-clause">点击注册，即同意我们的 <a href="#">用户隐私条款</a></p>

			</div>

			<!-- 手机注册成功添补信息 -->

		</div>

	</div>
  </div>
</div>
</template>

<style scoped>
 body, div, ul, ol, li, p, i, em, h1, h2, h3, h4, a, strong, span, img, form, input, textarea, button{
	padding: 0;
	margin:0;
}

input, textarea{
	outline: none;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
	color: inherit;
}
img{
	border: 0;
}
.pr{
	position: relative;
}
.pa{
	position: absolute;
}
.pf{
	position: fixed;
}
.f-l{
	float: left;
}
.f-r{
	float: right;
}
li, div, ul{
	*zoom:1;
}
li:after, div:after, ul:after{
	content: '';
	display: table;
	clear: both;
}
.tran{
	transition:all 0.3s ease-out;
	-webkit-transition:all 0.3s ease-out;
	-moz-transition:all 0.3s ease-out;
	-o-transition:all 0.3s ease-out;
}
.container{
	width: 1000px;
	margin: 0 auto;
}
/*--------------样式重置------------*/
/***********/

@media screen and (min-width: 320px) {
    .login-banner{
    	height: 100px;
    }
}
@media screen and (min-width: 480px) {
    .login-banner{
    	height: 120px;
    }
}
@media screen and (min-width: 640px) {
    .login-banner{
    	height: 160px;
    }
}
@media screen and (min-width: 768px) {
    .login-banner{
    	height: 180px;
    }
}
@media screen and (min-width: 1024px) {
    .login-banner{
    	height: 200px;
    }
}
@media screen and (min-width: 1280px) {
    .login-banner{
    	height: 220px;
    }
}
@media screen and (min-width: 1366px) {
    .login-banner{
    	height: 240px;
    }
}
@media screen and (min-width: 1680px) {
    .login-banner{
    	height: 260px;
    }
}
.login-banner{
	height: 260px \9;
}
.container{
  width: 1200px;
  margin:0 auto;
  background-color: #fff;
}
.login-box{
	width: 320px;
	margin:0 auto;
	overflow-x: hidden;
}
.box-con{
	width: 1600px;
}
.login-con{
	width: 300px;
	margin:0 10px; 
}
.login-box .form-group{
	margin-top: 20px;
}
.login-box .form-group input{
  padding-left: 20px;
}

.login-box input, .signup-form{
	width: 300px;
	height:50px;
	line-height: 48px \9;
	padding-left: 1px;
	border: 1px #d9d9d9 solid;
	border-radius: 5px;
	font-size: 14px;
	box-sizing:border-box;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	transition:all 0.3s ease-out;
	-webkit-transition:all 0.3s ease-out;
	-moz-transition:all 0.3s ease-out;
}
.login-box input:focus{
	border-color: #03a9f4;
	box-shadow: 0 0 15px #03a9f4;
	-webkit-box-shadow: 0 0 15px #03a9f4;
	-moz-box-shadow: 0 0 15px #03a9f4;
}
.login-box button{
	width: 300px;
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	border: 0;
	background-color: #03a9f4;
	color: #fff;
	border-radius: 5px;
}
.login-box button a{
	display: block;
}
.login-box button a:hover{
	padding-top: 3px;
}
.login-box button:hover{
	background-color: #0096da;
}
.from-line{
	height: 0;
	overflow: hidden;
	border-top: 1px #c2c2c2 solid;
	margin-top: 20px;
}
.a-tag{
	position: relative;
	display: block;
	height: 48px;
	border: 1px #c2c2c2 solid;
	text-align: center;
	line-height: 48px;
	color: #c2c2c2;
	border-radius: 5px;
	background-color: #fff;
}
.blue-border{
	border:1px #03a9f4 solid;
	color: #03a9f4;
}

.a-tag:hover{
	background-color: #aaa;
	color: #fff;
}
.blue-border:hover{
	background-color: #03a9f4;
	color: #fff;
}
.a-tag i{
	position: absolute;
	right: 20px;
	top: 0;
	font-size: 24px;
	color: #fff;
}
.a-tag:hover i{
	right: 10px;
}
.signup, .other-way, .mimachongzhi, .mobile-success{
	width: 300px;
	margin: 0 10px;
}


.signup-form {
	margin-top: 20px;
}
.signup-form input{
	border: 0;
	height: 48px;
	width: 300px;
}
.signup-form input:focus{
	box-shadow:0 0 0 #fff;
}
.signup-form.border{
	border-color: #03a9f4;
	box-shadow: 0 0 15px #03a9f4;
	-webkit-box-shadow: 0 0 15px #03a9f4;
	-moz-box-shadow: 0 0 15px #03a9f4;
}
.signup-form a{
	color: #03a9f4;
}
.view-clause{
	padding-top: 20px;
	line-height: 14px;
	text-align: center;
	color: #fff;
}
.view-clause a{
	color: #fff;
}
.view-clause a:hover{
	text-decoration: underline;
}
a.reacquire{
	color: #c1c1c1;
}
.error-notic{
	color: #ff4e00;
	display: none;
}
.login-nav{
	width: 100%;
	height: 30px;
	background-color: rgba(0,0,0,0.2);
	color: #fff;
	/*border-bottom: 1px #c1c1c1 solid;*/
}
.login-nav ul{
	padding-right: 50px;
}
.login-nav li{
	float: left;
	line-height: 30px;
	padding: 0 10px;
}
.login-nav a:hover{
	text-decoration: underline;
	color: #03a9f4;
}
.mobile-success{
	padding-top: 20px;
}
.mobile-success p{
	text-align: center;
	color: #666;
}
.mobile-success p span{
	font-weight: bold;
	padding: 0 10px;
}
.mobile-success p a{
	color: #03a9f4;
	padding-left: 5px;
}
.mobile-success p a:hover{
	text-decoration: underline;
}
.loading{
	position: absolute;
	top: 10px;
	right: 20px;
	display: none;
}
</style>
<script>
	import {bus} from '../common/commonvue.js';
	import {loginReset} from '../statics/site/js/login.js'

    export default{
        data(){
            return {
                user_name:'',
                password:''
            }
		},
    methods:{
        login(){
            this.$http.post('site/account/login',{user_name:this.user_name,password:this.password}).then(response=>{
                if(response.data.status==0){
					this.$router.push({path:localStorage.getItem('wantVisitPath')});
					//发消息给App.vue告诉他已经登录成功
					bus.$emit('loginSuccess')
                }else{
					this.$message.error('账号或密码错误，请重新输入!');
				}
            });
        },
	},
	mounted(){//在模板渲染后进行调用
		loginReset()
		}
    }
</script>