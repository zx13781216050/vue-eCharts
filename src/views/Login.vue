<template>
    <div class="login">
        <div class="title-container">
            <h2>绍兴文旅数据中台</h2>
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
            <el-row style=" padding: 50px 80px;">
            <h3 class="title">数据智能分析系统</h3>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                        v-model="loginForm.password"
                        type="password"
                        auto-complete="off"
                        placeholder="密码"
                        @keyup.enter.native="handleLogin"
                >
                </el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button
                        :loading="loading"
                        size="medium"
                        type="primary"
                        style="width:100%;"
                        @click.native.prevent="handleLogin"
                >
                    <span v-if="!loading" >登 录</span>
                    <span v-else>登 录 中...</span>
                </el-button>
            </el-form-item>
            </el-row>
        </el-form>
        <!--  底部  -->
        <div class="el-login-footer">
            <!--<span>Copyright © 2018-2019 ruoyi.vip All Rights Reserved.</span>-->
        </div>
    </div>
</template>

<script>
    import { requestLogin } from "@/api/api";
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        components: {ElRow},
        name: "Login",
        data() {
            return {
                codeUrl: "",
                cookiePassword: "",
                loginForm: {
                    username: "hzdy",
                    password: "hzdy",
                    // rememberMe: false,
                    // code: "",
                    // uuid: ""
                },
                loginRules: {
                    username: [
                        { required: true, trigger: "blur", message: "用户名不能为空" }
                    ],
                    password: [
                        { required: true, trigger: "blur", message: "密码不能为空" }
                    ],
                    // code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
                },
                loading: false
            };
        },
        created() {
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.logining = true;
                        let loginParams = "?username=" + this.loginForm.username + "&password=" + this.loginForm.password;
                        requestLogin(loginParams).then((data)=>{
                            sessionStorage.setItem('token', data.data);
                            if(data.code === 1){
                                this.$message({
                                    message: "登录成功",
                                    type: 'success'
                                });
                                this.$router.push({ path: '/dashboardIndex' });
                            }else{
                                this.$message({
                                    message: "账号或密码错误，请重新输入",
                                    type: 'error'
                                });
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    };
</script>

<style lang="scss" >
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background-image: url("../../static/img/loginbg.jpg");
        background-size: cover;
    }
    .title {
        margin: 0px auto 50px auto;
        text-align: center;
        color: #1492FF;
        font-size: 38px;
    }

    .title-container{
        color: #fff;
        font-size: 70px;
        font-family: "STKaiti","Microsoft YaHei";
        display: flex;
    }

    .login-form {
        border-radius: 6px;
        background: #ffffff;
        width: 500px;
        height: 400px;

        .el-input {
            height: 38px;
            input {
                height: 38px;
            }
        }
        .input-icon {
            height: 39px;
            width: 14px;
            margin-left: 2px;
        }
    }
    .login-tip {
        font-size: 13px;
        text-align: center;
        color: #bfbfbf;
    }
    .login-code {
        width: 33%;
        height: 38px;
        float: right;
        img {
            cursor: pointer;
            vertical-align: middle;
        }
    }
    .el-login-footer {
        height: 40px;
        line-height: 40px;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .el-form-item{
        margin-bottom: 40px;
    }

    .el-button--primary{
        background-color: #1492FF !important;
        border-color: #1492FF !important;
    }
    .el-button--primary:hover{
        background-color: #1492FF !important;
        border-color: #1492FF !important;
    }
</style>
