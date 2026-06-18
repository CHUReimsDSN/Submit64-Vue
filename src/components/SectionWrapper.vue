<script setup lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  markRaw,
  nextTick,
  onMounted,
  ref,
  useSlots,
  watch,
  type WatchStopHandle,
} from "vue";
import type {
  TSubmit64FieldApi,
  TSubmit64SectionApi,
  TSubmit64SectionWrapperProps,
} from "../models";
import { Utils } from "../utils";

// props
const propsComponent = defineProps<TSubmit64SectionWrapperProps>();

// vars
let stopWatchIsValid: WatchStopHandle | null = null;
let stopWatchIsInvalid: WatchStopHandle | null = null;
let stopWatchIsUpdated: WatchStopHandle | null = null;

// consts
const slots = useSlots();
const sectionApi: TSubmit64SectionApi = {
  softReset,
  reset,
  clear,
  validate,
  isValid,
  isInvalid,
  hide,
  unhide,
  resetValidation,
  getFields,
  setReadonlyState,
  setCssClass,
  setIcon,
  setLabel,
  tryFocusFirst,
  tryUnfocus,
  section: propsComponent.section,
};

// refs
const fields = ref<Map<string, TSubmit64FieldApi>>(new Map());

// functions
function setupFields() {
  propsComponent.section.fields.forEach((field) => {
    const fieldName = field.metadata.field_name;
    const fieldFound = propsComponent.formApi.getFieldByName(fieldName);
    if (!fieldFound) {
      return;
    }
    fields.value.set(fieldName, fieldFound);
  });
}
function softReset() {
  fields.value.forEach((field) => {
    field.softReset();
  })
}
function reset() {
  fields.value.forEach((field) => {
    field.reset();
  });
  Utils.callAllEvents(propsComponent.section.events.onReset);
}
function clear() {
  fields.value.forEach((field) => {
    field.clear();
  });
  Utils.callAllEvents(propsComponent.section.events.onClear);
}
function hide() {
  const sectionRef = propsComponent.privateFormApi.getSectionRef(
    propsComponent.section.name
  );
  if (!sectionRef) {
    return;
  }
  fields.value.forEach((field) => {
    field.hide();
  });
  sectionRef.hidden = true;
  Utils.callAllEvents(propsComponent.section.events.onHide);
}
function unhide() {
  const sectionRef = propsComponent.privateFormApi.getSectionRef(
    propsComponent.section.name
  );
  if (!sectionRef) {
    return;
  }
  fields.value.forEach((field) => {
    field.unhide();
  });
  sectionRef.hidden = false;
  Utils.callAllEvents(propsComponent.section.events.onUnhide);
}
function validate() {
  let isValid = true;
  fields.value.forEach((field) => {
    if (!field.validate()) {
      isValid = false;
      return;
    }
  });
  Utils.callAllEvents(propsComponent.section.events.onValidated);
  return isValid;
}
function isValid() {
  let isValid = true;
  fields.value.forEach((field) => {
    if (!field.isValid()) {
      isValid = false;
      return;
    }
  });
  return isValid;
}
function isInvalid() {
  return !isValid();
}
function resetValidation() {
  fields.value.forEach((field) => {
    field.resetValidation();
  });
}
function getFields() {
  return fields.value;
}
function setReadonlyState(state: boolean) {
  const sectionRef = propsComponent.privateFormApi.getSectionRef(
    propsComponent.section.name
  );
  if (sectionRef) {
    sectionRef.readonly = state;
  }
}
function setCssClass(cssClass: string) {
  const sectionRef = propsComponent.privateFormApi.getSectionRef(
    propsComponent.section.name
  );
  if (sectionRef) {
    sectionRef.cssClass = cssClass;
  }
}
function setIcon(icon: string) {
  const sectionRef = propsComponent.privateFormApi.getSectionRef(
    propsComponent.section.name
  );
  if (sectionRef) {
    sectionRef.icon = icon;
  }
}
function setLabel(label: string) {
  const sectionRef = propsComponent.privateFormApi.getSectionRef(
    propsComponent.section.name
  );
  if (sectionRef) {
    sectionRef.label = label;
  }
}
function getValuesFormSerialized() {
  const resourceData: Record<string, unknown> = {};
  for (const [fieldName, fieldApi] of fields.value) {
    resourceData[fieldName] = fieldApi.getValueSerialized();
  }
  return resourceData;
}
function setFieldComponentWithSlot() {
  const defaultSlot = slots['default']
  if (!defaultSlot) {
    console.error("Submit64 : did not found fields slot for section " + propsComponent.section.name)
    return
  }
  const component = defineComponent({
    inheritAttrs: false,
    setup(props, { attrs, slots: innerSlots }) {
      return () =>
        defaultSlot({
          ...props,
          ...attrs,
        },
          innerSlots);
    },
  });
  propsComponent.privateFormApi.setSectionFieldComponent(propsComponent.section, markRaw(component))
}
function tryFocusFirst() {
  for (const field of getFields().values()) {
    field.tryFocus()
    if (field.isFocus()) {
      return true
    }
  }
  return false
}
function tryUnfocus() {
  for (const field of getFields().values()) {
    field.tryUnfocus()
    if (!field.isFocus()) {
      return true
    }
  }
  return false
}

// exposes
defineExpose(sectionApi);

// computeds
const isValidComputed = computed(() => {
  return isValid();
});
const isInvalidComputed = computed(() => {
  return isInvalid();
});
const isUpdatedComputed = computed(() => {
  return getValuesFormSerialized();
});

// watchs
watch(
  () => propsComponent.section?.events.onIsValid,
  (callExist) => {
    stopWatchIsValid?.();
    stopWatchIsValid = null;
    if (callExist) {
      stopWatchIsValid = watch(isValidComputed, (newValue) => {
        if (newValue) {
          Utils.callAllEvents(propsComponent.section.events.onIsValid);
        }
      });
    }
  },
  { immediate: true }
);
watch(
  () => propsComponent.section?.events.onIsInvalid,
  (callExist) => {
    stopWatchIsInvalid?.();
    stopWatchIsInvalid = null;
    if (callExist) {
      stopWatchIsInvalid = watch(isInvalidComputed, (newValue) => {
        if (newValue) {
          Utils.callAllEvents(propsComponent.section?.events.onIsInvalid);
        }
      });
    }
  },
  { immediate: true }
);
watch(
  () => propsComponent.section?.events.onUpdate,
  (callExist) => {
    stopWatchIsUpdated?.();
    stopWatchIsUpdated = null;
    if (callExist) {
      stopWatchIsUpdated = watch(
        isUpdatedComputed,
        () => {
          Utils.callAllEvents(propsComponent.section?.events.onUpdate);
        },
        { immediate: true }
      );
    }
  },
  { immediate: true }
);

// lifeCycle
onMounted(() => {
  setFieldComponentWithSlot()
  const proxyInstanceRef = getCurrentInstance()?.exposed;
  if (proxyInstanceRef) {
    propsComponent.privateFormApi.registerSectionWrapperRef(
      propsComponent.section.name,
      proxyInstanceRef as TSubmit64SectionApi
    );
  }
  void nextTick(() => {
    setupFields();
    Utils.callAllEvents(propsComponent.section?.events.onReady);
  });
});
</script>

<template>
  <div v-show="propsComponent.section.hidden !== true" class="flex column">
    <Component v-if="propsComponent.section.beforeComponent" :is="propsComponent.section.beforeComponent"
      :formApi="propsComponent.formApi" :sectionApi="sectionApi" />
    <Component :is="propsComponent.section.mainComponent" :sectionApi="sectionApi" :formApi="propsComponent.formApi" />
    <Component v-if="propsComponent.section.afterComponent" :is="propsComponent.section.afterComponent"
      :formApi="propsComponent.formApi" :sectionApi="sectionApi" />
  </div>
</template>
