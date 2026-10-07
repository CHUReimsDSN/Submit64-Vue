<script setup lang="ts">
import { type DynamicLogicBuilder, Submit64Form } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';
import { ref } from 'vue';

// refs
const formIsReady = ref(false)
const fieldIsHidden = ref(false)

// functions
function formEventManager(eventBuilder: DynamicLogicBuilder) {
  eventBuilder.when('Form is ready').then(() => {
    formIsReady.value = true
  });
  eventBuilder.when('Field is valid', { fieldName: 'color'}).then((formApi) => {
    const fieldApi = formApi.getFieldByName<'color'>('color')
    if (!fieldApi) {
      return
    }
    fieldApi.hide()
    fieldIsHidden.value = fieldApi.field.hidden
  })
}
</script>

<template>
  <div class="flex column">
    <div>Form is ready : {{ formIsReady }} / true</div>
    <div>Field is hidden : {{ fieldIsHidden }} / true</div>
  </div>
  <Submit64Form
    resourceName="Article"
    :resourceId="1"
    :eventManager="formEventManager"
    :getMetadataAndData="Submit64Api.getMetadataAndResource"
    :getAssociationData="Submit64Api.getAssociationData"
    :getSubmitFormData="Submit64Api.getSubmitFormData"
  />
</template>
