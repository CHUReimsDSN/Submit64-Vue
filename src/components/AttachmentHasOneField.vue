<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { QUploader, QBtn, QUploaderAddTrigger, QList, QItem, QItemSection, QItemLabel, QSeparator } from "quasar";
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
async function arrayBufferToBase64(buffer: ArrayBuffer) {
  return new Promise((resolve) => {
    const blob = new Blob([buffer]);
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const dataUrl = (event.target?.result ?? '') as string;
      const [_, base64] = dataUrl.split(',')
      resolve(base64);
    }
    reader.readAsDataURL(blob)
  })
}
async function quasarFileToSubmit64File(file: any) {
  return <TSubmit64FilePending>{
    key: file.__key,
    size: file.__size,
    type: file.__type,
    base64: await arrayBufferToBase64(await file.arrayBuffer())
  }
}
async function addPendingFile(files: readonly any[]) {
  if (!files[0]) {
    return
  }
  const properFile = await quasarFileToSubmit64File(files[0]);
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add.push(properFile)
  propsComponent.modelValueOnUpdate(modelValue)
}
async function removePendingFile(files: readonly any[]) {
  if (!files[0]) {
    return;
  }
  const properFile = await quasarFileToSubmit64File(files[0]);
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = modelValue.add.filter((file) => {
    return file.key !== properFile.key
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
function modelValueDeleteIncludesFile(file: TUploadedAttachment) {
  return (propsComponent.modelValue as TSubmit64FileDataValue).delete.findIndex((deleteFile) => {
    return deleteFile === file.id
  }) !== -1
}

// computeds
const attachmentDataIsEmpty = computed(() => {
  return (propsComponent.field.attachmentData ?? []).length === 0
})

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, reset, clear)
});
</script>

<template>
  <q-uploader ref="fieldRef" hide-upload-btn :multiple="false" :label="propsComponent.field.label"
    :bordered="styleConfig.fieldBorderless !== true" :square="styleConfig.fieldSquare" :color="styleConfig.fieldColor"
    :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly" @added="addPendingFile"
    @removed="removePendingFile" style="width: inherit;">
    <template v-slot:header="scope">
      <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
        <div class="col">
          <div class="q-uploader__title">{{ propsComponent.field.label }}</div>
          <div v-if="propsComponent.field.hint" class="caption">{{ propsComponent.field.hint }}</div>
        </div>
        <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" @click="scope.pickFiles" round dense flat>
          <q-uploader-add-trigger />
        </q-btn>
      </div>
    </template>

    <template v-slot:list="scope">
      <div v-if="!attachmentDataIsEmpty" class="flex column">
        <div>Fichiers actuels</div>
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
              <q-btn v-if="!modelValueDeleteIncludesFile(file)" class="gt-xs" size="12px"
                :disable="propsComponent.field.readonly" flat dense round icon="delete"
                @click="removeUploadedFile(file)" />
              <q-btn v-else class="gt-xs" size="12px" :disable="propsComponent.field.readonly" flat dense round
                icon="refresh" @click="keepUploadedFile(file)" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <q-separator v-if="!attachmentDataIsEmpty && scope.files.length > 0" />

      <div v-if="scope.files.length > 0" class="flex column">
        <div>Fichiers à télécharger</div>
        <q-list separator>
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
              <q-btn class="gt-xs" size="12px" :disable="propsComponent.field.readonly" flat dense round icon="delete"
                @click="scope.removeFile(file)" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>

    </template>
  </q-uploader>
</template>
