<template>
  <div class="books_component" v-if="changeShowDetails">
    <div class="books_component_header">
      <button>Fictional</button>
    </div>
    <div class="books_component_content">
      <table border="1" cellpadding="15">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Details</th>
        </tr>
        <tr v-for="(data, index) in details" :key="index">
          <td>{{data.title}}</td>
          <td>{{data.author}}</td>
          <td>{{data.catagory}}</td>
          <td><button @click="changeShowMethod(data)">More...</button></td>
        </tr>
      </table>
    </div>
  </div>
  <div v-else>
    <DetailsComponent :detail="currentDetail" :ShowMethod="changeShowMethod" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DetailsComponent from '@/components/DetailsComponent.vue'

export default {
  data () {
    return {
      changeShowDetails: true,
      currentDetail: []
    }
  },
  components: {
    DetailsComponent
  },
  methods: {
    changeShowMethod (data) {
      this.currentDetail = data
      this.changeShowDetails = !this.changeShowDetails
    }
  },
  computed: {
    ...mapState([
      'details'
    ])
  }
}
</script>
