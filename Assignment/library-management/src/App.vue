<template>
  <div class="app" id="app">
    <div class="app_header">
      <h2>Library Management System
        <span class="app_header_date">Friday, 20 December 2019</span>
      </h2>
    </div>
    <div class="app_component">
      <div class="app_component_nav">
          <router-link to="/" class="app_component_nav_link">Home</router-link>
          <router-link to="/about" class="app_component_nav_link">Books</router-link>
      </div>
      <div class="app_component_content">
        <router-view/>
      </div>
    </div>
  </div>
</template>
