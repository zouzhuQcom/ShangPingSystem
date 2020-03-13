<template>
    <!-- 用户信息显示面板 -->
    <div class="user-info-contain">
        <div class="user-info-box">
            <el-button type="success" round @click="hideUserInfoBox($event)">成功按钮</el-button>
            <p>{{ usernameProps }}</p>
        </div>
    </div>
</template>






<script>
import router from "@/router/index.js"

export default {
    name: "ComponentUserInfo",
    data: function(){
        return {
            UserInfoBoxDisplay: "none"
        };
    },
    props: ["usernameProps"],
    methods:{
        hideUserInfoBox(event){
            /*
                当触发事件时, 隐藏用户信息面板 ComponentUserInfo
            */
            const fatherParent = event.target.parentNode.parentNode;
            fatherParent.style.display = this.UserInfoBoxDisplay;
            this.UserInfoBoxDisplay = "block";
            router.go(-1);
        }
    }
}
</script>





<style lang="less" scope>
    .user-info-contain{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: grey;
        .user-info-box{
            width: 450px;
            height: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: red;
            border-radius: 5px;
        }
    }
</style>