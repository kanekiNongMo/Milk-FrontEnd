<template>
  <portal-template>
    <div id="login">
      <el-form
        label-position="top"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        status-icon
        :model="user"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="user.password"
            type="password"
            placeholder="请输入密码"
            @keyup.enter.native="login('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="submit-btn" @click="login('ruleForm')">登录</el-button>
      </el-form>
      <router-link to="/register">
        <el-button type="text" class="el-icon-caret-right">注册用户</el-button>
      </router-link>
    </div>
  </portal-template>
</template>

<script>
import PortalTemplate from "./PortalTemplate";
export default {
  name: "login",
  components: {
    PortalTemplate
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      var self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          self.$store
            .dispatch("login", {
              username: self.user.username,
              password: self.user.password
            })
            .then(response => {
              self.$message.success(response.data.message);
              self.$router.push("/home/course/list");
            })
            .catch(response => {
              self.$message.error(response.data.message);
            });
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>