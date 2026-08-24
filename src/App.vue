<template>
      <router-view />
      
  <RequestsView />
</template>

      <script setup>
      </script>

      <style>
      * {
        margin: 0;
          padding: 0;
            box-sizing: border-box;
              font-family: 'Poppins', sans-serif;
              }
              body {
                background: #081b29;
                }
                </style>
                
    
<script setup>
import RequestsView from './views/RequestsView.vue'
</script>
<router-link to="/about">About Us</router-link>
<router-link to="/contact">Contact Us</router-link>
<router-link to="/faq">FAQ</router-link>
