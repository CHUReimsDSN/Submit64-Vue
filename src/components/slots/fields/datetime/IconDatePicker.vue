<script setup lang="ts">
import type {
  TSubmit64FieldSlotPropsSegment,
} from "../../../../models";
import { ref } from "vue";
import { QIcon, QPopupProxy, QDate, QBtn } from "quasar";

// props
const propsComponent = defineProps<TSubmit64FieldSlotPropsSegment<'date'>>();

// refs
const datePopupProxyRef = ref<InstanceType<typeof QPopupProxy>>();

// functions
function closePopUpDate() {
  if (!datePopupProxyRef.value) {
    return;
  }
  datePopupProxyRef.value.hide();
}
</script>

<template>
  <q-icon v-bind="propsComponent.fieldApi.field.bindings.icon">
    <q-popup-proxy ref="popupProxyRef" v-bind="propsComponent.fieldApi.field.bindings.popupProxy">
      <q-date
        v-bind="propsComponent.fieldApi.field.bindings.date"
        :model-value="propsComponent.fieldApi.refs.modelValue.value"
        :mask="propsComponent.formApi.form.formSettings.dateFormat"
        @update:model-value="propsComponent.fieldApi.setValue"
      >
        <div class="row items-center justify-end">
          <q-btn v-bind="propsComponent.fieldApi.field.bindings.btn" @click="closePopUpDate" />
        </div>
      </q-date>
    </q-popup-proxy>
  </q-icon>
</template>
