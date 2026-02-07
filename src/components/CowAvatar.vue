<template>
  <div class="cow-avatar">
    <img :src="image" alt="" />

    <div class="tag-overlay">
      {{ tag.slice(-3) }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tag: String,
  image: String
})
</script>

<style scoped>
.cow-avatar {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.cow-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tag-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.55);
  color: white;
  padding: 2px 5px;
  font-size: 0.7rem;
  border-radius: 4px;
}
</style>