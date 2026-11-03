import {
  type QMenuProps,
  type QEditorProps,
  type QFieldProps,
  QField,
  QMenu,
  QInput,
  QEditor,
  QCheckbox,
  QDate,
  QIcon,
  QColor,
  QBtn,
  QTime,
  QSelect,
  QUploader,
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
  TAttachmentHasOneBindings,
  TAttachmentHasManyBindings,
  TFormBindings,
  TSectionBindings,
  TActionBindings,
} from "./models";

function formatQuasarProps(
  props: Record<string, { default: unknown } | undefined>,
) {
  return Object.fromEntries(
    Object.entries(props).reduce(
      (acc, entry) => {
        if (!entry[1] || !entry[1].default) {
          return acc;
        }
        let value = entry[1].default
        if (typeof value === 'function') {
          value = value()
        }
        acc.push([entry[0], value]);
        return acc;
      },
      <[string, unknown][]>[],
    ),
  );
}

const defaultStyle = {
  color: "primary",
};
const fieldDefaultBind: QFieldProps = {
  ...formatQuasarProps(QField.props),
  color: defaultStyle.color,
  lazyRules: false,
};
function getDefaultString(): TStringBindings {
  return {
    ...formatQuasarProps(QInput.props),
  };
}
function getDefaultNumber(): TNumberBindings {
  return {
    ...formatQuasarProps(QInput.props),
  };
}
function getDefautColor(): TColorBindings {
  return {
    input: {
      ...formatQuasarProps(QInput.props),
    },
    icon: {
      ...formatQuasarProps(QIcon.props),
      name: "colorize",
      class: "cursor-pointer",
    },
    popupProxy: {
      ...formatQuasarProps(QMenu.props),
    },
    color: {
      ...formatQuasarProps(QColor.props)
    },
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
    ...formatQuasarProps(QEditor.props),
    fonts,
  };
}
function getDefaultCheckbox(): TCheckboxBindings {
  return {
    ...formatQuasarProps(QCheckbox.props),
  };
}
function getDefaultDate(): TDateBindings {
  return {
    input: {
      ...formatQuasarProps(QInput.props),
    },
    icon: {
      ...formatQuasarProps(QIcon.props),
      name: "event",
      class: "cursor-pointer",
    },
    popupProxy: {
      ...formatQuasarProps(QMenu.props),
    },
    date: {
      ...formatQuasarProps(QDate.props),
      color: defaultStyle.color,
    },
    btn: {
      ...formatQuasarProps(QBtn.props),
      label: "Fermer",
      color: defaultStyle.color,
    },
  };
}
function getDefaultDatetime(): TDatetimeBindings {
  return {
    input: {
      ...formatQuasarProps(QInput.props),
    },
    iconDate: {
      ...formatQuasarProps(QIcon.props),
      name: "event",
      class: "cursor-pointer",
    },
    popupProxyDate: {
      ...formatQuasarProps(QMenu.props),
    },
    date: {
      ...formatQuasarProps(QDate.props),
      color: defaultStyle.color,
    },
    btnDate: {
      ...formatQuasarProps(QBtn.props),
      label: "Fermer",
      color: defaultStyle.color,
    },
    iconDatetime: {
      ...formatQuasarProps(QIcon.props),
      name: "access_time",
      class: "cursor-pointer",
    },
    popupProxyDatetime: {
      ...formatQuasarProps(QMenu.props),
    },
    datetime: {
      ...formatQuasarProps(QTime.props),
      format24h: true,
    },
    btnDatetime: {
      ...formatQuasarProps(QBtn.props),
      label: "Fermer",
      color: defaultStyle.color,
    },
  };
}
function getDefaultBelongsTo(): TBelongsToBindings {
  return {
    select: {
      ...formatQuasarProps(QSelect.props),
    },
  };
}
function getDefaultHasMany(): THasManyBindings {
  return {
    select: {
      ...formatQuasarProps(QSelect.props),
    },
  };
}
function getDefaultSelect(): TSelectBindings {
  return {
    select: {
      ...formatQuasarProps(QSelect.props),
    },
  };
}
function getDefaultAttachmentBelongsTo(): TAttachmentHasOneBindings {
  return {
    uploader: {
      ...formatQuasarProps(QUploader.props),
      color: defaultStyle.color,
    },
  };
}
function getDefaultAttachmentHasMany(): TAttachmentHasManyBindings {
  return {
    uploader: {
      ...formatQuasarProps(QUploader.props),
      color: defaultStyle.color,
    },
  };
}

// sections
function getDefaultSection(): TSectionBindings {
  return {};
}

// form
function getDefaultActions(): TActionBindings {
  return {
    submitBtn: {
      ...formatQuasarProps(QBtn.props),
      label: "Enregistrer",
    },
    resetBtn: {
      ...formatQuasarProps(QBtn.props),
      label: "Réinitialiser",
    },
    clearBtn: {
      ...formatQuasarProps(QBtn.props),
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
      attachmentHasOne: getDefaultAttachmentBelongsTo(),
      attachmentHasMany: getDefaultAttachmentHasMany(),
      byName: {},
    },
    sections: {
      default: getDefaultSection(),
      byName: {},
    },
    form: {
      default: {},
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
      default: {},
      actions: {},
    },
  };
}

export const Bindings = {
  getDefaultFormBindings,
  getEmptyDefaultBindings,
};
