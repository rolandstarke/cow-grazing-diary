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
            <div class="cow-list">
              <CowAvatar
                v-for="n in stall.count"
                :key="n"
                tag="123456789"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CowAvatar from '@/components/CowAvatar.vue'

const stalls = [
  { name: 'Stall 1', count: 10 },
  { name: 'Stall 2', count: 5 },
  { name: 'Field 1', count: 7 },
]
</script>

<style scoped>
.cow-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px 0;
}
</style>