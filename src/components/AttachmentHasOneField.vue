<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  QUploader,
} from "quasar";
import type {
  TSubmit64FieldProps,
  TSubmit64FileDataValue,
  TSubmit64FilePending,
  TSubmit64ValidationRule,
} from "../models";

// props
const propsComponent = defineProps<TSubmit64FieldProps<"attachmentHasOne">>();

// refs
const errorFromRules = ref<string | null>(null);
const isParsingFile = ref(false);

// functions
function reset() {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = [];
  modelValue.delete = [];
  propsComponent.modelValueOnUpdate(modelValue);
  applyRules();
}
function clear() {
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = [];
  modelValue.delete =
    propsComponent.fieldApi.field.attachmentData?.map((attachment) => {
      return attachment.attachment_id;
    }) ?? [];
  propsComponent.modelValueOnUpdate(modelValue);
  applyRules();
}
function validate() {
  applyRules();
  return isValid();
}
function isValid() {
  return errorFromRules.value === null && isParsingFile.value !== true;
}
function resetValidation() {
  errorFromRules.value = null;
}
async function arrayBufferToBase64(buffer: ArrayBuffer): Promise<string> {
  return new Promise((resolve) => {
    const blob = new Blob([buffer]);
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const dataUrl = (event.target?.result ?? "") as string;
      const [_, base64] = dataUrl.split(",");
      resolve(base64);
    };
    reader.readAsDataURL(blob);
  });
}
async function quasarFileToSubmit64File(file: File) {
  const pendingFile: TSubmit64FilePending = {
    key: `${file.lastModified}${file.name}`,
    size: file.size,
    filename: file.name,
    contentType: file.type,
    base64: await arrayBufferToBase64(await file.arrayBuffer()),
  };
  return pendingFile;
}
async function addPendingFile(files: readonly any[]) {
  if (!files[0]) {
    return;
  }
  isParsingFile.value = true;
  const properFile = await quasarFileToSubmit64File(files[0]);
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = [properFile];
  isParsingFile.value = false;
  propsComponent.modelValueOnUpdate(modelValue);
  applyRules();
}
function removePendingFile(files: readonly any[]) {
  if (!files[0]) {
    return;
  }
  let modelValue = propsComponent.modelValue as TSubmit64FileDataValue;
  modelValue.add = [];
  modelValue.delete = [];
  propsComponent.modelValueOnUpdate(modelValue);
  applyRules();
}

function applyRules() {
  errorFromRules.value = null;
  for (const rule of propsComponent.fieldApi.field
    .computedRules as TSubmit64ValidationRule[]) {
    const ruleResult = rule(propsComponent.modelValue);
    if (typeof ruleResult === "string") {
      errorFromRules.value = ruleResult;
      break;
    }
  }
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(
    validate,
    isValid,
    resetValidation,
    reset,
    clear,
  );
});
</script>

<template>
  <div class="flex column">
    <q-uploader
      v-bind="propsComponent.fieldApi.field.bindings.uploader"
      hide-upload-btn
      :multiple="false"
      :label="propsComponent.fieldApi.field.label"
      :readonly="propsComponent.fieldApi.field.readonly"
      @added="addPendingFile"
      @removed="removePendingFile"
      style="width: inherit"
    >
      <template
        v-for="(component, name) of propsComponent.fieldApi.field.slots"
        v-slot:[name]="slotProps"
      >
        <component
          :is="component"
          v-bind="{
            ...(slotProps ?? {}),
            formApi: propsComponent.formApi,
            fieldApi: propsComponent.fieldApi,
          }"
        />
      </template>
    </q-uploader>
    <div
      v-if="errorFromRules !== null"
      class="q-field--error q-field__bottom text-negative"
    >
      {{ errorFromRules }}
    </div>
  </div>
</template>
