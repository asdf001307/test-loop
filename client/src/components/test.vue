<template>
  <div>
    <el-form
      class="login-form"
      :inline="true"
      :model="formInline"
      :rules="rules"
      ref="form"
      @submit.native.prevent="login"
    >
      <el-form-item prop="username">
        <el-input v-model="model.username" placeholder="Username" prefix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="model.password" placeholder="Password" type="password" prefix-icon="el-icon-key"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="model.password" placeholder="Password" type="password" prefix-icon="el-icon-key"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="model.password" placeholder="Password" type="password" prefix-icon="el-icon-key"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="model.password" placeholder="Password" type="password" prefix-icon="el-icon-key"/>
      </el-form-item>

      <el-form-item>
        <el-button
          :loading="loading"
          class="login-button"
          type="primary"
          native-type="submit"
          block
        >Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import router from "../router/index.js"
    export default {
        name: "login",
        data() {
            return {
                validCredentials: {
                    username: "12345",
                    password: "12345",
                    ttl : 600,

                },
                model: {
                    username: "",
                    password: "",
                    ttlOptions: [
                        {value: 180, label: '3분간 로그인 유지'},
                        {value: 300, label: '5분간 로그인 유지'},
                        {value: 600, label: '10분간 로그인 유지'},
                        {value: 1800, label: '30분간 로그인 유지'},
                        {value: 6000, label: '60분간 로그인 유지'}
                    ],


                },
                loading: false,
                rules: {
                    username: [
                        {
                            required: true,
                            message: "Username is required",
                            trigger: "blur"
                        },
                        {
                            min: 4,
                            message: "Username length should be at least 5 characters",
                            trigger: "blur"
                        }
                    ],
                    password: [
                        { required: true, message: "Password is required", trigger: "blur" },
                        {
                            min: 5,
                            message: "Password length should be at least 5 characters",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        methods: {
            simulateLogin() {
                return new Promise(resolve => {
                    setTimeout(resolve, 800);
                });
            },
            async login() {
                let valid = await this.$refs.form.validate();
                if (!valid) {
                    return;
                }
                this.loading = true;
                await this.simulateLogin();
                this.loading = false;
                if (
                    this.model.username === this.validCredentials.username &&
                    this.model.password === this.validCredentials.password
                ) {
                    this.$message.success("Login successfull");
                    await router.push("/login")
                } else {
                    this.$message.error("Username or password is invalid");
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-button {
    width: 100%;
    margin-top: 40px;
  }
  .login-form {
    //width: 350px;
  }
</style>
