/* eslint-disable import/no-dynamic-require */
<template>
  <div>
    <h1>Project {{$route.params.name}}</h1>
    <v-container>
      <v-row class="text-right">
      <p>
      <Md/>
      </p>
    </v-row>

    </v-container>

  </div>
</template>

<script>
import Md from '../../markdowns/todpole.md';

export default {
  name: 'Project',
  components: { Md },
};
</script>

<style lang="scss">
.text-right {
  text-align: left;
}
</style>
