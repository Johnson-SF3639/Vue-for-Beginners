<template>
  <div class="details_component">
    <div class="details_component_header">
    </div>
    <div class="details_component_content">
      <table cellpadding="15">
        <tr>
          <td>Title of Book : </td>
          <td>{{detail.title}}</td>
        </tr>
        <tr>
          <td>Author of Book : </td>
          <td>{{detail.author}}</td>
        </tr>
        <tr>
          <td>Date Published : </td>
          <td>{{detail.date}}</td>
        </tr>
        <tr>
          <td>Description : </td>
        </tr>
        <tr>
          <td colspan="2">{{detail.description}}</td>
        </tr>
        <tr>
          <td></td>
          <td><button @click="ShowMethod(detail)" disabled>Book</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: Object,
    ShowMethod: Function
  }
}
</script>
