<template>
  <portal-template>
    <div id="register">
      <el-form
        label-position="top"
        :rules="rules"
        ref="ruleForm"
        status-icon
        label-width="80px"
        :model="user"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repassword">
          <el-input
            v-model="user.repassword"
            type="password"
            placeholder="请确认密码"
            @keyup.enter.native="register('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="submit-btn" @click="register('ruleForm')">注册</el-button>
      </el-form>
      <router-link to="/login">
        <el-button type="text" class="el-icon-caret-right">已有账户前往登录</el-button>
      </router-link>
    </div>
  </portal-template>
</template>

<script>
import PortalTemplate from "./PortalTemplate";
export default {
  name: "register",
  components: {
    PortalTemplate
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      user: {
        username: "",
        password: "",
        repassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        repassword: [
          { required: true, validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register(formName) {
      var self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          alert("注册开始");
          // self.$store
          //   .dispatch("register", {
          //     username: self.user.username,
          //     password: self.user.password
          //   })
          //   .then(response => {
          //     self.$message.success(response.data.message);
          //     self.$router.push("/foo");
          //   })
          //   .catch(response => {
          //     self.$message.error(response.data.message);
          //   });
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>
