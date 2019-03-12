<template>
  <div class="hello">
   ThisisHelloword
     {{data1}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      data1: '12312'
    };
  },
  methods: {},

  beforeCreate () {
    let myHeaders = new Headers({
     'Content-Type': 'application/json; charset=UTF-8'
    });

    fetch('http://localhost:3000/api/seller', {
      method: 'GET',
      // credentials: "include",
      headers: myHeaders,
      mode: 'cors'
    })
      .then(function (response) {
        console.log(response);
         return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
