<!-- login template -->
<template>
    <div class="login_container">
        <div class="login-box">
            <!-- 标题盒子 -->
            <div class="login-head">
                <h1>欢迎使用</h1>
                <h3>Welcom Use BookSystem @zouzhu</h3>
            </div>
            <!-- 表单的盒子 -->
            <div class="login_from_box">
                <LoginCompoent></LoginCompoent>
            </div>


        </div>
    </div>
</template>








<script>

import LoginCompoent from '@/components/login-component/Login'
export default {
  name: 'Login',

  components: {
      LoginCompoent
  }
}

</script>







<!-- login css -->
<style lang='less' scoped>
    .login_container{
        height: 100%;
        position: relative;
        background-image: url(../assets/image/back3.jpg);
        display: flex;
        /* 登录盒子 */
        .login-box{
            display: flex;
            flex-direction: row;
            margin: auto;
            box-shadow: 1px 1px 10px grey;
            border-radius: 5px;
            .login-head{
                width: 600px;
                height: 400px;
                padding: 100px 100px;
                box-sizing: border-box;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                background-image: linear-gradient(to top right, #457578 15%,#fa717f);
                h1{
                    color: #ffffff;
                }
                h3{
                    color: #ffffff;
                }
            }
            .login_from_box{
                width: 300px;
                height: 400px;
                background-color: #f5f5f9;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                background-image: url(../assets/image/background.gif);
            }
        }
    }

</style>
