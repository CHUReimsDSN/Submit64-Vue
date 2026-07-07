<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { TSubmit64FieldProps } from "../models";
import { IconSet, Lang, QEditor } from "quasar";

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
  event.preventDefault();
  event.stopPropagation();
  const items = event.clipboardData?.items;
  if (!items) {
    return;
  }
  for (let i = 0; i < items.length; i++) {
    const item = items[i]!;
    if (item.type.startsWith("image/")) {
      const file = item.getAsFile();
      if (file) {
        insertImageInEditor(file);
      }
    }
  }
}
function onEditorDrop(event: DragEvent) {
  event.preventDefault();
  event.stopPropagation();
  const files = event.dataTransfer?.files;
  if (!files) {
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i]!;
    if (file.type.startsWith("image/")) {
      if (file) {
        insertImageInEditor(file);
      }
    }
  }
}
function insertImageInEditor(file: File) {
  if (!fieldRef.value) {
    return;
  }
  const reader = new FileReader();
  reader.onload = (event: ProgressEvent<FileReader>) => {
    const base64 = event.target?.result;
    if (typeof base64 === "string") {
      const image = new Image();
      image.onload = () => {
        const width = image.width;
        const height = image.height;
        fieldRef.value?.runCmd(
          "insertHTML",
          `<img src="${base64}" width="${width}" height="${height}" style="max-width: 80%; height: auto;" />`,
        );
      };
      image.src = base64;
    }
  };
  reader.readAsDataURL(file);
}
function focus() {
  if (!fieldRef.value) {
    return;
  }
  fieldRef.value.focus();
}
function unfocus() {
  if (!fieldRef.value) {
    return;
  }
  (fieldRef.value.getContentEl() as HTMLElement).blur();
}
function getDefaultToolbar(): QEditor["toolbar"] {
  return [
    [
      {
        label: Lang.props.editor.align,
        icon: IconSet.props.editor.align,
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
        label: Lang.props.editor.formatting,
        icon: IconSet.props.editor.formatting,
        list: "no-icons",
        options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"],
      },
      {
        label: Lang.props.editor.fontSize,
        icon: IconSet.props.editor.fontSize,
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
        label: Lang.props.editor.defaultFont,
        icon: IconSet.props.editor.font,
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
}

// lifeCycle
onMounted(() => {
  propsComponent.registerBehaviourCallbacks(
    validate,
    isValid,
    resetValidation,
    undefined,
    undefined,
    focus,
    unfocus,
  );
});
</script>

<template>
  <q-editor
    ref="fieldRef"
    :toolbar="getDefaultToolbar()"
    v-bind="propsComponent.field.bindings"
    :model-value="propsComponent.modelValue as string"
    @drop="onEditorDrop"
    @paste="onEditorPaste"
    @update:model-value="propsComponent.modelValueOnUpdate"
  />
</template>
