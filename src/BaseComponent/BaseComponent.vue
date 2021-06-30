<template>
  <div class="base"> 
    <card-page />
  </div>
</template>

<script>
import CardPage from '../components/CardPage.vue';

export default {
  name: 'BaseComponent',
  components: {
    CardPage
  },
  data () {
    return {
      msg: 'Ola mundo'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
