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
    title: '交互服务',
  },
  {
    key: '2',
    icon: () => h(FileTextOutlined),
    label: '电子病历共享文档',
    title: '电子病历共享文档',
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
// 是否已经折叠
const collapsed = ref(false);

</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header :style="{'background-color': 'white'}">
      <a-row justify="center">
        <a-col :xs="0" :sm="0" :md="4" :lg="4" :xl="4">
          <ClusterOutlined style="font-size: 28px"/>
        </a-col>
        <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" style="text-align: center">
          <a-typography-title style="font-size: 20px;">{{ APP_NAME }}</a-typography-title>
        </a-col>
        <a-col :xs="0" :sm="0" :md="4" :lg="4" :xl="4" style="text-align: right">
          <div>v{{ version }}</div>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible breakpoint="lg">
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="light"
            mode="inline"
            :items="items"
        >
        </a-menu>
      </a-layout-sider>
      <a-layout-content style="height: 80vh;">
        <c-scrollbar trigger="hover">
          <component :is="components[selectedKeys[0]]"></component>
        </c-scrollbar>
      </a-layout-content>
    </a-layout>
    <a-layout-footer style="text-align: center; background-color: white"> ©2024</a-layout-footer>
  </a-layout>
</template>

<style scoped>

</style>