<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { TSubmit64FieldProps } from "../models";
import { QEditor } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// refs
const fieldRef = ref<InstanceType<typeof QEditor>>();

// functions
function validate() {
  if (!fieldRef.value) {
    return false;
  }
  return true;
}
function isValid() {
  if (!fieldRef.value) {
    return false;
  }
  return true;
}
function resetValidation() {
  return;
}
function onEditorPaste(event: ClipboardEvent) {
  event.preventDefault()
  event.stopPropagation()
  const items = event.clipboardData?.items
  if (!items) {
    return
  }
  for (let i = 0; i < items.length; i++) {
    const item = items[i]!;
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        insertImageInEditor(file)
      }
    }
  }
}
function onEditorDrop(event: DragEvent) {
  event.preventDefault()
  event.stopPropagation()
  const files = event.dataTransfer?.files
  if (!files) {
    return
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i]!;
    if (file.type.startsWith('image/')) {
      if (file) {
        insertImageInEditor(file)
      }
    }
  }
}
function insertImageInEditor(file: File) {
  if (!fieldRef.value) {
    return
  }
  const reader = new FileReader()
  reader.onload = (event: ProgressEvent<FileReader>) => {
    const base64 = event.target?.result
    if (typeof base64 === 'string') {
      const image = new Image()
      image.onload = () => {
        const width = image.width
        const height = image.height
        fieldRef.value?.runCmd(
          "insertHTML",
          `<img src="${base64}" width="${width}" height="${height}" style="max-width: 80%; height: auto;" />`
        )
      }
      image.src = base64
    }
  }
  reader.readAsDataURL(file)
}
function focus() {
  if (!fieldRef.value) {
    return
  }
  fieldRef.value.focus()
}
function unfocus() {
  if (!fieldRef.value) {
    return
  }
  (fieldRef.value.getContentEl() as HTMLElement).blur();
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation, undefined, undefined, focus, unfocus);
});
</script>

<template>
  <q-editor ref="fieldRef" v-bind="propsComponent.field.bindings" :model-value="(propsComponent.modelValue as string)"
    @drop="onEditorDrop" @paste="onEditorPaste" @update:model-value="propsComponent.modelValueOnUpdate" />
</template>
