<template>
  <div class="home_component_content">
    <table cellpadding="25">
      <tr id="table_row">
        <td>No of books</td>
        <td id="table_data">{{noOfBooks}}</td>
      </tr>
      <tr>
        <td>No of books available</td>
        <td id="table_data">{{noOfBooksAvailable}}</td>
      </tr>
      <tr id="table_row">
        <td>Issued books count</td>
        <td id="table_data">{{issuedBooksCount}}</td>
      </tr>
      <tr>
        <td>Lost books count</td>
        <td id="table_data">{{lostBooksCount}}</td>
      </tr>
      <tr id="table_row">
        <td>Newly added book</td>
        <td id="table_data">{{newlyAddedBook}}</td>
      </tr>
      <tr>
        <td>Upcoming books</td>
        <td id="table_data">{{upcomingBooks}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'noOfBooks',
      'issuedBooksCount',
      'noOfBooksAvailable',
      'lostBooksCount',
      'newlyAddedBook',
      'upcomingBooks'
    ])
  }
}
</script>
