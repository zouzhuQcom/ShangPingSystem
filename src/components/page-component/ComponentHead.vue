<template>
    <div class="head-contain">
        <!-- Logo 商标 -->
        <div class="head-logo-info">
            <img src="@/assets/logo.png" alt="logo">
            <h2>图书销售系统</h2>
        </div>
        <!-- 用户登录认证 -->
        <div class="head-user-info">
            <i class="el-icon-user"></i>
            <span>{{ usernameProps }}<router-link to="/ComponentHead/ComponentUserInfo">查看</router-link></span>
        </div>
        <!-- 当点击 a 标签时, 将会显示这个组件, 显示用户信息 -->
        <router-view name="ComponentUserInfo"></router-view>
    </div>
</template>









<script>
export default {
    name: "componentHead",
    data: function(){
        return {
            
            
        }
    },
    props: {
        usernameProps: {
            type: String,
            default: "123"
        }
    }
}
</script>





<style lang="less" scope>
    .head-contain{
        height: 100%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #5d6578;
        padding: 10px 30px;
        .head-logo-info{
            display: flex;
            flex-direction: row;
            img{
                height: 70%;
            }
            h2{
                margin: 0;
                padding: 0;
                line-height: 45px;
                text-indent: 15px;
            }
        }
        .head-user-info{
            i{
                line-height: 100%;
                font-size: 25px;
                color: greenyellow;
            }
            span{
                line-height: 100%;
                padding-left: 5px;
                a{
                    color: white;
                    text-decoration: none;
                    padding: 0 10px;
                }
            }
        }
    }
</style>