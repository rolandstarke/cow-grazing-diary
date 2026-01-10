<template>
  <v-container>
    <!-- Diary Entries -->
    <div v-for="entry in diaryEntries" :key="entry.id" class="mb-4">
      <v-card>
        <v-card-title>{{ entry.date }}</v-card-title>
        <v-card-text>
          <v-icon left v-if="entry.icon">{{ entry.icon }}</v-icon>
          {{ entry.note }}
        </v-card-text>
      </v-card>
    </div>

    <!-- Floating Add Button -->
    <v-fab
      icon="mdi-plus"
      location="bottom right"
      size="large"
      color="primary"
      app
      @click="showDialog = true"
    />

    <!-- Add Note Dialog -->
    <v-dialog v-model="showDialog" max-width="400px">
      <v-card>
        <v-card-title>Add Diary Entry</v-card-title>
        <v-card-text>
          <v-textarea
            label="Note"
            v-model="newNote"
            rows="3"
          />

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="addEntry">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const diaryEntries = ref([
  { id: 1, date: '2026-01-10', note: 'Brought 10 cows to Field 1', icon: 'mdi-cow' },
  { id: 2, date: '2026-01-09', note: 'Fed all cows in Stall 2', icon: 'mdi-food-apple' },
])

// Dialog state
const showDialog = ref(false)
const newNote = ref('')
const newIcon = ref('')

// Add new entry
const addEntry = () => {
  if (!newNote.value) return
  diaryEntries.value.unshift({
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    note: newNote.value,
    icon: newIcon.value || null,
  })
  newNote.value = ''
  newIcon.value = ''
  showDialog.value = false
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
</style>


