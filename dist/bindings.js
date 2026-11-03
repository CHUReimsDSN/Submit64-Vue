import { QField, QMenu, QInput, QEditor, QCheckbox, QDate, QIcon, QColor, QBtn, QTime, QSelect, QUploader, } from "quasar";
function formatQuasarProps(props) {
    return Object.fromEntries(Object.entries(props).reduce((acc, entry) => {
        if (!entry[1] || !entry[1].default) {
            return acc;
        }
        acc.push([entry[0], entry[1].default]);
        return acc;
    }, []));
}
const defaultStyle = {
    color: "primary",
};
const fieldDefaultBind = {
    ...formatQuasarProps(QField.props),
    color: defaultStyle.color,
    lazyRules: false,
};
function getDefaultString() {
    return {
        ...formatQuasarProps(QInput.props),
    };
}
function getDefaultNumber() {
    return {
        ...formatQuasarProps(QInput.props),
    };
}
function getDefautColor() {
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
function getDefaultWysiwig() {
    const fonts = {
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
function getDefaultCheckbox() {
    return {
        ...formatQuasarProps(QCheckbox.props),
    };
}
function getDefaultDate() {
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
function getDefaultDatetime() {
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
function getDefaultBelongsTo() {
    return {
        select: {
            ...formatQuasarProps(QSelect.props),
        },
    };
}
function getDefaultHasMany() {
    return {
        select: {
            ...formatQuasarProps(QSelect.props),
        },
    };
}
function getDefaultSelect() {
    return {
        select: {
            ...formatQuasarProps(QSelect.props),
        },
    };
}
function getDefaultAttachmentBelongsTo() {
    return {
        uploader: {
            ...formatQuasarProps(QUploader.props),
            color: defaultStyle.color,
        },
    };
}
function getDefaultAttachmentHasMany() {
    return {
        uploader: {
            ...formatQuasarProps(QUploader.props),
            color: defaultStyle.color,
        },
    };
}
// sections
function getDefaultSection() {
    return {};
}
// form
function getDefaultActions() {
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
function getDefaultFormBindings() {
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
function getEmptyDefaultBindings() {
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
