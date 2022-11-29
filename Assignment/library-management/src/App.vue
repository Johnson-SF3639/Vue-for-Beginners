<template>
  <div class="app" id="app">
    <div class="app_header">
      <h2>Library Management System
        <span class="app_header_date">{{today}}</span>
      </h2>
    </div>
    <div class="app_component">
      <div class="app_component_nav">
          <router-link to="/" class="app_component_nav_link">Home</router-link>
          <router-link to="/books" class="app_component_nav_link">Books</router-link>
      </div>
      <div class="app_component_content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      today: ''
    }
  },
  mounted () {
    var option1 = { weekday: 'long' }
    var option2 = { day: 'numeric' }
    var option3 = { month: 'long' }
    var option4 = { year: 'numeric' }
    const dates = new Date()
    const format1 = (dates.toLocaleDateString('en-Us', option1))
    const format2 = (dates.toLocaleDateString('en-Us', option2))
    const format3 = (dates.toLocaleDateString('en-Us', option3))
    const format4 = (dates.toLocaleDateString('en-Us', option4))
    const day = format1 + ', ' + format2 + ' ' + format3 + ' ' + format4
    this.today = day
  }
}
</script>
