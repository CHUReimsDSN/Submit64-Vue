<script setup lang="ts">
import { type DynamicLogicBuilder, Submit64Form, type TSubmit64FormProps } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';

const formBindings: TSubmit64FormProps['formBindings'] = {
  fields: {
    string: {
      color: 'amber',
      prefix: 'user',
    },
    datetime: {
      date: {
        todayBtn: true
      }
    }
  }
};

function formEventManager(eventBuilder: DynamicLogicBuilder) {
  eventBuilder.when('Form is ready').then((formApi) => {
    setTimeout(() => {

      formApi.getFieldByName('color')?.addBindings({
        icon: {
          name: 'rocket'
        }
      })
    }, 1000 )
  })
}
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <Submit64Form ref="formRef" :eventManager="formEventManager" resourceName="Article" :resourceId="1"
      :getMetadataAndData="Submit64Api.getMetadataAndResource" :getAssociationData="Submit64Api.getAssociationData"
      :getSubmitFormData="Submit64Api.getSubmitFormData" :formBindings="formBindings" />
  </q-page>
</template>
