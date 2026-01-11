<script setup>
import { ref } from 'vue'

// --- Fake sample data ---
const stats = ref({
  cows: 42,
  calves: 8,
  bulls: 3,
  milkTodayLiters: 312,
  tasksDue: 5,
})

const milkWeekly = ref([
  { day: 'Mon', liters: 300 },
  { day: 'Tue', liters: 310 },
  { day: 'Wed', liters: 295 },
  { day: 'Thu', liters: 315 },
  { day: 'Fri', liters: 330 },
  { day: 'Sat', liters: 340 },
  { day: 'Sun', liters: 320 },
])

// If you use a real chart lib (ApexCharts, Chart.js, ECharts etc.)
// you'd convert milkWeekly into chart config.
</script>

<template>
  <v-container fluid>
    <!-- KPI Row -->
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <h3>{{ stats.cows }}</h3>
          <span>Total Cows</span>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <h3>{{ stats.calves }}</h3>
          <span>Calves</span>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <h3>{{ stats.bulls }}</h3>
          <span>Bulls</span>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <h3>{{ stats.milkTodayLiters }} L</h3>
          <span>Milk Today</span>
        </v-card>
      </v-col>
    </v-row>

    <!-- Second Row -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <h3 class="mb-2">Milk Production (Weekly)</h3>
          <!-- placeholder for chart -->
          <div class="text-medium-emphasis">
            <pre>{{ milkWeekly }}</pre>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3 class="mb-2">Tasks</h3>
          <p>{{ stats.tasksDue }} tasks due</p>
          <v-btn variant="flat" >View Tasks</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h3 {
  margin: 0;
}
</style>