<script setup lang="ts">
import type {
  TSubmit64FieldSlotPropsSegment,
} from "../../../../models";
import { QBtn, QUploader, QUploaderAddTrigger } from "quasar";

// props
const propsComponent = defineProps<
  TSubmit64FieldSlotPropsSegment<"attachmentHasOne"> & {
    scope: QUploader
  }
>();
</script>

<template>
  <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
    <div class="col">
      <div class="q-uploader__title">
        {{ propsComponent.fieldApi.field.label }}
      </div>
    </div>
    <q-btn
      v-if="scope.canAddFiles"
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
