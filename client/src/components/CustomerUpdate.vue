<template>
  <div class="container">
    <el-form ref="form" :v-model="customer" label-width="120px">
      <!-- @submit.prevent="submitForm -->
      <el-form-item :inline="true" label="고객사이름">
        <el-input v-model="customer.name"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="대표자">
        <el-input label="대표자" v-model="customer.representative"></el-input>
      </el-form-item>
      <el-form-item label="사업자등록번호">
        <el-input prop="name" v-model="customer.corporate_registration_number"></el-input>
      </el-form-item>
      <el-form-item label="주소">
        <el-input v-model="customer.address"></el-input>
      </el-form-item>
      <el-form-item label="담당자">
        <el-input v-model="customer.manager"></el-input>
      </el-form-item>
      <el-form-item label="고객사코드">
        <el-input v-model="customer.code"></el-input>
      </el-form-item>
      <el-button label="고객사코드" @click="CreateCusID(4)">고객사코드 생성</el-button>
      <el-button @click="CheckcusID">중복체크</el-button>
      <el-form-item>
        <el-button type="primary" @click="onUpdate">수정하기</el-button>
        <el-button>취소하기</el-button>
      </el-form-item>
    </el-form>
<!--    <el-button @click="CreateCusID(4)">고객사코드 생성 :</el-button> {{str}}-->
<!--    <el-button>중복체크 필요</el-button>-->
  </div>
</template>

<script>
    import axios from 'axios';
    //import router from '../router';
    export default {
      name :"update_customer",
        data() {
            return {
                dt : new Date(),
                str : "",
                customer : {
                    code : "",
                    name : this.$route.params.id,
                    representative :this.$route.params.id,
                    corporate_registration_number :"",
                    address :"",
                    manager : "",
                    create_date : "",
                    last_update :"",
                    is_delete :""

                },

            };
        },
          created() {
            console.log(this.$route.params.id);
            console.log(this.$route.params.code);
            console.log(this.$route.params.name);
  },
            mounted() {
            let filter = {
              where: {
                id : 2
              }
            };
              axios
          .get('api/customers?filter=' + JSON.stringify(filter)).
        then(response => {
          this.customer = response.data;
          //this.customer = JSON.parse(JSON.stringify(response.data));
          //console.log(response.data)
          //console.log(response.data[0]['customer_code']);
          //console.log(response.data);
          //console.log(response.data[0].address)
          console.log(this.customer);
          //console.log(this.customer[2]['address']);
        })
        .catch(function(error){
          console.log(error);
        })
    },
          //     Login() {
          //   let filter = {
          //     where: {
          //       name: this.user.name
          //     }
          //   };
          //   axios.get('api/tests?filter=' + JSON.stringify(filter)).then(response => {
          //     //(this.test = response.data)
          //     console.log(response.data[0]['passwd']);
          //     //console.log(response.data)
          //     if (this.user.password === response.data[0]['passwd']){
          //       console.log('success');
          //       return router.push("/mainpage");
          //     }
          //   })
          // },

        methods: {
            onUpdate() {
              axios.put('api/customers',{
                id : 2,//list에서 방아오기
                customer_code: this.str,
                customer_name: this.customer.name,
                representative: this.customer.representative,
                corporate_registration_number: this.customer.corporate_registration_number,
                address: this.customer.address,
                manager: this.customer.manager,
                create_date: this.dt.toISOString(),
                last_update: "2021-09-01T01:59:53.548Z",
              }).then((res)=>{
                console.log(res)
              })
               console.log('submit');
              //console.log(Date.now());
              // var dt = new Date();
              // console.log(dt.toISOString());
            },
            CreateCusID(count) {
                let str = '';

                for (let i = 0; i < count; i++) {
                    str += Math.floor(Math.random() * 36).toString(36);
                }
                str = str.toUpperCase();
                //console.log(str);
                this.str = str;
                this.customer.code = str;
                return str;
            },
          CheckcusID() {
            let filter = {
              where: {
                customer_code: this.str,
              }
            };
            axios.get('api/customers?filter=' + JSON.stringify(filter)).then(response => {
              //(this.test = response.data)
              console.log(response.data)
              //console.log(response.data[0]['customer_code']);
              //console.log(response.data)
              if (response.data.length !== 0){
                console.log('고객사코드 생성')
                alert('동일한 고객사 코드 존재');
                this.CreateCusID(4);
              }
            })
          }

        },
    };
</script>

<style scoped></style>
