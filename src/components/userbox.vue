<template>
  <div class="content-r">

    <div class="content-r-wrap" v-if="!formData.username">
      <input type="text" placeholder="输入邮箱" class="input" v-model="formData.email">
      <input type="password" placeholder="输入密码" class="input" v-model="formData.password" @keyup.enter="hendlelogin">
      <el-button class="login btn" type="primary" @click="hendlelogin">登录</el-button>
      <br>
      <el-button class="btn" @click="hendleRegister">注册</el-button>
    </div>


    <div class="content-r-wrap" v-else>
      <div><img :src="formData.avatar" class="image"></div>
      <div class="username">用户名：{{formData.username}}</div>
      <div class="email">邮箱：{{formData.email}}</div>
      <el-button @click="hendlelogout" class="logout-btn">退出登录</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "userbox",
      data(){
        return {
          formData:{
            email:'',
            password:'',
            avatar:'',
            username:''
          }
        }
      },
      methods:{
        hendleRegister(){
          this.$router.push('/register')
        },
        hendlelogin(){
          this.$axios.post('/login',this.formData).then( res => {
            console.log(res.userdata)
            if(res.code === 200){
              this.formData = res.userdata;
              this.$store.commit('CHANGE_USERINFO',res.userdata);
              this.$message.success('登陆成功')
              setTimeout( () => {
                this.$router.push('/index')
              },1000)
            }
            else if(res.code === 400){
              this.$message('邮箱密码不正确，请重新输入')
            }
          })
        },
        hendlelogout(){
          let userinfo = {
            username:'',
            password:'',
            email:''
          };
          this.$store.commit('CHANGE_USERINFO',userinfo);
          this.$axios.get('/logout').then( res => {
            console.log(this.formData)
            if(res.code === 200){
              this.formData = {...this.$store.state.userInfo}
              setTimeout(() => {
                this.$router.push('/index')
              },100)
            }
          })
        },
        getinitdata(){
          this.formData = {
            ...this.$store.state.userInfo
          }
        }
      },
      created(){
          this.getinitdata()
        console.log(this.formData)
      }
    }
</script>

<style scoped lang="scss">

  .content-r {
    width: 360px;
    height: 340px;
    background: #f1f1f1;
    border: 1px solid #f2f2f2;
    border-radius: 5px;

  .content-r-wrap {
    width: 300px;
    margin: 30px auto 10px;
    box-sizing: border-box;
    text-align: center;
  }

  .input {
    width: 260px;
    height: 40px;
    margin-top: 20px;
  }

  .btn {
    width: 264px;
    margin-top: 20px;
  }

  .image{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .username{
    font-size: 15px;
    color: #e6a23c;
  }
  .email{
    font-size: 15px;
    margin-top: 10px;
  }
  .logout-btn{
    width: 300px;
    margin: 20px auto;
    background: #ff4d51;
    color: #ffffff;
  }

  }
</style>
