<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {notification} from "ant-design-vue";

const [api, contextHolder] = notification.useNotification();
const value = ref<string>('');

onMounted(()=>{
  const data = localStorage.getItem('APP_BASE_URL');
  value.value = data == null? '' : data
})

const onSearch = (v: string) => {
  const urlPattern =  /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:\d{1,5})?(\/[^\s]*)?$/;
  if (!urlPattern.test(v)) {
    api.error({
      message: '温馨提示',
      description: "请输入正确的接口地址",
    })
    return;
  } else {
    localStorage.setItem('APP_BASE_URL', v);
    api.info({
      message: '温馨提示',
      description: "接口地址保存成功",
    })
  };

};
</script>

<template>
  <contextHolder/>
  <a-flex justify="center" align="center" vertical style="height: 80vh;">
    <a-input-search
        v-model:value="value"
        placeholder="此处输入接口地址"
        enter-button="保存"
        size="large"
        @search="onSearch"
        style="width: 50%"
    />
  </a-flex>
</template>

<style scoped>

</style>