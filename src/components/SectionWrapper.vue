<script setup lang="ts">
import { getCurrentInstance, onMounted, watch } from "vue";
import type {
  TSubmit64FieldWrapperComponent,
  TSubmit64SectionWrapperApi,
  TSubmit64SectionWrapperComponent,
  TSubmit64SectionWrapperProps,
} from "../models";
import { callAllEvents } from "../utils";

// props
const propsComponent = defineProps<TSubmit64SectionWrapperProps>();

// consts
const fields: Map<string, TSubmit64FieldWrapperComponent> = new Map();
const sectionApi: TSubmit64SectionWrapperApi = {
  reset,
  clear,
  validate,
  isValid,
  hide,
  unhide,
  resetValidation,
  getDataRef,
  getFields
}

// functions
function setupFields() {
  propsComponent.section.fields.forEach((field) => {
    const fieldName = field.metadata.field_name;
    const fieldFound = propsComponent.formApi.getField(fieldName);
    if (!fieldFound) {
      return;
    }
    fields.set(fieldName, fieldFound);
  });
}
function reset() {
  fields.forEach((field) => {
    field.reset();
  });
  callAllEvents(propsComponent.section.events.onReset);
}
function clear() {
  fields.forEach((field) => {
    field.clear();
  });
  callAllEvents(propsComponent.section.events.onClear);
}
function hide() {
  const sectionRef = propsComponent.privateFormApi
    .getFormRef()
    .value?.sections.find((sectionFind) => {
      return (
        sectionFind.name === propsComponent.section.name ||
        sectionFind.name === propsComponent.sectionIndex.toString()
      );
    });
  if (!sectionRef) {
    return;
  }
  fields.forEach((field) => {
    field.hide();
  });
  sectionRef.hidden = true;
  callAllEvents(propsComponent.section.events.onHide);
}
function unhide() {
  const sectionRef = propsComponent.privateFormApi
    .getFormRef()
    .value?.sections.find((sectionFind) => {
      return (
        sectionFind.name === propsComponent.section.name ||
        sectionFind.name === propsComponent.sectionIndex.toString()
      );
    });
  if (!sectionRef) {
    return;
  }
  fields.forEach((field) => {
    field.unhide();
  });
  sectionRef.hidden = false;
  callAllEvents(propsComponent.section.events.onUnhide);
}
function validate() {
  let isValid = true;
  fields.forEach((field) => {
    if (!field.validate()) {
      isValid = false;
      return
    }
  });
  callAllEvents(propsComponent.section.events.onValidated);
  return isValid;
}
function isValid() {
  let isValid = true;
  fields.forEach((field) => {
    if (!field.isValid()) {
      isValid = false;
      return;
    }
  });
  return isValid;
}
function resetValidation() {
  fields.forEach((field) => {
    field.resetValidation();
  });
}
function getDataRef() {
  return propsComponent.privateFormApi.getFormRef().value?.sections.find((section) => {
    return section.name === propsComponent.section.name || section.name === propsComponent.sectionIndex.toString()
  })
}
function getFields() {
  return fields
}

// exposes
defineExpose(sectionApi);

// watchs
watch(
  () => (propsComponent.section.events.onIsValid ? isValid() : null),
  (newValue) => {
    if (newValue) {
      callAllEvents(propsComponent.section.events.onIsValid);
    }
  }
);

// lifeCycle
onMounted(() => {
  const proxyInstanceRef = getCurrentInstance()?.exposed;
  if (proxyInstanceRef) {
    propsComponent.registerRef(
      propsComponent.section.name ?? propsComponent.sectionIndex.toString(),
      proxyInstanceRef as TSubmit64SectionWrapperComponent
    );
  }
  setupFields();
});
</script>

<template>
  <div
    class="flex column"
    :class="propsComponent.section.hidden ? 'submit64-section-hidden' : ''"
  >
    <Component
      v-if="propsComponent.section.beforeComponent"
      :is="propsComponent.section.beforeComponent"
      :section="propsComponent.section"
      :formApi="propsComponent.formApi"
      :sectionApi="sectionApi"
    />
    <Component
      :is="propsComponent.section.mainComponent"
      :section="propsComponent.section"
      :sectionApi="sectionApi"
      :formApi="propsComponent.formApi"
    />
    <Component
      v-if="propsComponent.section.afterComponent"
      :is="propsComponent.section.afterComponent"
      :field="propsComponent.section"
      :formApi="propsComponent.formApi"
      :sectionApi="sectionApi"
    />
  </div>
</template>

<style>
.submit64-section-hidden {
  opacity: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
}
</style>
