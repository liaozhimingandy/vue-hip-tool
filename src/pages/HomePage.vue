<script lang="ts" setup>
import {ref, h, reactive} from 'vue'
import {CScrollbar} from 'c-scrollbar'; // 滚动条
import {
  ApiOutlined,
  FileTextOutlined,
  ClusterOutlined
} from '@ant-design/icons-vue';
import CDAPage from "@/pages/CDAPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";

// 菜单项
const items = ref([
  {
    key: '1',
    icon: () => h(ApiOutlined),
    label: '交互服务',
    title: 'graphql',
  },
  {
    key: '2',
    icon: () => h(FileTextOutlined),
    label: '电子病历共享文档',
    title: 'cdas',
  },

])

// 选中的菜单
const selectedKeys = ref<string[]>(['1'])
// 子组件列表
const components = reactive<any>({
  '1': ServicesPage,
  '2': CDAPage
});
const version = import.meta.env.VITE_APP_VERSION;
const APP_NAME = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <a-layout>
    <a-layout-header :style="{'background-color': 'white'}">
      <a-flex justify="space-between" align="center">
        <ClusterOutlined style="font-size: 28px"/>
        <a-typography-title style="font-size: 20px;">{{ APP_NAME }}</a-typography-title>
        <div>v{{ version }}</div>
      </a-flex>
    </a-layout-header>
    <a-layout>
      <a-layout-sider style="background-color: white">
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="light"
            mode="inline"
            :items="items"
        ></a-menu>
      </a-layout-sider>
      <a-layout-content style="height: 80vh;">
        <c-scrollbar trigger="hover">
          <component :is="components[selectedKeys[0]]"></component>
        </c-scrollbar>
      </a-layout-content>
    </a-layout>
    <a-layout-footer style="text-align: center; background-color: white"> ©2024 </a-layout-footer>
  </a-layout>
</template>

<style scoped>

</style>