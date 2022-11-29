<template>
  <div class="books_component" v-if="changeShowDetails">
    <div class="books_component_header">
      <select v-model="selectOption" @change="changeTable()">
        <option value="all">All</option>
        <option v-for="(data, index) in catagoryDetails" :value="data" :key="index">{{data}}</option>
      </select>
    </div>
    <div class="books_component_content">
      <table cellpadding="15">
        <tr id="table_head">
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Details</th>
        </tr>
        <tr v-for="(data, index) in listArray" :key="index">
          <td>{{data.title}}</td>
          <td>{{data.author}}</td>
          <td>{{data.catagory}}</td>
          <td><button  id="table_button" @click="changeShowMethod(data, index)">More...</button></td>
        </tr>
      </table>
    </div>
  </div>
  <div v-else>
    <DetailsComponent :detail="currentDetail" :index="index"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DetailsComponent from '@/components/DetailsComponent.vue'

export default {
  data () {
    return {
      changeShowDetails: true,
      currentDetail: [],
      index: '',
      selectOption: 'all',
      listArray: []
    }
  },
  components: {
    DetailsComponent
  },
  methods: {
    changeShowMethod (data, index) {
      this.currentDetail = data
      this.index = index
      this.changeShowDetails = !this.changeShowDetails
    },
    changeTable () {
      if (this.selectOption === 'all') {
        this.listArray = this.details
        return this.listArray
      } else {
        this.listArray = this.details.filter((item) => {
          return this.selectOption === item.catagory
        })
      }
    }
  },
  computed: {
    ...mapState([
      'details'
    ]),
    ...mapGetters([
      'catagoryDetails'
    ])
  },
  mounted () {
    this.changeTable()
  }
}
</script>
