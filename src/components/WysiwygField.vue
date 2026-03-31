<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { TSubmit64FieldProps } from "../models";
import { type QEditor, useQuasar, type QEditorProps } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const $q = useQuasar();
const form = propsComponent.formApi.form;
const styleConfig = form.formStyle;
const toolbar: QEditorProps["toolbar"] = [
  [
    {
      label: $q.lang.editor.align,
      icon: $q.iconSet.editor.align,
      fixedLabel: true,
      list: "only-icons",
      options: ["left", "center", "right", "justify"],
    },
  ],
  ["bold", "italic", "strike", "underline", "subscript", "superscript"],
  ["token", "hr", "link", "custom_btn"],
  ["print", "fullscreen"],
  [
    {
      label: $q.lang.editor.formatting,
      icon: $q.iconSet.editor.formatting,
      list: "no-icons",
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"],
    },
    {
      label: $q.lang.editor.fontSize,
      icon: $q.iconSet.editor.fontSize,
      fixedLabel: true,
      fixedIcon: true,
      list: "no-icons",
      options: [
        "size-1",
        "size-2",
        "size-3",
        "size-4",
        "size-5",
        "size-6",
        "size-7",
      ],
    },
    {
      label: $q.lang.editor.defaultFont,
      icon: $q.iconSet.editor.font,
      fixedIcon: true,
      list: "no-icons",
      options: [
        "default_font",
        "arial",
        "arial_black",
        "comic_sans",
        "courier_new",
        "impact",
        "lucida_grande",
        "times_new_roman",
        "verdana",
      ],
    },
    "removeFormat",
  ],
  ["quote", "unordered", "ordered", "outdent", "indent"],

  ["undo", "redo"],
  ["viewsource"],
];
const fonts: QEditorProps["fonts"] = {
  arial: "Arial",
  arial_black: "Arial Black",
  comic_sans: "Comic Sans MS",
  courier_new: "Courier New",
  impact: "Impact",
  lucida_grande: "Lucida Grande",
  times_new_roman: "Times New Roman",
  verdana: "Verdana",
};

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

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(validate, isValid, resetValidation);
});
</script>

<template>
  <q-editor v-if="propsComponent.modelValue" ref="fieldRef" :model-value="(propsComponent.modelValue as string)"
    v-on:update:model-value="
      (value: unknown) => propsComponent.modelValueOnUpdate(value)
    " :toolbar="toolbar" :fonts="fonts" :placeholder="propsComponent.field.label" :square="styleConfig.fieldSquare"
    :dense="styleConfig.fieldDense" :class="propsComponent.field.cssClass" :readonly="propsComponent.field.readonly"
    @paste="onEditorPaste" @drop="onEditorDrop" />
</template>
