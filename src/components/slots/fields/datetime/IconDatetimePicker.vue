<script setup lang="ts">
import type { TSubmit64FieldSlotPropsSegment } from "../../../../models";
import { ref } from "vue";
import { QIcon, QPopupProxy, QDate, QTime, QBtn } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldSlotPropsSegment<'datetime'>>();

// refs
const datePopupProxyRef = ref<InstanceType<typeof QPopupProxy>>();
const timePopupProxyRef = ref<InstanceType<typeof QPopupProxy>>();

// functions
function closePopUpDate() {
  if (!datePopupProxyRef.value) {
    return;
  }
  datePopupProxyRef.value.hide();
}
function closePopUpTime() {
  if (!timePopupProxyRef.value) {
    return;
  }
  timePopupProxyRef.value.hide();
}
</script>

<template>
  <q-icon v-bind="propsComponent.fieldApi.field.bindings.iconDate">
    <q-popup-proxy ref="popupProxyRef" v-bind="propsComponent.fieldApi.field.bindings.popupProxyDate">
      <q-date
        v-bind="propsComponent.fieldApi.field.bindings.date"
        :model-value="propsComponent.fieldApi.refs.modelValue.value"
        :mask="propsComponent.formApi.form.formSettings.datetimeFormat"
        @update:model-value="propsComponent.fieldApi.setValue"
      >
        <div class="row items-center justify-end">
          <q-btn v-bind="propsComponent.fieldApi.field.bindings.btnDate" @click="closePopUpDate" />
        </div>
      </q-date>
    </q-popup-proxy>
  </q-icon>
  <q-icon v-bind="propsComponent.fieldApi.field.bindings.iconDatetime">
    <q-popup-proxy ref="timePopupProxyRef" v-bind="propsComponent.fieldApi.field.bindings.popupProxyDate">
      <q-time
        v-bind="propsComponent.fieldApi.field.bindings.datetime"
        :model-value="propsComponent.fieldApi.refs.modelValue.value"
        :mask="propsComponent.formApi.form.formSettings.datetimeFormat"
        @update:model-value="propsComponent.fieldApi.setValue"
      >
        <div class="row items-center justify-end">
          <q-btn v-bind="propsComponent.fieldApi.field.bindings.btnDatetime" @click="closePopUpTime" />
        </div>
      </q-time>
    </q-popup-proxy>
  </q-icon>
</template>
