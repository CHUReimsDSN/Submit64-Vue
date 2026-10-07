<script setup lang="ts">
import type {
  TSubmit64FieldSlotPropsSegment,
  TSubmit64FileDataValue,
} from "../../../../models";
import { QBtn, QUploader, QUploaderAddTrigger } from "quasar";
import { computed } from "vue";

// props
const propsComponent = defineProps<
  TSubmit64FieldSlotPropsSegment<"attachmentHasOne"> & {
    scope: QUploader;
  }
>();

// computeds
const alreadyUploadedFileEmpty = computed(() => {
  if (!propsComponent.fieldApi.refs.modelValue.value) {
    return true;
  }
  return (
    (propsComponent.fieldApi.field.attachmentData?.length ?? 0) === 0 ||
    ((propsComponent.fieldApi.field.attachmentData?.length ?? 1 === 1) &&
      (propsComponent.fieldApi.refs.modelValue.value as TSubmit64FileDataValue)
        .delete.length === 1)
  );
});
</script>

<template>
  <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
    <div class="col">
      <div class="q-uploader__title">
        {{ propsComponent.fieldApi.field.label }}
      </div>
    </div>
    <q-btn
      v-if="scope.canAddFiles && alreadyUploadedFileEmpty"
      type="a"
      icon="add_box"
      @click="scope.pickFiles"
      round
      dense
      flat
    >
      <q-uploader-add-trigger />
    </q-btn>
  </div>
</template>
