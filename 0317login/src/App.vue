<template>
  <div id="app">
    <!--头部图像-->
    <el-row>
      <el-col :span="11"><div class="grid-content"></div></el-col>
      <el-col :span="2">
        <img src="./assets/_logo.png" width="100%" class="img-1">
      </el-col>
    </el-row>
   
    <router-view></router-view>
    
    </div>
</template>
<script>

</script>

<style>
  *{
    margin: 0;
    padding: 0
  }
  .grid-content {
    min-height: 36px;
  }
  .img-1{
    margin-top: 50px;
  }
  body{
    background-color: #ddd;
  }
  #login{
    font-size: 40px;
    text-align: center;
    font-weight: bold
  }
  
  #nohave{
    font-size: 8px;
    color: #555;
    text-align: center;
    margin-top: 30px;
  }
  
</style>
