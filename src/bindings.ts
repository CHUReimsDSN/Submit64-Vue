import {
  type QMenuProps,
  type QBtnProps,
  type QEditorProps,
  type QFieldProps,
} from "quasar";
import type {
  TWysiwygBindings,
  THasManyBindings,
  TStringBindings,
  TNumberBindings,
  TColorBindings,
  TCheckboxBindings,
  TDateBindings,
  TDatetimeBindings,
  TBelongsToBindings,
  TSelectBindings,
  TAttachmentBelongsToBindings,
  TAttachmentHasManyBindings,
  TFormBindings,
  TSectionBindings,
  TActionBindings,
} from "./models";

// fields
const defaultStyle = {
  outlined: true,
  dense: true,
  filled: false,
  standout: false,
  borderless: false,
  rounded: false,
  square: false,
  color: "primary",
  bgColor: "",
  hideBottomSpace: true,
  noCaps: true,
};
const fieldDefaultBind: QFieldProps = {
  hideBottomSpace: defaultStyle.hideBottomSpace,
  outlined: defaultStyle.outlined,
  dense: defaultStyle.dense,
  filled: defaultStyle.filled,
  standout: defaultStyle.standout,
  borderless: defaultStyle.borderless,
  rounded: defaultStyle.rounded,
  square: defaultStyle.square,
  color: defaultStyle.color,
  bgColor: defaultStyle.bgColor,
  lazyRules: false,
};
const btnDefaultBind: QBtnProps = {
  noCaps: defaultStyle.noCaps,
  dense: defaultStyle.dense,
  rounded: defaultStyle.rounded,
  square: defaultStyle.square,
  color: defaultStyle.color,
};
const popupProxyDefaultBind: Omit<QMenuProps, "modelValue"> = {
  cover: true,
  transitionShow: "scale",
  transitionHide: "scale",
};
function getDefaultString(): TStringBindings {
  return {
    ...fieldDefaultBind,
  };
}
function getDefaultNumber(): TNumberBindings {
  return {
    ...fieldDefaultBind,
  };
}
function getDefautColor(): TColorBindings {
  return {
    input: {
      ...fieldDefaultBind,
    },
    icon: {
      name: "colorize",
      class: "cursor-pointer",
    },
    popupProxy: {
      ...popupProxyDefaultBind,
    },
    color: {},
  };
}
function getDefaultWysiwig(): TWysiwygBindings {
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
  return {
    fonts,
    square: defaultStyle.square,
    dense: defaultStyle.dense,
  };
}
function getDefaultCheckbox(): TCheckboxBindings {
  return {
    color: defaultStyle.color,
    dense: defaultStyle.dense,
  };
}
function getDefaultDate(): TDateBindings {
  return {
    input: {
      ...fieldDefaultBind,
    },
    icon: {
      size: "sm",
      color: defaultStyle.color,
      name: "event",
      class: "cursor-pointer",
    },
    popupProxy: {
      ...popupProxyDefaultBind,
    },
    date: {
      color: defaultStyle.color,
    },
    btn: {
      label: "Fermer",
      color: defaultStyle.color,
      noCaps: btnDefaultBind.noCaps,
    },
  };
}
function getDefaultDatetime(): TDatetimeBindings {
  return {
    input: {
      ...fieldDefaultBind,
    },
    iconDate: {
      size: "sm",
      color: defaultStyle.color,
      name: "event",
      class: "cursor-pointer",
    },
    popupProxyDate: {
      ...popupProxyDefaultBind,
    },
    date: {
      color: defaultStyle.color,
    },
    btnDate: {
      label: "Fermer",
      color: defaultStyle.color,
      noCaps: btnDefaultBind.noCaps,
    },
    iconDatetime: {
      size: "sm",
      color: defaultStyle.color,
      name: "access_time",
      class: "cursor-pointer",
    },
    popupProxyDatetime: {
      ...popupProxyDefaultBind,
    },
    datetime: {
      format24h: true,
    },
    btnDatetime: {
      label: "Fermer",
      color: defaultStyle.color,
      noCaps: btnDefaultBind.noCaps,
    },
  };
}
function getDefaultBelongsTo(): TBelongsToBindings {
  return {
    select: {
      ...fieldDefaultBind,
    },
    itemNoOption: {
      dense: defaultStyle.dense,
    },
  };
}
function getDefaultHasMany(): THasManyBindings {
  return {
    select: {
      ...fieldDefaultBind,
    },
    itemNoOption: {
      dense: defaultStyle.dense,
    },
  };
}
function getDefaultSelect(): TSelectBindings {
  return {
    select: {
      ...fieldDefaultBind,
    },
    itemNoOption: {
      dense: defaultStyle.dense,
    },
  };
}
function getDefaultAttachmentBelongsTo(): TAttachmentBelongsToBindings {
  return {
    uploader: {
      bordered: !defaultStyle.borderless,
      square: defaultStyle.square,
      color: defaultStyle.color,
      flat: false,
    },
  };
}
function getDefaultAttachmentHasMany(): TAttachmentHasManyBindings {
  return {
    uploader: {
      bordered: !defaultStyle.borderless,
      square: defaultStyle.square,
      color: defaultStyle.color,
      flat: false,
    },
  };
}

// sections
function getDefaultSection(): TSectionBindings {
  return {
    icon: {
      color: defaultStyle.color,
    },
  };
}

// form
function getDefaultActions(): TActionBindings {
  return {
    submitBtn: {
      label: "Enregistrer",
    },
    resetBtn: {
      label: "Réinitialiser",
    },
    clearBtn: {
      label: "Effacer",
    },
  };
}

function getDefaultFormBindings(): TFormBindings {
  return {
    fields: {
      string: getDefaultString(),
      number: getDefaultNumber(),
      wysiwyg: getDefaultWysiwig(),
      color: getDefautColor(),
      checkbox: getDefaultCheckbox(),
      date: getDefaultDate(),
      datetime: getDefaultDatetime(),
      select: getDefaultSelect(),
      hasMany: getDefaultHasMany(),
      belongsTo: getDefaultBelongsTo(),
      attachmentBelongsTo: getDefaultAttachmentBelongsTo(),
      attachmentHasMany: getDefaultAttachmentHasMany(),
    },
    sections: getDefaultSection(),
    form: {
      actions: getDefaultActions(),
    },
  };
}
function getEmptyDefaultBindings(): TFormBindings {
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
      attachmentBelongsTo: {},
      attachmentHasMany: {},
      select: {},
      checkbox: {},
    },
    sections: {},
    form: {
      actions: {},
    },
  };
}

export const Bindings = {
  getDefaultFormBindings,
  getEmptyDefaultBindings,
};
