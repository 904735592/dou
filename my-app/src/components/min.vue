<template>
<div>
    <div class="car" v-for="(v,i) in arr" :key='i'>
        <img src="../assets/dou.jpg">
        <div class="car-right">
            <div class="cons">
                <b><span>豆瓣</span>写了日记</b>
                <p>2017-03-01 19:30:40</p>
            </div>
            <div class="cob">
                <h4>豆瓣APP 4.12.0 主要更新</h4>
                <p>
                    
                    - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
    
                </p>
            </div>
            <div class="icons">
                <p>
                    <img src="../assets/1.jpg" >
                    <span>{{v.num}}</span>
                </p>
                <p>
                    <img src="../assets/2.jpg" >
                    <span>0</span>
                </p>
                <p>
                    <img src="../assets/3.jpg" >
                    <span>1</span>
                </p>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4},
                {"num":4}
            ]
        }
    }
}
</script>
<style scoped>
    .car{
            padding: 0 0 .2rem 0;
            margin: .2rem .18rem;
            overflow: hidden;
            display: flex;
            /* white-space: nowrap ; */
            border-bottom: 1px solid #d8d8d8;
            font-size: 0px;
    }
    .car img{
        width: .4rem;
        height: .4rem;
        margin-right: 10px;
        border-radius: 50%;
    }
    .cons b{
        font-size: .15rem;
        color: aaaaaa;
        font-weight: 100;
        line-height: .15rem;
    } 
    .cons b span{
        font-size: .16rem;
        font-weight: 600;
        color: #494949;
    }
    .cons p{
        padding-top: 5px;
        font-size: 10px;
        color: #aaa;
        line-height: 10px;
    }
    .cob{
        margin: .1rem 0 .2rem;
        padding: .15rem;
        border-radius: .2px;
        border:1px solid #d8d8d8;
    }
    .cob h4{
        font-size: .16rem;
        color: #494949;
        line-height: .16rem;
    }
    .cob p{
        padding-top: 10px;
        font-size: 12px;
        color: #aaa;
        line-height: .16rem;
    }
    .icons,.icons p{
        display: flex;
        align-items: center;
    }
    .icons p img{
        width: .18rem;
        height: .18rem;
    }
    .icons p{
        margin-right: .2rem;
    }
    .icons p span{
        font-size: 10px;
        color: #aaa;
    }
</style>