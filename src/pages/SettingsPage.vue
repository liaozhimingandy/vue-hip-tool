<script setup lang="ts">
import {notification} from "ant-design-vue";

const [api, contextHolder] = notification.useNotification();

const BASE_URL = defineModel<string>('base_url', {default: import.meta.env.VITE_APP_BASE_URL})

const onSave = (v: string) => {
  try {
    new URL(v)
  } catch (e) {
    localStorage.removeItem('APP_BASE_URL');
    api.error({
      message: '温馨提示',
      description: "请输入正确的接口地址",
    })
    return;
  }
  localStorage.setItem('APP_BASE_URL', v);
  api.info({
    message: '温馨提示',
    description: "接口地址保存成功",
  })

};
</script>

<template>
  <contextHolder/>
  <a-flex justify="center" align="center" vertical style="height: 80vh;">
    <a-input-search
        v-model:value="BASE_URL"
        placeholder="此处输入接口地址"
        enter-button="保存"
        size="large"
        @search="onSave"
        style="width: 50%"
    />
  </a-flex>
</template>

<style scoped>

</style>