<script setup lang="ts">
import { Submit64Form, type DynamicLogicBuilder } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';

// functions
function formEventManager(eventBuilder: DynamicLogicBuilder) {
  eventBuilder.when('Form is ready').then((formApi) => {
    formApi.getSectionByIndex(0)?.setReadonlyState(true)
  });
}
</script>

<template>
  <Submit64Form
    ref="submit64Form"
    resourceName="Article"
    :resourceId="1"
    :getMetadataAndData="Submit64Api.getMetadataAndResource"
    :getAssociationData="Submit64Api.getAssociationData"
    :getSubmitFormData="Submit64Api.getSubmitFormData"
    :eventManager="formEventManager"
  />
</template>
