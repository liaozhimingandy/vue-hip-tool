<script setup lang="ts">
import {computed, reactive, ref} from 'vue';
import {notification} from "ant-design-vue";

const [api, contextHolder] = notification.useNotification();
import {fetchDownloadCdasByAdmNo} from '@/graphql';
import {DownloadOutlined} from "@ant-design/icons-vue";
import {Rule} from "ant-design-vue/es/form";

const isEnableSearch = ref<boolean>(true);
const formRef = ref();
const prompt_export = computed(() => isEnableSearch.value === true ? "导出" : "正在导出...")

interface CDAParams {
  admNo: string;
  download_url?: string;
  code?: number;
}

const formState = reactive<CDAParams>({
  admNo: '',
  download_url: '',
  code: 0,
});

const rules: Record<string, Rule[]> = {
  admNo: [
    {required: true, message: '请输入就诊流水号', trigger: 'change'},
    {min: 4, max: 36, message: '长度应该在4到36位之间', trigger: 'blur'},
  ],
}

// 点击导出按钮事件
const onSearch = () => {
  formRef.value
      .validate().then(() => {
    // 重置状态
    formState.code = 0;
    formState.download_url = '';
    isEnableSearch.value = false;
    fetchDownloadCdasByAdmNo(formState.admNo)
        .then(result => {
          if (result.readCdasByAdmNo != undefined) {
            formState.download_url = result.readCdasByAdmNo;
            formState.code = 200;
          } else {
            api.error({
              message: '温馨提示',
              description: result,
            })
          }
        })
        .catch(error => {
          api.error({
            message: '温馨提示',
            description: error,
          })
        })
        .finally(() => isEnableSearch.value = true)
  }).catch(error => {
    console.log('error', error);
  });
};
</script>

<template>
  <contextHolder/>
  <a-flex justify="center" align="center" vertical style="height: 80vh">
    <a-space direction="vertical" align="center">
      <a-result v-if="formState.code == 200"
                status="success"
                title="导出成功"
                sub-title="请根据需要进行下载!."
      >
        <template #extra>
          <a-button type="primary" size="large" :href="formState.download_url">
            <template #icon>
              <DownloadOutlined/>
            </template>
            点击此链接下载
          </a-button>
        </template>
      </a-result>
      <a-result v-show="formState.code==400" status="warning" :title="formState.download_url">
      </a-result>
      <a-form ref="formRef" :model="formState" :rules="rules">
        <a-form-item name="admNo" label="就诊流水号" has-feedback>
          <a-input-search
              v-model:value="formState.admNo"
              placeholder="此处输入就诊流水号"
              :enter-button="prompt_export"
              size="large"
              @search="onSearch"
              style="width: 50vw"
              :disabled="!isEnableSearch"
              :maxLength="36"
              show-count
              :loading="!isEnableSearch"
          />
        </a-form-item>
      </a-form>
    </a-space>
  </a-flex>
</template>

<style scoped>

</style>