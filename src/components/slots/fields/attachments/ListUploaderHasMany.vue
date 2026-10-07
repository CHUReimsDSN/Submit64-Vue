<script setup lang="ts">
import {
  QBtn,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSeparator,
  QUploader,
} from "quasar";
import type {
  TFormField,
  TSubmit64FieldSlotPropsSegment,
  TSubmit64FileDataValue,
} from "../../../../models";
import { computed } from "vue";
import { Utils } from "../../../../utils";

// types
type TUploadedAttachment = Required<TFormField>["attachmentData"][number];

// props
const propsComponent = defineProps<
  TSubmit64FieldSlotPropsSegment<"attachmentHasOne"> & {
    scope: QUploader;
  }
>();

// functions
function removeUploadedFile(uploadedAttachment: TUploadedAttachment) {
  let modelValue = propsComponent.fieldApi.refs.modelValue
    .value as TSubmit64FileDataValue;
  modelValue.delete.push(uploadedAttachment.attachment_id);
  propsComponent.fieldApi.setValue(modelValue);
  propsComponent.fieldApi.validate();
}
function keepUploadedFile(uploadedAttachment: TUploadedAttachment) {
  let modelValue = propsComponent.fieldApi.refs.modelValue
    .value as TSubmit64FileDataValue;
  modelValue.delete = modelValue.delete.filter((attachmentId) => {
    return attachmentId !== uploadedAttachment.attachment_id;
  });
  propsComponent.fieldApi.setValue(modelValue);
  propsComponent.fieldApi.validate();
}

// computeds
const attachmentDataIsEmpty = computed(() => {
  return (propsComponent.fieldApi.field.attachmentData ?? []).length === 0;
});
const modelValueDeleteIds = computed(() => {
  if (!propsComponent.fieldApi.refs.modelValue.value) {
    return [];
  }
  return (
    propsComponent.fieldApi.refs.modelValue.value as TSubmit64FileDataValue
  ).delete;
});
</script>

<template>
  <div v-if="!attachmentDataIsEmpty" class="flex column">
    <div class="text-weight-medium text-body2">
      Fichier{{
        (propsComponent.fieldApi.field.attachmentData?.length ?? 0) > 0
          ? "s"
          : ""
      }}
      déjà en ligne
    </div>
    <q-list separator>
      <q-item
        v-for="file in propsComponent.fieldApi.field.attachmentData ?? []"
        :key="file.attachment_id"
      >
        <q-item-section>
          <q-item-label class="full-width ellipsis">
            {{ file.filename }}
          </q-item-label>

          <q-item-label caption>
            {{ Utils.humanStorageSize(file.size) }}
          </q-item-label>
        </q-item-section>

        <q-item-section
          v-if="propsComponent.fieldApi.refs.modelValue.value"
          top
          side
        >
          <q-btn
            v-if="!modelValueDeleteIds.includes(file.attachment_id)"
            class="gt-xs"
            size="12px"
            :disable="propsComponent.fieldApi.field.readonly"
            flat
            dense
            round
            icon="delete"
            @click="removeUploadedFile(file)"
          />
          <q-btn
            v-if="
              modelValueDeleteIds.includes(file.attachment_id) &&
              (
                propsComponent.fieldApi.refs.modelValue
                  .value as TSubmit64FileDataValue
              ).add.length === 0
            "
            class="gt-xs"
            size="12px"
            :disable="propsComponent.fieldApi.field.readonly"
            flat
            dense
            round
            icon="refresh"
            @click="keepUploadedFile(file)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <q-separator v-if="!attachmentDataIsEmpty && scope.files.length > 0" />

  <div v-if="scope.files.length > 0" class="flex column">
    <div class="text-weight-medium text-body2">
      Fichier{{ scope.files.length > 0 ? "s" : "" }} à ajouter
    </div>
    <q-list separator>
      <q-item v-for="file in scope.files" :key="file.__key">
        <q-item-section>
          <q-item-label class="full-width ellipsis">
            {{ file.name }}
          </q-item-label>

          <q-item-label caption>
            {{ file.__sizeLabel }}
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <q-btn
            class="gt-xs"
            size="12px"
            :disable="propsComponent.fieldApi.field.readonly"
            flat
            dense
            round
            icon="delete"
            @click="scope.removeFile(file)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
