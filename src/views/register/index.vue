<template>
  <div class="register-container">
    <h2>欢迎来到注册页面</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="rule-form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请设置用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="telephone">
        <el-input v-model="ruleForm.telephone" placeholder="可用于登录和找回密码"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请设置用户密码"></el-input>
         <!-- suffix-icon="el-icon-warning-outline" -->
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input type="password" v-model="ruleForm.checkPassword" placeholder="请输入确认密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="buttun-wapper">
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetchUserRegister } from '@/api/user.js'

export default {
  data() {
    let validatePassword = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        telephone: '',
        password: '',
        checkPassword: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号码为11位', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { name, password, telephone, } = this.ruleForm
          fetchUserRegister({ name, password, telephone, }).then((res) => {
            this.$store.dispatch('user/register', {
              name,
              token: res.token,
            })
            this.$router.push({ path: '/' })
          })
        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
}
</script>

<style lang="less" scoped>
.register-container {
  margin: 200px auto 0;
  padding: 38px;
  width: 480px;
  background-color: #eee;
  > h2 {
    text-align: center;
  }
}
.rule-form {
  margin-top: 30px;
}
.buttun-wapper {
  // float: right;
  display: flex;
  justify-content: flex-end;
}
</style>