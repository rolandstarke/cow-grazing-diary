<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-sheet
        class="pa-4"
      >
        <div>Farm Diary 🐄🌱</div>
      </v-sheet>

      <v-divider></v-divider>

      
      <v-list>
        <v-list-item to="/diary" title="Diary" />
        <v-list-item to="/stock" title="Stock" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>