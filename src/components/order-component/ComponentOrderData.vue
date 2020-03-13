<template>
    <div class="order-box-contain">
        <ul>
            <li v-for="(menu, index) in menus" :key="index">
                <h3>{{ menu.name }}</h3>
                <h3 style="padding-bottom: 15px;">{{ menu.value[0] }}</h3>
                <p><i class="el-icon-mobile" style="padding-right:15px;"></i>{{ menu.value[1] }}</p>
                <p><span style="padding-right:10px;">昨日</span> {{ menu.value[2] }}</p>
            </li>
            
        </ul>
    </div>
</template>






<script>
export default {
    name: "ComponentOrderData",
    data: function(){
        return {
            userDayNumber: 0,
            userBeforeDayNumber: 0,
            userOrderSuccess: 0,
            houseStart: false,
            menus: [
                {
                    name: "访客量", value: [412, "83.01%", 578]
                },
                {
                    name: "浏览量", value: [1404, "87.89%", 2088]
                },
                {
                    name: "支付金额", value: [2102, "90.08%", 1831]
                },
                {
                    name: "支付子订单数", value: [19, "84.21", 18]
                },
                {
                    name: "支付买家数", value: [17, "88.24", 15]
                }
            ]
        }
    }
}
</script>






<style lang="less">
    h3,p{
        margin: 0;
        padding: 0;
        line-height: 30px;
    }
    .order-box-contain{
        width: 100%;
        height: 100%;
        padding: 20px 0;
        background-image: linear-gradient(to right, #8f9fbe, #369cdd);
        border-radius: 5px;
        ul{
            display: flex;
            flex-direction: row;    
            justify-content: space-around;
            color: white;
            text-align: center;
        }
    }
</style>