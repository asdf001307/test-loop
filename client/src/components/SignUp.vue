<template>
  <div class="container">
    <el-form ref="form" method="post" :model="form" :rules="rules" label-width="120px">
      <!-- @submit.prevent="submitForm -->
      <el-form-item label="name">
        <el-input id="name" v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input id="password" v-model="user.passwd"></el-input>
      </el-form-item>
<!--      <el-form-item label="passwordConfirm">-->
<!--        <el-input v-model="form.passwordConfirm"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="email">-->
<!--        <el-input v-model="form.email"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="position">-->
<!--        <el-input v-model="form.position"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="position">-->
<!--        <el-select v-model="form.position" placeholder="please select your position" style="width: 100%">-->
<!--            <el-option label="일반" value="normal"></el-option>-->
<!--            <el-option label="관리" value="manage"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->


      <!-- <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="name">성함</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="passwordConfirm">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <div>
        <label for="position">직책</label>
        <input type="text" id="position" v-model="position" />
      </div>
      <div>
        <label for="teamName">팀 이름</label>
        <input type="text" id="teamName" v-model="teamName" />
      </div>
      <button type="submit">회원가입</button> -->
      <el-form-item>
        <el-button type="primary" @click="SignUp">SignUp</el-button>
        <el-button @click="Cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
    {{ test }}
  </div>
</template>

<script>
  import router from "../router/index.js"
  const axios = require('axios')
    export default {
        // name: 'SignupForm',
        data: function() {
            return {
                test :'',
                user :{
                    name: '',
                    passwd: '',

                },
              rules: {
                name: [
                  {
                    required: true,
                    message: "이름 입력",
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
 //            curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
 //   "name": "aaddaa", \
 // "email" :"123%40mail.com" \
 //  \
 // }' 'http://localhost:3000/api/tests'

 //            curl -X GET http://magento.example.com/rest/V1/wishlist --header "Authorization: Bearer pbhercbtk6dd3eatf1pyx8jj45avjluu"
 //            fetch("http://magento.example.com/rest/V1/wishlist", {
 //        method: "GET",
 //            headers: {
 //            Authorization: "Bearer pbhercbtk6dd3eatf1pyx8jj45avjluu"
 //        }
 //    })
 //    .then(res => res.json())
 //        .then(response => {
 //            console.log(response);
 //        });,
          Cancel(){
            return router.push("/login");
          },
            SignUp: function () {
                // this.$http.post("/api/users/sign", {
                //     user: this.user,
                // })
                //     .then((res) => {
                //         if (res.data.success == true) {
                //             alert(res.data.message);
                //             this.$router.push("/login");
                //         }
                //         if (res.data.success == false) {
                //             alert(res.data.message);
                //         }
                //     })
                //     .catch(function (error) {
                //         alert("error");
                //         console.log(error);
                //     });

              //post 요청 보내기
              axios.post('api/tests',{
                name : this.user.name,
                passwd : this.user.passwd
              }).then((res)=>{
                console.log(res)
              })

              //get 요청 보내기 login component
              // let filter ={
              //   where :{
              //     name : this.user.name
              //   }
              // };
              // axios.get('api/tests?filter=' +JSON.stringify(filter)).then(response => {
              //  (this.test = response.data)
              //   console.log(response.data[0]['passwd']);
              //   //console.log(response.data)
              // })



              // axios.get('/api/tests').then(response => {
              //   (this.test = response.data)
              //   // let jsonData = JSON.parse(data);
              //   // console.log(jsonData);
              //   console.log(response.data);
              //   //let test = response.data
              //   //console.log(test);
              // });

            },
        },
    };
</script>

<style scoped></style>
