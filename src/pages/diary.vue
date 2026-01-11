<script setup>
import { ref, onMounted } from 'vue'
import { db } from './../db'

// state
const todayNote = ref('')
const diary = ref([])

// load entries on startup
async function loadDiary() {
  diary.value = await db.diary
    .orderBy('date')
    .reverse()
    .toArray()
}

// save new entry
async function saveToday() {
  if (!todayNote.value.trim()) return

  const entry = {
    date: new Date().toISOString().slice(0, 10),
    note: todayNote.value.trim(),
    editing: false,
  }

  const id = await db.diary.add(entry)

  diary.value.unshift({ ...entry, id })
  todayNote.value = ''
}

// toggle edit
function toggleEdit(entry) {
  entry.editing = !entry.editing
}

// save edit to DB
async function saveEdit(entry) {
  entry.editing = false
  await db.diary.update(entry.id, { note: entry.note })
}

// initialize
onMounted(loadDiary)
</script>

<template>
  <v-container>
    <!-- Today section -->
    <v-card class="pa-4 mb-4">
      <h3 class="mb-2">
        {{ new Date().toLocaleDateString() }}
      </h3>

      <v-textarea
        v-model="todayNote"
        placeholder="Write what happened today..."
        auto-grow
        rows="4"
      />

      <v-btn class="mt-3" variant="flat" @click="saveToday">
        Save Entry
      </v-btn>
    </v-card>

    <!-- Timeline -->
    <v-timeline density="compact" side="end">
      <v-timeline-item
        v-for="entry in diary"
        :key="entry.id"
      >
        <v-card class="pa-4">
          <small class="text-medium-emphasis">{{ entry.date }}</small>

          <!-- editing mode -->
          <div v-if="entry.editing">
            <v-textarea
              v-model="entry.note"
              auto-grow
              class="mt-2"
            />
            <v-btn size="small" class="mt-2 mr-2" @click="saveEdit(entry)">Save</v-btn>
            <v-btn size="small" variant="text" @click="toggleEdit(entry)">Cancel</v-btn>
          </div>

          <!-- read mode -->
          <div v-else>
            <p class="mt-2">{{ entry.note }}</p>
            <v-btn size="small" variant="text" @click="toggleEdit(entry)">Edit</v-btn>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>