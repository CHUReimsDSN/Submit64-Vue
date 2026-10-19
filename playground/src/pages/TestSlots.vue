<script setup lang="ts">
import { Submit64Form, type TFormSlots } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';
import { type DeepPartial } from 'quasar';
import StarIcon from '@/components/StarIcon.vue';

// consts
const slotsAsProps: DeepPartial<TFormSlots> = {
  fields: {
    color: {
      prepend: StarIcon
    },
    byName: {
      label: {
        append: StarIcon
      }
    }
  }
}
</script>

<template>
  <Submit64Form
    resourceName="Article"
    :resourceId="1"
    :getMetadataAndData="Submit64Api.getMetadataAndResource"
    :getAssociationData="Submit64Api.getAssociationData"
    :getSubmitFormData="Submit64Api.getSubmitFormData"
    :formSlots="slotsAsProps"
  >
    <template #section-0-wrapper-before>
      <StarIcon color="orange">
        <q-tooltip> section-0-wrapper-before </q-tooltip>
      </StarIcon>
    </template>

    <template #field-label-wrapper-before>
      <StarIcon color="red">
        <q-tooltip> field-label-wrapper-before </q-tooltip>
      </StarIcon>
    </template>

    <template #field-label-after>
      <StarIcon color="green">
        <q-tooltip> field-label-after </q-tooltip>
      </StarIcon>
    </template>

    <template #field-label-wrapper-after>
      <StarIcon color="blue">
        <q-tooltip> field-label-wrapper-after </q-tooltip>
      </StarIcon>
    </template>

    <template #field-next_date-append>
      <StarIcon color="purple">
        <q-tooltip> field-next_date-append </q-tooltip>
      </StarIcon>
    </template>

    <template #form-actions>
      <StarIcon color="yellow">
        <q-tooltip> form-actions </q-tooltip>
      </StarIcon>
    </template>
  </Submit64Form>
</template>
