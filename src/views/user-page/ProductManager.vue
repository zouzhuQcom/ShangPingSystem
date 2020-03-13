<template>
    <div class="box-contain">
        
        <div class="search-box">
            <el-input v-model="search.searchBookName" placeholder="根据书名查找"></el-input>
            <div style="width:20px"></div>
            <el-button type="primary" size="small" @click="searchBook">确定</el-button>
            <el-button type="success" size="small" @click="()=>{search.searchStart=false}">返回</el-button>
        </div>

        <table cellspacing="0">
            <tr class="book-message-head">
                <td v-for="(message, index) in bookMessage" :key="index">
                    {{ message }}
                </td>
            </tr>
            <!-- 用于显示用户搜索的数据 -->
            <tr v-for="(book,index) in search.searchBook" :key="index" v-show="search.searchStart === true">
                <td><img v-bind:src="book.url" alt="" style="width: 50px; height:50px;margin-top:10px;"></td>
                <td>{{ book.id }}</td>
                <td>{{ book.name }}</td>
                <td>{{ book.type }}</td>
                <td>{{ book.price }}</td>
                <td>
                    <el-input-number v-model="num" 
                                    @change="handleChange" 
                                    :min="1" :max="100" 
                                    size="mini"
                                    label="描述文字">
                    </el-input-number>
                </td>
                <td class="book-start"><span>{{ book.start }}</span></td>
                <td>
                    <span>
                        <a href="#">上架 </a><span> / </span>
                        <a href="#">下架 </a><span> / </span>
                        <a href="#">删除 </a>
                    </span>
                </td>
            </tr>
            <!-- 用于显示所有数据 -->
            <tr v-for="(book, index) in books" :key="index" class="book-message-center" v-show="search.searchStart === false">
                <td><img v-bind:src="book.url" alt="" style="width: 50px; height:50px;margin-top:10px;"></td>
                <td>{{ book.id }}</td>
                <td>{{ book.name }}</td>
                <td>{{ book.type }}</td>
                <td>{{ book.price }}</td>
                <td>
                    <el-input-number v-model="num" 
                                    @change="handleChange" 
                                    :min="1" :max="100" 
                                    size="mini"
                                    label="描述文字">
                    </el-input-number>
                </td>
                <td class="book-start"><span>{{ book.start }}</span></td>
                <td>
                    <span>
                        <a href="#">上架 </a><span> / </span>
                        <a href="#">下架 </a><span> / </span>
                        <a href="#">删除 </a>
                    </span>
                </td>
            </tr>
        </table>

    </div>
</template>






<script>

    var bookListJson = [
        {
            id: "202019980809", 
            url: require("@/assets/image/js-1.jpg"), 
            name: "JavaScript 核心技术", 
            type: "计算机类",
            price: 23.00,
            count: 100,
            start: "下架"
        },
        {
            id: "202019980810", 
            url: require("@/assets/image/js-2.jpg"), 
            name: "Vue 入门到实战", 
            type: "计算机类",
            price: 50.00,
            count: 66,
            start: "下架"
        },
        {
            id: "202019980811", 
            url: require("@/assets/image/js-3.jpg"), 
            name: "狼图腾", 
            type: "魔幻类",
            price: 50.00,
            count: 66,
            start: "下架"
        },
        {
            id: "202019980812", 
            url: require("@/assets/image/js-4.jpg"), 
            name: "撒野", 
            type: "小说类",
            price: 23.00,
            count: 100,
            start: "下架"
        }
    ]

    export default {
        name: "product-manager",

        data: function(){
            return {
                books: bookListJson,
                bookMessage: ["image","id","书名","类目","价格","库存","状态","商品操作"],
                num: 1,
                search: {
                    searchBookName: "",
                    searchStart: false,
                    searchBook: []
                }
                
            }
        },
        
        methods: {
            handleChange(value) {
                console.log(value);
            },
            searchBook: function(){
                /* 
                    @commit 根据用户名搜索图书
                    @author zouzhuqcom@163.com
                    @time 2020.03.10 12:00
                */
               this.search.searchBook = [];
               this.books.forEach(book => {
                   if(this.search.searchBookName == book.name){
                       this.search.searchBook.unshift(book);
                   }
               })
               this.search.searchStart = true;
            }
        }
    }
</script>







<style lang="less" scope>
    .box-contain{
        width:100%;
        height: 100%;
        border-radius: 3px;
        padding: 20px;
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        .search-box{
            width:300px;
            display: flex;
            flex-direction:row;
            margin-bottom: 20px;
        }
        table tr:first-child{
            td{
                padding: 0 40px;
                box-sizing: border-box;
                
            }
        }
        td{
            text-align: center;
            line-height: 40px;
            color: grey;
            border-bottom: 1px solid #f5f5f9;
        }
        tr:hover{
            background-color: #f5f5f9;
        }
        .book-start span{
            background-color: palegreen;
            color: white;
            border-radius:3px;
            padding: 0 5px;
            font-size: 12px;
        }
        a{
            text-decoration: none;
            color: grey;
        }
    }
</style>