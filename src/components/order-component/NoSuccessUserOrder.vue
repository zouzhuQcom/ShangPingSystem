<template>
    <div class="no-success-user-order-contain">
        <el-table
            :data="userOrderMessage"
            stripe
            style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="orderId"
                    label="订单编号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="orderName"
                    label="商品名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column
                    prop="commit"
                    label="备注">
                </el-table-column>
                <el-table-column
                    prop="money"
                    label="金额">
                </el-table-column>
        </el-table>
        <!-- 分页菜单 -->
        <div class="fengye">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
    
</template>




<script>
export default {
    name: "NoSuccessUserOrder",

    data: function(){
        return {
            menus: ["ID", "淘宝号", "商品名称", "商品(id)", "备注", "状态", "未回复消息","回复"],
            userOrderMessage: [
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },
                {
                    date: '2016-05-02',
                    orderId: "202003119033421083",
                    orderName: "JavaScript 从入门到精通",
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518',
                    commit: "尽快发货",
                    money: 50.50
                },

            ]
        }
    }
}
</script>




<style lang="less">
    .no-success-user-order-contain{
        height: 100%;
        .fengye{
            display: flex;
            justify-content: center;
            padding-top: 30px;
        }
    }
</style>