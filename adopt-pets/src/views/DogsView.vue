<template>
  <div class="">
    <PetTableVue species="Dogs" :pets="dogs"/>
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
      'dogs'
    ])
  }
}
</script>
