<template>
    <div class="add_details_component">
      <div class="add_details_component_header">
        <h1>Enter new book details</h1>
      </div>
      <div class="add_details_component_content">
        <form @submit.prevent="onSubmitForm">
        <table cellpadding="15">
          <tr>
            <td><h3>Title of Book : </h3></td>
            <td><input type="text" id="input_box" v-model="addDetails.title" required/></td>
          </tr>
          <tr>
            <td><h3>Author of Book : </h3></td>
            <td><input  type="text" id="input_box" v-model="addDetails.author" required/></td>
          </tr>
          <tr>
            <td><h3>Catagory of Book : </h3></td>
            <td><input  type="text" id="input_box" v-model="addDetails.catagory" required/></td>
          </tr>
          <tr>
            <td><h3>Date Published : </h3></td>
            <td><input  type="date" id="input_box" v-model="addDetails.date" required/></td>
          </tr>
          <tr>
            <td><h3>Description : </h3></td>
            <td><textarea rows="5"  id="input_box" v-model="addDetails.description" required></textarea></td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit">ADD</button></td>
          </tr>
        </table>
      </form>
      </div>
    </div>
  </template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      addDetails: {
        title: '',
        author: '',
        date: '',
        catagory: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addDataActions'
    ]),
    onSubmitForm () {
      const { title, author, date, catagory, description } = this.addDetails
      console.log(date)
      const status = 'Available'
      const addData = {
        add: {
          title,
          author,
          date,
          catagory,
          description,
          status
        }
      }
      this.addDataActions(addData.add)
      this.addDetails = {
        title: '',
        author: '',
        date: '',
        catagory: '',
        description: ''
      }
    }
  }
}
</script>
