import HeaderUploaderHasMany from "./components/slots/fields/attachments/HeaderUploaderHasMany.vue";
import HeaderUploaderHasOne from "./components/slots/fields/attachments/HeaderUploaderHasOne.vue";
import ListUploaderHasMany from "./components/slots/fields/attachments/ListUploaderHasMany.vue";
import ListUploaderHasOne from "./components/slots/fields/attachments/ListUploaderHasOne.vue";
import ColorPicker from "./components/slots/fields/color/ColorPicker.vue";
import IconDatePicker from "./components/slots/fields/datetime/IconDatePicker.vue";
import IconDatetimePicker from "./components/slots/fields/datetime/IconDatetimePicker.vue";
import AssociationDisplayComponent from "./components/slots/fields/select/AssociationDisplayComponent.vue";
import NoOptionComponent from "./components/slots/fields/select/NoOptionComponent.vue";
import ActionComponent from "./components/slots/form/ActionComponent.vue";
import OrphanErrorsComponent from "./components/slots/form/OrphanErrorsComponent.vue";
import SectionComponent from "./components/slots/sections/SectionComponent.vue";
import type { TFormSlots } from "./models";

function getDefaultFormSlots(): TFormSlots {
  return {
    fields: {
      string: {},
      number: {},
      wysiwyg: {},
      color: {
        append: ColorPicker
      },
      checkbox: {},
      date: {
        append: IconDatePicker
      },
      datetime: {
        append: IconDatetimePicker
      },
      select: {
        "no-option": NoOptionComponent,
        option: AssociationDisplayComponent,
      },
      hasMany: {
        "no-option": NoOptionComponent,
        option: AssociationDisplayComponent,
      },
      belongsTo: {
        "no-option": NoOptionComponent,
        option: AssociationDisplayComponent,
      },
      attachmentHasOne: {
        header: HeaderUploaderHasOne,
        list: ListUploaderHasOne,
      },
      attachmentHasMany: {
        header: HeaderUploaderHasMany,
        list: ListUploaderHasMany
      },
      byName: {},
    },
    sections: {
      default: SectionComponent,
      byName: {},
    },
    form: {
      actions: ActionComponent,
      orphanErrors: OrphanErrorsComponent,
    },
  };
}

function getEmptyDefaultSlots(): TFormSlots {
  return {
    fields: {
      string: {},
      number: {},
      wysiwyg: {},
      color: {},
      date: {},
      datetime: {},
      belongsTo: {},
      hasMany: {},
      attachmentHasOne: {},
      attachmentHasMany: {},
      select: {},
      checkbox: {},
      byName: {},
    },
    sections: {
      default: {},
      byName: {},
    },
    form: {
      actions: {},
    },
  };
}

export const Slots = {
  getDefaultFormSlots,
  getEmptyDefaultSlots,
};
