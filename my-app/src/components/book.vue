<template>
    <div class="wu">
       <img src="../assets/book_zw.fc645eb.jpg"> 
       <div class="wu-right">
           <p>
               造物
               <span>￥68</span>
           </p>
            <h6>改变世界的万物图鉴,3000幅图里发现与冒险</h6>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .wu{
        overflow: hidden;
        margin: .16rem 0 .18rem ;
        display: flex;
    }
    .wu img{
        
        
        width: 1.2rem;
        height: 1.8rem;
        margin-right: 10px;
    }

     .wu .wu-right p{
         font-size: .16rem;
         color: #494949;
         height: .54rem;
         line-height: .54rem;
         margin-right: 8px;
     }
     .wu .wu-right p span{
         float: right;
         font-size: 12px;
         color: #e76648;
     }
     .wu .wu-right h6{
         font-weight: 100px;
         font-size: 12px;
         color: #9b9b9b;
     }
</style>