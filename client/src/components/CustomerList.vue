<template>
  <div>
    <el-table :data="customer" style="width: 100%" @cell-click="handle">
      <!-- <el-table :data="customer" style="width: 100%" @cell-click="handle" >//클릭이벤트 -->
        <!-- <el-table :data="customer" style="width: 100%"  @cell-click="handleRowClick" >//클릭이벤트 -->
      <!-- <el-table-column v-for="(item, i) in customer" :key="item" prop="id" label="Date" width="180">
        {{ customer[i].id }}
      </el-table-column> -->
      <el-table-column prop="id" label="Id" width="180">
      </el-table-column>
      <el-table-column prop="customer_code" label="Code" width="180">
      </el-table-column>
      <el-table-column prop="customer_name" label="Name">
      </el-table-column>
      <el-table-column prop="representative" label="Representative">
      </el-table-column>
      <el-table-column prop="manager" label="Manager">
      </el-table-column>
     <el-table-column>
      <el-button>수정하기</el-button> 
      </el-table-column>
      <!-- <template slot-scope="scope" v-if="scope.row"> -->
      <!-- <el-button>{{ scope.row.id }}수정하기</el-button> -->
      <!-- </template> -->
      <!-- <el-table-column v-for="(item, i) in customer" :key="item" prop="id">
      <el-button @click="Idget">{{customer[i]}}</el-button>
      </el-table-column> -->
    </el-table>
      <div>
    <!-- <ul>
     <li v-for="(item, i) in customer" :key="item">
      <h1>{{ customer[i].id }} {{ customer[i].customer_code }} {{ customer[i].customer_name }}</h1>
    </li>
    </ul> -->
        
  </div>
  </div>
</template>


<script>
import router from "../router/index.js"
import axios from 'axios';
 export default {

    // name: 'SignupForm',
    data() {
      return {
        // customer : {
        //   code : "",
        //   name : "",
        //   representative :"",
        //   corporate_registration_number :"",
        //   address :"",
        //   manager : "",
        //   create_date : "",
        //   last_update :"",
        //   is_delete :""

        // },
        customer:'',
        page:1,
        pageSize :5,

      };
    },
    mounted() {
              axios
          .get('api/customers').
        then(response => {
          this.customer = response.data;
          //this.customer = JSON.parse(JSON.stringify(response.data));
          //console.log(response.data)
          //console.log(response.data[0]['customer_code']);
          //console.log(response.data);
          //console.log(response.data[0].address)
          console.log(this.customer.length);
          //console.log(this.customer[2]['address']);
        })
        .catch(function(error){
          console.log(error);
        })
    },
  
    methods: {
      handle(row){
        //router.push(customer_update)
        router.push({ name: 'customer_update', params: { id :row.id, code :row.customer_code, name : row.customer_name }})

        
      },
      update(){

      },

    },
  };
</script>
