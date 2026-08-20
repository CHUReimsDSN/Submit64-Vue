// fields
const defaultStyle = {
    outlined: undefined,
    dense: undefined,
    filled: undefined,
    standout: undefined,
    borderless: undefined,
    rounded: undefined,
    square: undefined,
    color: "primary",
    hideBottomSpace: undefined,
    noCaps: undefined,
};
const fieldDefaultBind = {
    hideBottomSpace: defaultStyle.hideBottomSpace,
    outlined: defaultStyle.outlined,
    dense: defaultStyle.dense,
    filled: defaultStyle.filled,
    standout: defaultStyle.standout,
    borderless: defaultStyle.borderless,
    rounded: defaultStyle.rounded,
    square: defaultStyle.square,
    color: defaultStyle.color,
    lazyRules: false,
};
const popupProxyDefaultBind = {
    cover: true,
};
function getDefaultString() {
    return {
        ...fieldDefaultBind,
    };
}
function getDefaultNumber() {
    return {
        ...fieldDefaultBind,
    };
}
function getDefautColor() {
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
        fonts,
    };
}
function getDefaultCheckbox() {
    return {
        color: defaultStyle.color,
    };
}
function getDefaultDate() {
    return {
        input: {
            ...fieldDefaultBind,
        },
        icon: {
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
        },
    };
}
function getDefaultDatetime() {
    return {
        input: {
            ...fieldDefaultBind,
        },
        iconDate: {
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
        },
        iconDatetime: {
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
        },
    };
}
function getDefaultBelongsTo() {
    return {
        select: {
            ...fieldDefaultBind,
        },
    };
}
function getDefaultHasMany() {
    return {
        select: {
            ...fieldDefaultBind,
        },
    };
}
function getDefaultSelect() {
    return {
        select: {
            ...fieldDefaultBind,
        },
    };
}
function getDefaultAttachmentBelongsTo() {
    return {
        uploader: {
            color: defaultStyle.color,
        },
    };
}
function getDefaultAttachmentHasMany() {
    return {
        uploader: {
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
            attachmentBelongsTo: getDefaultAttachmentBelongsTo(),
            attachmentHasMany: getDefaultAttachmentHasMany(),
        },
        sections: getDefaultSection(),
        form: {
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
