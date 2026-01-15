<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { QUploader, QBtn, QUploaderAddTrigger, QList, QItem, QItemSection, QItemLabel, QSeparator } from "quasar";
import type { TFormField, TSubmit64FieldProps, TSubmit64FileDataValue, TSubmit64FilePending, TSubmit64ValidationRule } from "../models";
import { humanStorageSize } from "../utils";

// types
type TUploadedAttachment = Required<TFormField>['attachmentData'][number]

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const form = propsComponent.formApi.form;
const styleConfig = form.formStyle;

// refs
const errorFromRules = ref<string | null>(null)

// functions
function reset() {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = []
  modelValue.delete = []
  propsComponent.modelValueOnUpdate(modelValue)
  applyRules()
}
function clear() {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = []
  modelValue.delete = propsComponent.field.attachmentData?.map((attachment) => {
    return attachment.id
  }) ?? []
  propsComponent.modelValueOnUpdate(modelValue)
  applyRules()
}
function validate() {
  applyRules()
  return isValid()
}
function isValid() {
  return errorFromRules.value === null
}
function resetValidation() {
  errorFromRules.value = null
}
async function arrayBufferToBase64(buffer: ArrayBuffer): Promise<string> {
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
async function quasarFileToSubmit64File(file: File) {
  const pendingFile: TSubmit64FilePending = {
    key: `${file.lastModified}${file.name}`,
    size: file.size,
    filename: file.name,
    contentType: file.type,
    base64: await arrayBufferToBase64(await file.arrayBuffer())
  }
  return pendingFile;
}
async function addPendingFile(files: readonly any[]) {
  if (!files[0]) {
    return
  }
  const properFile = await quasarFileToSubmit64File(files[0]);
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add.push(properFile)
  propsComponent.modelValueOnUpdate(modelValue)
  applyRules()
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
  applyRules()
}
function removeUploadedFile(uploadedAttachment: TUploadedAttachment) {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.delete.push(uploadedAttachment.id)
  propsComponent.modelValueOnUpdate(modelValue)
  applyRules()
}
function keepUploadedFile(uploadedAttachment: TUploadedAttachment) {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.delete = modelValue.delete.filter((attachmentId) => {
    return attachmentId !== uploadedAttachment.id;
  })
  propsComponent.modelValueOnUpdate(modelValue)
  applyRules()
}
function applyRules() {
  errorFromRules.value = null
  for (const rule of propsComponent.rules as TSubmit64ValidationRule[]) {
    const ruleResult = rule(propsComponent.modelValue)
    if (typeof ruleResult === 'string') {
      errorFromRules.value = ruleResult
      break;
    }
  }
}

// computeds
const attachmentDataIsEmpty = computed(() => {
  return (propsComponent.field.attachmentData ?? []).length === 0
})
const modelValueDeleteIds = computed(() => {
  if (!propsComponent.modelValue) {
    return []
  }
  return (propsComponent.modelValue as TSubmit64FileDataValue).delete
})
const alreadyUploadedFileEmpty = computed(() => {
  if (!propsComponent.modelValue) {
    return true
  }
  return ((propsComponent.field.attachmentData?.length ?? 0) === 0)
    || ((propsComponent.field.attachmentData?.length ?? 1 === 1) && (propsComponent.modelValue as TSubmit64FileDataValue).delete.length === 1)
})

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, reset, clear)
});
</script>

<template>
  <div class="flex column">

    <q-uploader hide-upload-btn :multiple="false" :label="propsComponent.field.label"
      :bordered="styleConfig.fieldBorderless !== true" :square="styleConfig.fieldSquare" :color="styleConfig.fieldColor"
      :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly" @added="addPendingFile"
      @removed="removePendingFile" style="width: inherit;">
      <template v-slot:header="scope">
        <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
          <div class="col">
            <div class="q-uploader__title">{{ propsComponent.field.label }}</div>
            <div v-if="propsComponent.field.hint" class="caption">{{ propsComponent.field.hint }}</div>
          </div>
          <q-btn v-if="scope.canAddFiles && alreadyUploadedFileEmpty" type="a" icon="add_box" @click="scope.pickFiles"
            round dense flat>
            <q-uploader-add-trigger />
          </q-btn>
        </div>
      </template>

      <template v-slot:list="scope">
        <div v-if="!attachmentDataIsEmpty" class="flex column">
          <div class="text-weight-medium text-body2">Fichier déjà en ligne</div>
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

              <q-item-section v-if="propsComponent.modelValue" top side>
                <q-btn v-if="!modelValueDeleteIds.includes(file.id)" class="gt-xs" size="12px"
                  :disable="propsComponent.field.readonly" flat dense round icon="delete"
                  @click="removeUploadedFile(file)" />
                <q-btn
                  v-if="modelValueDeleteIds.includes(file.id) && (propsComponent.modelValue as TSubmit64FileDataValue).add.length === 0"
                  class="gt-xs" size="12px" :disable="propsComponent.field.readonly" flat dense round icon="refresh"
                  @click="keepUploadedFile(file)" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-separator v-if="!attachmentDataIsEmpty && scope.files.length > 0" />

        <div v-if="scope.files.length > 0" class="flex column">
          <div class="text-weight-medium text-body2">Fichier à télécharger</div>
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
    <div v-if="errorFromRules !== null" class="q-field--error q-field__bottom text-negative">
      {{ errorFromRules }}
    </div>
  </div>
</template>
