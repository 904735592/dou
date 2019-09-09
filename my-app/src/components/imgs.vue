<template>
    <div class="imgs-x">
        <img src="../assets/promotion_bg.b7abee9.jpg">
        <div class="img-min">
            打开APP，下载更多
            <p>
                <span>极速下载</span>
                <span>打开</span>  
            </p>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .imgs-x{
        width: 100%;
        height: .87rem;
        position: relative;
        
    }
    .imgs-x img{
        width: 100%;
        height: 100%;
    }
    .img-min{
        position: absolute;
        width: 90%;
        height: .8rem;
        line-height: .8rem;
        right: 0;
        top: 0;
        font-size: 14px;
        color: #2ca532;
        
        
    }
    .img-min p{
        display: inline-block;
        float: right;
        height: .8rem;
        line-height: .8rem;
        padding-right: 5px;
    } 
    .img-min span{
        
        display: inline-block;
        height: .26rem;
        line-height: .26rem;
        text-align: center;
        padding-right: .18rem;
        padding-left: .18rem;
        margin: 4px;
        font-size: 12px;
        border: 1px solid #42bd56;
        border-radius: 4px;
    }
    .img-min span:nth-child(1){
        background-color: #42bd56;
        color: #fff;
    }
    .img-min span:nth-child(2){
        
        color: #42bd56;
    }
</style>