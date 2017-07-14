<template>
<div>
 <!--图像下文字-->
    <el-row>
      <el-col :span="24">
        <p id="login">登录</p>
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
                <el-input v-model="input" placeholder="用户名或邮箱地址" id="login_input"></el-input>
            </el-col>
          </el-row>
          <!--复选框-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
            <el-checkbox v-model="checked" id="box_1">30天内记住我</el-checkbox>
            </el-col>
          </el-row>
          <!--按钮-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
            <el-button type="success" id="btn" v-on:click="check">继续</el-button>
            </el-col>
          </el-row>
          <!--忘记密码-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="20">
              <div id="forget_box"><router-link to="/" id="forget">忘记密码？</router-link></div>
            </el-col>
          </el-row>
          <!--改变形态-->
          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="1">
              <div class="turn_text"><img src="../assets/turn.png" width="100%"></div>
            </el-col>
            <el-col :span="19">
              <div class="turn_text"><router-link to="/" id="turn">切换到Evernote International</router-link></div>
            </el-col>
          </el-row>
          
        </div>
      </el-col> 
    </el-row>
    <!--没有账号-->
            <el-row>
      
            <el-col :span="24">
             <p id="nohave">没有账号？</p>
            </el-col>
      
            </el-row>
    <!--创建账户-->
    <el-row>
      <el-col :span="11"><div class="grid-content"></div></el-col>
      <el-col :span="2">
        <div id="create"><router-link to="/create" id="new">创建账户</router-link></div>
      </el-col>
      
    </el-row>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
      user:''
      return{ checked: false}
  },
  methods:{
      check:function(event){
          var user=this.user
      }
  }
}
</script>
<style scoped>
     #main{
    background-color:#fff;
    margin-top: 40px;
  }
  #login_input{
    margin-top: 30px;
    font-size: 1rem;

  }
  #box_1{
    margin-top: 30px;
    font-size: 4px;
    color: #666;

  }
  #btn{
    width: 100%;
    margin-top: 20px;
    font-weight: bold
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
    #nohave{
    font-size: 8px;
    color: #555;
    text-align: center;
    margin-top: 30px;
  }
</style>
