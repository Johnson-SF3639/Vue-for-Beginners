<template>
  <div class="">
    <PetTableVue species="Cats" :pets="cats"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTableVue from '@/component/PetTable.vue'

export default {
  components: {
    PetTableVue
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
