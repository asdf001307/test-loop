<template>
<!--  <div id="tabla">-->
<!--    <div class="container  h-100">-->
<!--      <div class="row h-100 justify-content-center align-items-center">-->
<!--        <table class="table table-striped table-bordered table-hover text-center">-->
<!--          <thead class="thead-dark">-->
<!--          <tr>-->
<!--            <th>Name</th>-->
<!--            <th>Username</th>-->
<!--            <th>Email</th>-->
<!--            <th>Phone</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="customer in customers" :key="customer.id">-->
<!--            <td>{{ customer.id }}</td>-->
<!--            <td>{{customer.ci}}</td>-->
<!--            <td>{{customer.costomer_name}}</td>-->
<!--            <td>{{customer.costomer_code}}</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--&lt;!&ndash;        {{ customer }}&ndash;&gt;-->
<!--&lt;!&ndash;        {{ customer[0] }}<br>&ndash;&gt;-->
<!--&lt;!&ndash;        {{ customer[1] }}<br>&ndash;&gt;-->
<!--        {{ customer }}<br>-->
<!--&lt;!&ndash;        {{ customer[0].id}}<br>&ndash;&gt;-->
<!--&lt;!&ndash;        {{customer[0]['id']}}&ndash;&gt;-->
<!--        <button @click="Check()">dd</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div>
    {{ customer[0] }}
            <button @click="Check()">dd</button>
  </div>
</template>

<script>
import axios from 'axios';
 export default {

    // name: 'SignupForm',
    data() {
      return {
        customer : {
          code : "",
          name : "",
          representative :"",
          corporate_registration_number :"",
          address :"",
          manager : "",
          create_date : "",
          last_update :"",
          is_delete :""

        },

      };
    },
    methods: {
      Check() {
        axios
          .get('api/customers').
        then(response => {
          this.customer = response.data;
          //console.log(response.data)
          //console.log(response.data[0]['customer_code']);
          console.log(response.data);
          //console.log(response.data[0].address)

          console.log(this.customer);
        })
        .catch(function(error){
          console.log(error);
        })
      },

    },
  };
</script>
