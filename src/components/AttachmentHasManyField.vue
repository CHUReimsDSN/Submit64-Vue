<script setup lang="ts">
import { onMounted, ref } from "vue";
import { QUploader } from "quasar";
import type { TFormField, TSubmit64FieldProps, TSubmit64FileDataValue, TSubmit64FilePending } from "../models";
import { humanStorageSize } from "../utils";

// types
type TUploadedAttachment = Required<TFormField>['attachmentData'][number]

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const form = propsComponent.formApi.form;
const styleConfig = form.formStyle;

// refs
const fieldRef = ref<InstanceType<typeof QUploader>>();

// functions
function reset() {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = []
  modelValue.delete = []
  propsComponent.modelValueOnUpdate(modelValue)
}
function clear() {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = []
  modelValue.delete = propsComponent.field.attachmentData?.map((attachment) => {
    return attachment.id
  }) ?? []
  propsComponent.modelValueOnUpdate(modelValue)
}
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return true
  // TODO
}
function isValid() {
  if (!fieldRef.value) {
    return false
  }
  return true
  // TODO
}
function resetValidation() {
  if (!fieldRef.value) {
    return
  }
  // TODO
}
function addPendingFile(files: readonly any[]) {
  const properFiles = files as TSubmit64FilePending[];
  if (!properFiles) {
    return;
  }
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  properFiles.forEach((file) => {
    modelValue.add.push(file)
  })
  propsComponent.modelValueOnUpdate(modelValue)
}
function removePendingFile(files: readonly any[]) {
  const properFiles = files as TSubmit64FilePending[];
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = modelValue.add.filter((file) => {
    return !properFiles.map((pf => pf.key)).includes(file.key)
  })
  propsComponent.modelValueOnUpdate(modelValue)
}
function removeUploadedFile(uploadedAttachment: TUploadedAttachment) {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.delete.push(uploadedAttachment.id)
  propsComponent.modelValueOnUpdate(modelValue)
}
function keepUploadedFile(uploadedAttachment: TUploadedAttachment) {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.delete = modelValue.delete.filter((attachmentId) => {
    return attachmentId !== uploadedAttachment.id;
  })
  propsComponent.modelValueOnUpdate(modelValue)
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, reset, clear)
});
</script>

<template>
  <q-uploader ref="fieldRef" hide-upload-btn :multiple="false" :label="propsComponent.field.label"
    :bordered="styleConfig.fieldBorderless !== true" :square="styleConfig.fieldSquare" :color="styleConfig.fieldColor"
    :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly" @added="addPendingFile"
    @removed="removePendingFile">
    <template v-slot:header="scope">
      <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
        <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
        <div class="col">
          <div class="q-uploader__title">{{ propsComponent.field.label }}</div>
          <div class="q-uploader__subtitle">Total : {{ scope.uploadSizeLabel }}</div>
        </div>
        <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" @click="scope.pickFiles" round dense flat>
          <q-uploader-add-trigger />
        </q-btn>
      </div>
    </template>


    <template v-slot:list="scope">
      <q-list separator>

        <q-item v-for="file in propsComponent.field.attachmentData ?? []" :key="file.id">
          <q-item-section>
            <q-item-label class="full-width ellipsis">
              {{ file.filename }}
            </q-item-label>

            <q-item-label caption>
              {{ humanStorageSize(file.size) }}
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="removeUploadedFile(file)" />
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item v-for="file in scope.files" :key="file.__key">
          <q-item-section>
            <q-item-label class="full-width ellipsis">
              {{ file.name }}
            </q-item-label>

            <q-item-label caption>
              {{ file.__sizeLabel }}
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="scope.removeFile(file)" />
          </q-item-section>
        </q-item>

      </q-list>
    </template>
  </q-uploader>
</template>
