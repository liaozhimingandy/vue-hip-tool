<script lang="ts" setup>
</script>

<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary"><router-link :to="{name: 'home'}">Back Home</router-link></a-button>
    </template>
  </a-result>
</template>

<style scoped>
</style>