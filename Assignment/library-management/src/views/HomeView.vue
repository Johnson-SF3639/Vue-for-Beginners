<template>
  <div class="home_component" v-if="showComponent">
  <div class="home_component_header">
    <button @click="ChangeComponent">New Book</button>
  </div>
    <HomeComponent :details="Details"/>
  </div>
  <div v-else>
    <AddDetailsComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import AddDetailsComponent from '@/components/AddDetailsComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'

import Details from '@/data/details'

export default {
  data () {
    return {
      showComponent: true,
      Details
    }
  },
  components: {
    AddDetailsComponent,
    HomeComponent
  },
  methods: {
    ChangeComponent () {
      this.showComponent = !this.showComponent
    }
  }
}
</script>
