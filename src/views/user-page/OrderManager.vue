<template>
    <div class="order-manager-contain">
        <!-- 数据显示部分 -->
        <div class="order-box-top">
            <ComponentOrderData></ComponentOrderData>
        </div>
        <div class="kongbai"></div>
        <!-- 选项部分 : 成交订单, 用户申请退款的订单,未发货的订单, 待发货的订单, 异常订单-->
        <div class="order-box-buttom">
            <div class="order-box-buttom-top">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="成交订单" name="first"></el-tab-pane>
                    <el-tab-pane label="待处理订单" name="second"></el-tab-pane>
                    <el-tab-pane label="待发货订单" name="third"></el-tab-pane>
                    <el-tab-pane label="异常订单" name="fourth"></el-tab-pane>
                </el-tabs>
            </div>
            
            <div class="order-router-box">
                <NoSuccessUserOrder v-if="componentDataNumber==1"></NoSuccessUserOrder>
                <SuccessUserOrder v-else-if="componentDataNumber==2"></SuccessUserOrder>
                <ComponentErrorOrder v-else-if="componentDataNumber==4"></ComponentErrorOrder>
            </div>
        </div>
    </div>
</template>





<script>
import ComponentOrderData from "@/components/order-component/ComponentOrderData"

import NoSuccessUserOrder from "@/components/order-component/NoSuccessUserOrder"
import SuccessUserOrder from "@/components/order-component/SuccessUserOrder"
import ComponentErrorOrder from "@/components/order-component/ComponentErrorOrder"

export default {
    name: "OrderManager",
    data: function(){
        return {
            activeName: 'first',
            componentDataNumber: 1
        }
    },
    components: {
        ComponentOrderData,
        NoSuccessUserOrder,
        SuccessUserOrder,
        ComponentErrorOrder
    },
    methods: {
      handleClick(tab, event) {
        switch(tab.name){
            case "first": this.componentDataNumber = 1; break;
            case "second": this.componentDataNumber = 2; break;
            case "fourth": this.componentDataNumber = 4; break;
        }
      }
    }
}
</script>




<style lang="less" scope>
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: white;
        width:100%;
        height:100%;
    }
    .order-manager-contain{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: #f5f5f9;
        .order-box-top{
            width: 100%;
            height: 25%;
            border-radius: 5px;
        }
        .kongbai{
            width: 100%;
            height: 1%;
            background-color: #f5f5f9;
        }
        .order-box-buttom{
            width: 100%;
            height: 74%;
            padding: 10px;

            box-sizing: border-box;

            background-color: white;
            
            .order-box-buttom-top{
                width: 100%;
                height: 10%;
            }
            
            .order-router-box{
                width: 100%;
                height: 90%;
            }
            
        }
        

    }
</style>