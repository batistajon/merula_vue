<template>
  <mdb-container fluid>
    <router-view/>
  </mdb-container>
</template>

<script>
import {mdbContainer} from 'mdbvue';

export default {
  name: 'App',
  components: {
    mdbContainer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


</style>
