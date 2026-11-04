const defaultStyle = {
    color: "primary",
};
function getDefaultString(cb) {
    return cb("input");
}
function getDefaultNumber(cb) {
    return cb("input");
}
function getDefautColor(cb) {
    return {
        input: {
            ...cb("input"),
        },
        icon: {
            ...cb("icon"),
            name: "colorize",
            class: "cursor-pointer",
        },
        popupProxy: {
            ...cb("menu"),
        },
        color: {
            ...cb("color"),
        },
    };
}
function getDefaultWysiwig(cb) {
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
    const bindings = cb("editor");
    return {
        contentStyle: bindings.contentStyle,
        fonts,
    };
}
function getDefaultCheckbox(cb) {
    return {
        ...cb("checkbox"),
    };
}
function getDefaultDate(cb) {
    return {
        input: {
            ...cb("input"),
        },
        icon: {
            ...cb("icon"),
            name: "event",
            class: "cursor-pointer",
        },
        popupProxy: {
            ...cb("menu"),
        },
        date: {
            ...cb("date"),
            color: defaultStyle.color,
        },
        btn: {
            ...cb("btn"),
            label: "Fermer",
            color: defaultStyle.color,
        },
    };
}
function getDefaultDatetime(cb) {
    return {
        input: {
            ...cb("input"),
        },
        iconDate: {
            ...cb("icon"),
            name: "event",
            class: "cursor-pointer",
        },
        popupProxyDate: {
            ...cb("menu"),
        },
        date: {
            ...cb("date"),
            color: defaultStyle.color,
        },
        btnDate: {
            ...cb("btn"),
            label: "Fermer",
            color: defaultStyle.color,
        },
        iconDatetime: {
            ...cb("icon"),
            name: "access_time",
            class: "cursor-pointer",
        },
        popupProxyDatetime: {
            ...cb("menu"),
        },
        datetime: {
            ...cb("time"),
            format24h: true,
        },
        btnDatetime: {
            ...cb("btn"),
            label: "Fermer",
            color: defaultStyle.color,
        },
    };
}
function getDefaultBelongsTo(cb) {
    return {
        select: {
            ...cb("select"),
        },
    };
}
function getDefaultHasMany(cb) {
    return {
        select: {
            ...cb("select"),
        },
    };
}
function getDefaultSelect(cb) {
    return {
        select: {
            ...cb("select"),
        },
    };
}
function getDefaultAttachmentBelongsTo(cb) {
    return {
        uploader: {
            ...cb("uploader"),
            color: defaultStyle.color,
        },
    };
}
function getDefaultAttachmentHasMany(cb) {
    return {
        uploader: {
            ...cb("uploader"),
            color: defaultStyle.color,
        },
    };
}
function getDefaultSection() {
    return {};
}
function getDefaultActions(cb) {
    return {
        submitBtn: {
            ...cb("btn"),
            label: "Enregistrer",
        },
        resetBtn: {
            ...cb("btn"),
            label: "Réinitialiser",
        },
        clearBtn: {
            ...cb("btn"),
            label: "Effacer",
        },
    };
}
function getDefaultFormBindings(cb) {
    const finalCb = wrapperBindingCallback(cb);
    return {
        fields: {
            string: getDefaultString(finalCb),
            number: getDefaultNumber(finalCb),
            wysiwyg: getDefaultWysiwig(finalCb),
            color: getDefautColor(finalCb),
            checkbox: getDefaultCheckbox(finalCb),
            date: getDefaultDate(finalCb),
            datetime: getDefaultDatetime(finalCb),
            select: getDefaultSelect(finalCb),
            hasMany: getDefaultHasMany(finalCb),
            belongsTo: getDefaultBelongsTo(finalCb),
            attachmentHasOne: getDefaultAttachmentBelongsTo(finalCb),
            attachmentHasMany: getDefaultAttachmentHasMany(finalCb),
            byName: {},
        },
        sections: {
            default: getDefaultSection(),
            byName: {},
        },
        form: {
            default: {},
            actions: getDefaultActions(finalCb),
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
function getDefaultBindingCallback() {
    return () => {
        return {};
    };
}
function wrapperBindingCallback(cb) {
    return (name) => Object.fromEntries(Object.entries(cb(name)).reduce((acc, entry) => {
        if (!entry[1]) {
            return acc;
        }
        let value = entry[1].default;
        if (typeof value === "function") {
            value = value();
        }
        acc.push([entry[0], value]);
        return acc;
    }, []));
}
export const Bindings = {
    getDefaultFormBindings,
    getEmptyDefaultBindings,
    getDefaultBindingCallback,
};
