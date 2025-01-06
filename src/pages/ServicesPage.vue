<script setup lang="ts">
import {ref, computed, watch, onMounted} from 'vue'
import cloneDeep from 'lodash/cloneDeep';
import {notification} from "ant-design-vue";

const [api, contextHolder] = notification.useNotification();

import {fetchExamplesServices} from '@/graphql';

import template_data from "@/assets/template-service-params.json";

import {
  InfoCircleOutlined,
  DownloadOutlined
} from "@ant-design/icons-vue";

const data = cloneDeep(template_data);
const formRef = ref();
const activeKey = ref(['1']);
const serviceOptions = ref(['三级', '四级乙等', '四级甲等', '五级乙等', '五级甲等']);
const rank = ref<string>('')
const services = computed(() => data.data.filter((item: {
  rank: string;
}) => serviceOptions.value.indexOf(item.rank) <= serviceOptions.value.indexOf(rank.value)));
const download_url = ref('')

const onSubmit = () => {
  fetchExamplesServices({data: services.value})
      .then(result => {
        if (result.examplesServices != undefined) {
          download_url.value = result.examplesServices;
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
};

onMounted(() => {
  const data = localStorage.getItem('rank');
  rank.value = data == null ? '四级甲等' : data;
})

watch(rank, () => {
  localStorage.setItem('rank', rank.value);
});

</script>

<template>
  <contextHolder/>
  <a-flex justify="center" style="margin-top: 10px">
    <a-space direction="vertical" align="center">
      <a-select v-model:value="rank" style="width: 80vw" v-if="download_url == ''">
        <a-select-option v-for="item in serviceOptions" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
      <a-form style="width: 80vw" ref="formRef">
        <a-collapse v-if="download_url == ''" v-model:activeKey="activeKey">
          <a-collapse-panel :key="index+1" v-for="(service, index) in services"
                            :header="`${index+1}-${service.service_name}`">
            <a-form-item v-for="item in service['params']" :label="item.comment"
                         :name="item.comment"
                         :rules="[{required: true, message: `请输入${item.comment}`, trigger: 'change' }, {min: 4, max: 36, message: '长度应该在4到36位之间', trigger: 'blur'}]">
              <a-input v-model:value="item.value" :placeholder="item.path.toString().replace(/xmlns:/g, '')"
                       has-feedback show-count>
                <template #suffix>
                  <a-tooltip :title="item.sql">
                    <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)"/>
                  </a-tooltip>
                </template>
              </a-input>
            </a-form-item>
          </a-collapse-panel>
        </a-collapse>
        <a-form-item v-if="download_url != ''" style="text-align: center; margin-top: 6px">
          <a-result
              status="success"
              title="构建成功!"
              sub-title="请根据需要进行下载!."
          >
            <template #extra>
              <a-button type="primary" size="large" :href="download_url">
                <template #icon>
                  <DownloadOutlined/>
                </template>
                点击此链接下载
              </a-button>
            </template>
          </a-result>
        </a-form-item>
        <a-form-item style="padding: 6px">
          <a-button v-if="download_url == ''" type="primary" html-type="submit" @click="onSubmit" block>提交
          </a-button>
          <a-button v-else type="primary" @click="() => download_url = '' " danger block>重置</a-button>
        </a-form-item>
      </a-form>
    </a-space>
  </a-flex>
</template>

<style scoped>

</style>