<template>

    <!-- Login 登录盒子 -->
    <div class="loginBox">
        <!-- <h3>User Login</h3> -->
        <!-- from 表单 -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
            <!-- username -->
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <!-- password -->
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" prefix-icon="el-icon-unlock" type="password"></el-input>
            </el-form-item>
            <!-- submit and rest button -->
            <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item>
        </el-form>

    </div>

</template>





<script>

import router from "@/router/index.js"

export default {
    name: "login",

    data() {
        return {
            loginForm: {
                username: '123',
                password: '123'
            },
            loginFormRules: {
                username: [
                    { required: true, message: '请输入登陆用户名', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入登陆密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            },
            userMessageInfo: [
                {
                    username: "2118224692@qq.com", 
                    password: "zouzhu0809"
                }
            ],
            cookieUser: {
                username: ""
            }
        }
    },

    methods: {
        resetLoginForm: function(){
            /*
                resetField 重置表单数据
            */
            this.$refs.loginFormRef.resetFields();     
        },

        login: function(){
            /*
                login 登录, 登录前先验证字段是否正确, 如果返回 true 则进行 Ajax 请求
            */
            this.$refs.loginFormRef.validate((loginStart, error)=>{
                if(!loginStart) return;
                this.userMessageInfo.forEach(user => {      // 2. 模拟发送 Ajax 请求, 进行身份确认
                    if(user.username == this.loginForm.username && user.password == this.loginForm.password){
                         this.cookieUser.username = this.loginForm.username;
                         router.push("/home/" + this.cookieUser.username + "/");
                     }else{
                         console.log("username and password error .....");
                     }
                })
            });
        }
    }
}
</script>





<style lang="less" scope>

    .loginBox{
        width:100%; height: 100%; 
        
        border-radius: 5px; 
        position: relative;
        display: flex;
    }
    .login_form{
        width: 100%;
        padding: 15px 30px 30px;
        box-sizing: border-box;
        margin: auto;
    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
</style>