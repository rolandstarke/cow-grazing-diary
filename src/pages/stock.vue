<template>
  <v-container>
    <v-row>
      <v-col
        v-for="stall in stalls"
        :key="stall.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>{{ stall.name }}</v-card-title>
          <v-card-text>
            <div class="cows">
              <span v-for="n in stall.count" :key="n">🐄</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const stalls = [
  { name: 'Stall 1', count: 10 },
  { name: 'Stall 2', count: 5 },
  { name: 'Field 1', count: 7 },
]
</script>

<style scoped>
.cows {
  font-size: 24px;
  line-height: 1.4;
}
</style>