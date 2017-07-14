<template>
<div>
 <!--图像下文字-->
    <el-row>
      <el-col :span="24">
        <p id="login">创建账户</p>
      </el-col>
      
    </el-row>
 <!--表格-->
    <el-row>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <div id="main">
          <!--第一个input-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
            <el-input type="text" placeholder="你的邮箱地址" id="mail"></el-input>
            </el-col>
          </el-row>
          <!--第二个input-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
            <el-input type="password" id="check" placeholder="设置密码"></el-input>
            </el-col>
          </el-row>
          <!--忘记密码-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
              <p id="text">点击创建账户，表示同意<router-link to="/create">服务条款</router-link>和<router-link to="/create">隐私条款</router-link></p>
            </el-col>
          </el-row>
          <!--按钮-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
            <el-button type="success" id="btn">创建账户</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col> 
    </el-row>
    <!--已经拥有账户？-->
    <el-row>
      <el-col :span="11"><div class="grid-content"></div></el-col>
      <el-col :span="2">
        <p id="nohave">已经拥有账户？</p>
      </el-col>
      
    </el-row>
    <!--创建账户-->
    <el-row>
      <el-col :span="11"><div class="grid-content"></div></el-col>
      <el-col :span="2">
        <div id="create"><router-link to="/" id="new">登录</router-link></div>
      </el-col>
      
    </el-row>
</div>
</template>
<script>
    export default{
        data(){
            return{msg:'创建账户'}
      
  }
    }
</script>
<style>
  #main{
    background-color:#fff;
    margin-top: 40px;
  }
  #mail{
    border-radius: 6px;
    width: 100%;
    margin-top: 30px;
    font-size: 1rem;
  }
  #check{
    border-radius: 6px;
    width: 100%;
    margin-top: 30px;
    font-size: 1rem;
  }
  #text{
      font-size: 6px;
      margin-top: 10px;
  }
  #btn{
    width: 100%;
    margin-top: 10px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  #forget_box{
    margin-top: 20px;
    text-align: center
  }
  #forget{
    font-size: 10px;
    color: #13CE66;
    text-decoration: none
  }
  .turn_text{
    font-size: 10px;
    margin-top: 10px;
    padding-bottom: 20px;
  }
  #turn{
     text-decoration: none;
    vertical-align:sub;
    margin-left: 2px;
  }
  #create{
    text-align: center;
    margin-top: 10px;
  }
  #new{
    color: #13CE66;
    font-size: 20px;
    text-decoration: none;
    font-weight: bold
  }
</style>
