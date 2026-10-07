<script setup lang="ts">
import { Submit64Form, type TSubmit64FormApi, type TSubmit64FormProps } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';
import { nextTick, onMounted, ref } from 'vue';

// consts
const intervalChange = 1_000;
const formBindings: TSubmit64FormProps['formBindings'] = {
  fields: {
    string: {
      color: 'amber',
      prefix: 'user',
    },
    datetime: {
      date: {
        todayBtn: true,
      },
    },
  },
};

// refs
const formRef = ref<TSubmit64FormApi>();
const refColorIcon = ref(false);

// lifeCycle
onMounted(() => {
  void nextTick(() => {
    setInterval(() => {
      if (!formRef.value) {
        return;
      }
      refColorIcon.value = !refColorIcon.value;
      formRef.value.getFieldByName<'color'>('color')?.setBindings({
        icon: {
          name: refColorIcon.value ? 'star' : 'people',
        },
      });
    }, intervalChange);
  });
});
</script>

<template>
  <Submit64Form
    ref="formRef"
    resourceName="Article"
    :resourceId="1"
    :getMetadataAndData="Submit64Api.getMetadataAndResource"
    :getAssociationData="Submit64Api.getAssociationData"
    :getSubmitFormData="Submit64Api.getSubmitFormData"
    :formBindings="formBindings"
  />
</template>
