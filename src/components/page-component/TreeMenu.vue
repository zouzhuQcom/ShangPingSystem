<template>
    <div class="menu-contain">
        <!-- Logo 区域 -->
        <div class="user-image">
            
        </div>
        <!-- 一级导航栏 -->
        <div v-for="menu in menus" :key="menu.id" class="menu-1">
            <p @click="menuDown($event)">{{ menu.name }}</p>
            <!-- 二级导航栏 -->
            <ul class="menu-2">
                <li v-for="(value,index) in menu.value" :key="index">
                    <router-link :to="value.url">{{ value.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>







<script>
export default {
    name: "TreeMenu",
    
    data: function(){
        return {
            menus: [
                { 
                    id: 100, 
                    name: "订单管理", 
                    value: [
                     
                        {name: "商品管理", url: "product-manager"},
                        {name: "线上管理", url: "up-product-manager"},
                        {name: "订单管理", url: "order-manager"},
                        {name: "交易分析", url: "deal-manager"},
                        
                    ]
                },
                { 
                    id: 101, 
                    name: "后台系统", 
                    value: [
                        {name: "平台缴费", url: "system-bill"},
                        {name: "平台通知", url: "system-email"}
                    ]
                }
            ]
        }
    },

    props:["usernameProps"],

    methods: {
        menuDown: function(event){
            var siblingElement = event.target.nextSibling;
            siblingElement.style.display == "none"?(siblingElement.style.display="block"):(siblingElement.style.display="none");
        }
    }
}
</script>








<style lang="less" scope>
    .menu-contain{
        height: 100%; 
        width: 100%;
        background-color: #fbfcfd;
        .user-image{
            height: 10%;
        }
    }
    .menu-1{
        p{
            width: 100%;
            background-color: #f5f5f9;
            margin: 0; 
            padding: 10px 70px;
            box-sizing: border-box;
            color: grey;
        }
        .menu-2{
            width: 100%;
            display: none;
            background-color: #fbfcfd;
            list-style: none;
            box-sizing: border-box;
            margin: 0; padding: 0;
            li{
                line-height: 40px;
                text-align: center;
                border-bottom: 1px solid #f5f5f9;
                a{
                    color: #a1a2a5;
                    text-decoration: none;
                }
            }
            li:hover{
                a{
                    color:#b5c7e3;
                }
                border-left: 5px solid #acaeec;
            }
        }
    }
</style>