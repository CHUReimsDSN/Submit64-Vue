import { QBanner as QBanner_default, QBtn as QBtn_default, QBtnDropdown as QBtnDropdown_default, QBtnGroup as QBtnGroup_default, QBtnToggle as QBtnToggle_default, QCard as QCard_default, QDate as QDate_default, QDialog as QDialog_default, QDrawer as QDrawer_default, QExpansionItem as QExpansionItem_default, QField as QField_default, QHeader as QHeader_default, QIcon as QIcon_default, QInput as QInput_default, QItem as QItem_default, QLayout as QLayout_default, QList as QList_default, QMenu as QMenu_default, QRadio as QRadio_default, QSelect as QSelect_default, QTab as QTab_default, QTabs as QTabs_default, QToggle as QToggle_default, QTooltip as QTooltip_default, QTree as QTree_default, QUploader as QUploader_default } from "./quasar.js";
//#region node_modules/@quasar/app-vite/exports/wrappers.js
/**
* Functions in this file are no-op,
*  they just take a callback function and return it
* They're used to apply typings to the callback
*  parameters and return value when using Quasar with TypeScript
*/
var wrapper = (callback) => callback;
/**
* Define the function that creates the index script.
*/
var defineIndexScript = wrapper;
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/primary.ts
var entries$1 = Object.freeze({
	Contrast: {
		reference: "light-dark(var(--surface-800), var(--surface-200))",
		p50: "light-dark(var(--surface-950), var(--surface-50))",
		p100: "light-dark(var(--surface-900), var(--surface-100))",
		p200: "light-dark(var(--surface-800), var(--surface-200))",
		p300: "light-dark(var(--surface-700), var(--surface-200))",
		p400: "light-dark(var(--surface-800), var(--surface-50))",
		p500: "light-dark(var(--surface-800), var(--surface-200))",
		p600: "light-dark(var(--surface-800), var(--surface-600))",
		p700: "light-dark(var(--surface-300), var(--surface-700))",
		p800: "light-dark(var(--surface-200), var(--surface-800))",
		p900: "light-dark(var(--surface-100), var(--surface-900))",
		p950: "light-dark(var(--surface-50), var(--surface-950))"
	},
	Emerald: {
		reference: "#10b981",
		p50: "#ecfdf5",
		p100: "#d1fae5",
		p200: "#a7f3d0",
		p300: "#6ee7b7",
		p400: "#34d399",
		p500: "#10b981",
		p600: "#059669",
		p700: "#047857",
		p800: "#065f46",
		p900: "#064e3b",
		p950: "#022c22"
	},
	Green: {
		reference: "#22c55e",
		p50: "#f0fdf4",
		p100: "#dcfce7",
		p200: "#bbf7d0",
		p300: "#86efac",
		p400: "#4ade80",
		p500: "#22c55e",
		p600: "#16a34a",
		p700: "#15803d",
		p800: "#166534",
		p900: "#14532d",
		p950: "#052e16"
	},
	Lime: {
		reference: "#84cc16",
		p50: "#f7fee7",
		p100: "#ecfccb",
		p200: "#d9f99d",
		p300: "#bef264",
		p400: "#a3e635",
		p500: "#84cc16",
		p600: "#65a30d",
		p700: "#4d7c0f",
		p800: "#3f6212",
		p900: "#365314",
		p950: "#1a2e05"
	},
	Orange: {
		reference: "#f97316",
		p50: "#fff7ed",
		p100: "#ffedd5",
		p200: "#fed7aa",
		p300: "#fdba74",
		p400: "#fb923c",
		p500: "#f97316",
		p600: "#ea580c",
		p700: "#c2410c",
		p800: "#9a3412",
		p900: "#7c2d12",
		p950: "#431407"
	},
	Amber: {
		reference: "#f59e0b",
		p50: "#fffbeb",
		p100: "#fef3c7",
		p200: "#fde68a",
		p300: "#fcd34d",
		p400: "#fbbf24",
		p500: "#f59e0b",
		p600: "#d97706",
		p700: "#b45309",
		p800: "#92400e",
		p900: "#78350f",
		p950: "#451a03"
	},
	Yellow: {
		reference: "#eab308",
		p50: "#fefce8",
		p100: "#fef9c3",
		p200: "#fef08a",
		p300: "#fde047",
		p400: "#facc15",
		p500: "#eab308",
		p600: "#ca8a04",
		p700: "#a16207",
		p800: "#854d0e",
		p900: "#713f12",
		p950: "#422006"
	},
	Teal: {
		reference: "#14b8a6",
		p50: "#f0fdfa",
		p100: "#ccfbf1",
		p200: "#99f6e4",
		p300: "#5eead4",
		p400: "#2dd4bf",
		p500: "#14b8a6",
		p600: "#0d9488",
		p700: "#0f766e",
		p800: "#115e59",
		p900: "#134e4a",
		p950: "#042f2e"
	},
	Cyan: {
		reference: "#06b6d4",
		p50: "#ecfeff",
		p100: "#cffafe",
		p200: "#a5f3fc",
		p300: "#67e8f9",
		p400: "#22d3ee",
		p500: "#06b6d4",
		p600: "#0891b2",
		p700: "#0e7490",
		p800: "#155e75",
		p900: "#164e63",
		p950: "#083344"
	},
	Sky: {
		reference: "#0ea5e9",
		p50: "#f0f9ff",
		p100: "#e0f2fe",
		p200: "#bae6fd",
		p300: "#7dd3fc",
		p400: "#38bdf8",
		p500: "#0ea5e9",
		p600: "#0284c7",
		p700: "#0369a1",
		p800: "#075985",
		p900: "#0c4a6e",
		p950: "#082f49"
	},
	Blue: {
		reference: "#3b82f6",
		p50: "#eff6ff",
		p100: "#dbeafe",
		p200: "#bfdbfe",
		p300: "#93c5fd",
		p400: "#60a5fa",
		p500: "#3b82f6",
		p600: "#2563eb",
		p700: "#1d4ed8",
		p800: "#1e40af",
		p900: "#1e3a8a",
		p950: "#172554"
	},
	Indigo: {
		reference: "#6366f1",
		p50: "#eef2ff",
		p100: "#e0e7ff",
		p200: "#c7d2fe",
		p300: "#a5b4fc",
		p400: "#818cf8",
		p500: "#6366f1",
		p600: "#4f46e5",
		p700: "#4338ca",
		p800: "#3730a3",
		p900: "#312e81",
		p950: "#1e1b4b"
	},
	Violet: {
		reference: "#8b5cf6",
		p50: "#f5f3ff",
		p100: "#ede9fe",
		p200: "#ddd6fe",
		p300: "#c4b5fd",
		p400: "#a78bfa",
		p500: "#8b5cf6",
		p600: "#7c3aed",
		p700: "#6d28d9",
		p800: "#5b21b6",
		p900: "#4c1d95",
		p950: "#2e1065"
	},
	Purple: {
		reference: "#a855f7",
		p50: "#faf5ff",
		p100: "#f3e8ff",
		p200: "#e9d5ff",
		p300: "#d8b4fe",
		p400: "#c084fc",
		p500: "#a855f7",
		p600: "#9333ea",
		p700: "#7e22ce",
		p800: "#6b21a8",
		p900: "#581c87",
		p950: "#3b0764"
	},
	Fushia: {
		reference: "#d946ef",
		p50: "#fdf4ff",
		p100: "#fae8ff",
		p200: "#f5d0fe",
		p300: "#f0abfc",
		p400: "#e879f9",
		p500: "#d946ef",
		p600: "#c026d3",
		p700: "#a21caf",
		p800: "#86198f",
		p900: "#701a75",
		p950: "#4a044e"
	},
	Pink: {
		reference: "#ec4899",
		p50: "#fdf2f8",
		p100: "#fce7f3",
		p200: "#fbcfe8",
		p300: "#f9a8d4",
		p400: "#f472b6",
		p500: "#ec4899",
		p600: "#db2777",
		p700: "#be185d",
		p800: "#9d174d",
		p900: "#831843",
		p950: "#500724"
	},
	Rose: {
		reference: "#f43f5e",
		p50: "#fff1f2",
		p100: "#ffe4e6",
		p200: "#fecdd3",
		p300: "#fda4af",
		p400: "#fb7185",
		p500: "#f43f5e",
		p600: "#e11d48",
		p700: "#be123c",
		p800: "#9f1239",
		p900: "#881337",
		p950: "#4c0519"
	}
});
var primaries = Object.freeze(new Map(Object.entries(entries$1)));
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/surface.ts
var entries = Object.freeze({
	Slate: {
		reference: "#46748b",
		s0: "#ffffff",
		s50: "#f8fafc",
		s100: "#f1f5f9",
		s200: "#e2e8f0",
		s300: "#cbd5e1",
		s400: "#94a3b8",
		s500: "#64748b",
		s600: "#475569",
		s700: "#334155",
		s800: "#1e293b",
		s900: "#0f172a",
		s950: "#020617"
	},
	Gray: {
		reference: "#6b7280",
		s0: "#ffffff",
		s50: "#f9fafb",
		s100: "#f3f4f6",
		s200: "#e5e7eb",
		s300: "#d1d5db",
		s400: "#9ca3af",
		s500: "#6b7280",
		s600: "#4b5563",
		s700: "#374151",
		s800: "#1f2937",
		s900: "#111827",
		s950: "#030712"
	},
	Zinc: {
		reference: "#71717a",
		s0: "#ffffff",
		s50: "#fafafa",
		s100: "#f4f4f5",
		s200: "#e4e4e7",
		s300: "#d4d4d8",
		s400: "#a1a1aa",
		s500: "#71717a",
		s600: "#52525b",
		s700: "#3f3f46",
		s800: "#27272a",
		s900: "#18181b",
		s950: "#09090b"
	},
	Neutral: {
		reference: "#737373",
		s0: "#ffffff",
		s50: "#fafafa",
		s100: "#f5f5f5",
		s200: "#e5e5e5",
		s300: "#d4d4d4",
		s400: "#a3a3a3",
		s500: "#737373",
		s600: "#525252",
		s700: "#404040",
		s800: "#262626",
		s900: "#171717",
		s950: "#0a0a0a"
	},
	Stone: {
		reference: "#78716c",
		s0: "#ffffff",
		s50: "#fafaf9",
		s100: "#f5f5f4",
		s200: "#e7e5e4",
		s300: "#d6d3d1",
		s400: "#a8a29e",
		s500: "#78716c",
		s600: "#57534e",
		s700: "#44403c",
		s800: "#292524",
		s900: "#1c1917",
		s950: "#0c0a09"
	},
	Soho: {
		reference: "#7f8084",
		s0: "#ffffff",
		s50: "#ececec",
		s100: "#dedfdf",
		s200: "#c4c4c6",
		s300: "#adaeb0",
		s400: "#97979b",
		s500: "#7f8084",
		s600: "#6a6b70",
		s700: "#55565b",
		s800: "#3f4046",
		s900: "#2c2c34",
		s950: "#16161d"
	},
	Viva: {
		reference: "#666769",
		s0: "#ffffff",
		s50: "#f3f3f3",
		s100: "#e7e7e8",
		s200: "#cfd0d0",
		s300: "#b7b8b9",
		s400: "#9fa1a1",
		s500: "#87898a",
		s600: "#6e7173",
		s700: "#565a5b",
		s800: "#3e4244",
		s900: "#262b2c",
		s950: "#0e1315"
	},
	Ocean: {
		reference: "#828787",
		s0: "#ffffff",
		s50: "#fbfcfc",
		s100: "#F7F9F8",
		s200: "#EFF3F2",
		s300: "#DADEDD",
		s400: "#B1B7B6",
		s500: "#828787",
		s600: "#5F7274",
		s700: "#415B61",
		s800: "#29444E",
		s900: "#183240",
		s950: "#0c1920"
	},
	Taupe: {
		reference: "#7d7468",
		s0: "#ffffff",
		s50: "#faf8f6",
		s100: "#f2eeea",
		s200: "#e4ddd6",
		s300: "#d0c6bc",
		s400: "#a89e94",
		s500: "#7d7468",
		s600: "#5e564c",
		s700: "#4a433b",
		s800: "#322d28",
		s900: "#211d19",
		s950: "#110f0c"
	},
	Mauve: {
		reference: "#7e7082",
		s0: "#ffffff",
		s50: "#faf8fa",
		s100: "#f4f0f5",
		s200: "#e8dfe9",
		s300: "#d5c9d7",
		s400: "#ad9db0",
		s500: "#7e7082",
		s600: "#5d5261",
		s700: "#483f4c",
		s800: "#312a34",
		s900: "#201c22",
		s950: "#100e11"
	},
	Mist: {
		reference: "#6b7a94",
		s0: "#ffffff",
		s50: "#f8fafe",
		s100: "#eef2fa",
		s200: "#dde4f0",
		s300: "#c5cfe0",
		s400: "#97a4bb",
		s500: "#6b7a94",
		s600: "#4e5b72",
		s700: "#3c475a",
		s800: "#283142",
		s900: "#1a2130",
		s950: "#0c1018"
	},
	Olive: {
		reference: "#767e6c",
		s0: "#ffffff",
		s50: "#fafbf8",
		s100: "#f2f4ee",
		s200: "#e3e7dc",
		s300: "#cfd5c4",
		s400: "#a3ab96",
		s500: "#767e6c",
		s600: "#575e4f",
		s700: "#43493c",
		s800: "#2e3228",
		s900: "#1e211a",
		s950: "#0f100c"
	}
});
var surfaces = Object.freeze(new Map(Object.entries(entries)));
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/saver.ts
var Saver = class {
	static keyName = "quasar-big-bang-theme";
	static serializerSeparator = "|";
	static save(primaryLabel, surfaceLabel) {
		localStorage.setItem(this.keyName, `${primaryLabel}${this.serializerSeparator}${surfaceLabel}`);
	}
	static load() {
		return localStorage.getItem(this.keyName)?.split(this.serializerSeparator) ?? ["Emerald", "Slate"];
	}
	constructor() {}
};
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/default-props.ts
function setupDefaultProps() {
	const defaultTransitionDuration = 150;
	const transitionShow = "fade";
	const transitionHide = "fade";
	const expandIcon = "keyboard_arrow_down";
	const expandIcon2 = "chevron_right";
	QLayout_default.props.view = {
		type: String,
		default: "lHh LpR fFf"
	};
	QBtn_default.props.unelevated = {
		type: Boolean,
		default: true
	};
	QBtn_default.props.noCaps = {
		type: Boolean,
		default: true
	};
	QBtn_default.props.dense = {
		type: Boolean,
		default: true
	};
	QBtnGroup_default.props.unelevated = {
		type: Boolean,
		default: true
	};
	QBtnDropdown_default.props.unelevated = {
		type: Boolean,
		default: true
	};
	QBtnDropdown_default.props.noCaps = {
		type: Boolean,
		default: true
	};
	QBtnDropdown_default.props.dense = {
		type: Boolean,
		default: true
	};
	QBtnDropdown_default.props.dropdownIcon = {
		type: String,
		default: expandIcon
	};
	QBtnToggle_default.props.unelevated = {
		type: Boolean,
		default: true
	};
	QBtnToggle_default.props.noCaps = {
		type: Boolean,
		default: true
	};
	QBtnToggle_default.props.dense = {
		type: Boolean,
		default: true
	};
	QCard_default.props.bordered = {
		type: Boolean,
		default: true
	};
	QMenu_default.props.transitionDuration.default = defaultTransitionDuration;
	QHeader_default.props.bordered = {
		type: Boolean,
		default: true
	};
	QDrawer_default.props.bordered = {
		type: Boolean,
		default: true
	};
	QItem_default.props.dense = {
		type: Boolean,
		default: true
	};
	QExpansionItem_default.props.dense = {
		type: Boolean,
		default: true
	};
	QExpansionItem_default.props.denseToggle = {
		type: Boolean,
		default: false
	};
	QExpansionItem_default.props.duration = {
		type: [Number, String],
		default: defaultTransitionDuration
	};
	QExpansionItem_default.props.expandIcon = {
		type: String,
		default: expandIcon
	};
	QIcon_default.props.size = {
		type: String,
		default: "20px"
	};
	QTabs_default.props.noCaps = {
		type: Boolean,
		default: true
	};
	QTab_default.props.noCaps = {
		type: Boolean,
		default: true
	};
	QDate_default.props.minimal = {
		type: Boolean,
		default: true
	};
	QList_default.props.dense = {
		type: Boolean,
		default: true
	};
	QField_default.props.dense = {
		type: Boolean,
		default: true
	};
	QField_default.props.outlined = {
		type: Boolean,
		default: true
	};
	QField_default.props.hideBottomSpace = {
		type: Boolean,
		default: true
	};
	QInput_default.props.dense = {
		type: Boolean,
		default: true
	};
	QInput_default.props.outlined = {
		type: Boolean,
		default: true
	};
	QInput_default.props.hideBottomSpace = {
		type: Boolean,
		default: true
	};
	QSelect_default.props.dense = {
		type: Boolean,
		default: true
	};
	QSelect_default.props.outlined = {
		type: Boolean,
		default: true
	};
	QSelect_default.props.optionsDense = {
		type: Boolean,
		default: true
	};
	QSelect_default.props.hideBottomSpace = {
		type: Boolean,
		default: true
	};
	QSelect_default.props.dropdownIcon = {
		type: String,
		default: expandIcon
	};
	QToggle_default.props.dense = {
		type: Boolean,
		default: true
	};
	QRadio_default.props.dense = {
		type: Boolean,
		default: true
	};
	QUploader_default.props.bordered = {
		type: Boolean,
		default: true
	};
	QTooltip_default.props.transitionDuration.default = defaultTransitionDuration;
	QTooltip_default.props.transitionShow.default = transitionShow;
	QTooltip_default.props.transitionHide.default = transitionHide;
	QBanner_default.props.dense = {
		type: Boolean,
		default: true
	};
	QDialog_default.props.transitionDuration.default = defaultTransitionDuration;
	QDialog_default.props.transitionShow = {
		type: String,
		default: transitionShow
	};
	QDialog_default.props.transitionHide = {
		type: String,
		default: transitionHide
	};
	QTree_default.props.dense = {
		type: Boolean,
		default: true
	};
	QTree_default.props.duration.default = defaultTransitionDuration;
	QTree_default.props.noConnectors = {
		type: Boolean,
		default: true
	};
	QTree_default.props.icon = {
		type: String,
		default: expandIcon2
	};
}
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/core/big-bang-theme.ts
/**
* Injected class for managing theme
* Shall be used in components by using the 'inject' method from vue
*/
var BigBangTheme = class {
	static _primary = "Emerald";
	static _surface = "Slate";
	static _saveStrategy = "none";
	/**
	* Keep this for internal behaviour
	*/
	constructor() {}
	/**
	* Set the primary color for the entire app.
	* This function calls the trySaveTheme() method.
	*
	* @param primaryLabel Label of the primary color
	*/
	static setPrimary(primaryLabel) {
		const primary = primaries.get(primaryLabel);
		if (!primary) return;
		this._primary = primaryLabel;
		for (const entry of Object.entries(primary)) document.documentElement.style.setProperty(`--primary-${entry[0].replace("p", "")}`, entry[1]);
		this.trySaveTheme();
	}
	/**
	* Get current primary label
	*/
	static getPrimary() {
		return this._primary;
	}
	/**
	* Set the primary color for the entire app.
	* This function calls the trySaveTheme() method.
	*
	* @param surfaceLabel Label of the surface color
	*/
	static setSurface(surfaceLabel) {
		const surface = surfaces.get(surfaceLabel);
		if (!surface) return;
		this._surface = surfaceLabel;
		for (const entry of Object.entries(surface)) document.documentElement.style.setProperty(`--surface-${entry[0].replace("s", "")}`, entry[1]);
		this.trySaveTheme();
	}
	/**
	* Get current surface label
	*/
	static getSurface() {
		return this._surface;
	}
	/**
	* Set save mode
	*
	* @param strategy Strategy for the save mode
	*/
	static setSaveMode(strategy) {
		this._saveStrategy = strategy;
	}
	/**
	* Try to save the theme depending on the save mode
	* If save mode is set to 'none', this will do nothing
	*/
	static trySaveTheme() {
		if (this._saveStrategy === "none") return false;
		Saver.save(this._primary, this._surface);
		return true;
	}
	/**
	* Try to load the theme depending on the save mode
	* If the save mode is set to 'none', this will do nothing
	* If the load result is empty, the theme will be set with the default primary and surface colors
	*/
	static tryLoadTheme() {
		if (this._saveStrategy === "none") return false;
		const themeData = Saver.load();
		this.setPrimary(themeData[0]);
		this.setSurface(themeData[1]);
		return true;
	}
	/**
	* Get the current save strategy
	*/
	static getSaveMode() {
		return this._saveStrategy;
	}
	static setupDefaultProps() {
		setupDefaultProps();
	}
};
//#endregion
//#region node_modules/quasar-app-extension-big-bang/src/index.ts
/**
* Quasar App Extension index/runner script
* (runs on each dev/build)
*
* Docs: https://quasar.dev/app-extensions/development-guide/index-api
*/
var src_default = defineIndexScript((api) => {
	api.extendQuasarConf(() => ({ boot: ["~quasar-app-extension-big-bang/src/runtime/boot.register.ts"] }));
	api.extendQuasarConf((conf) => {
		if (conf.framework?.config) conf.framework.config.ripple = false;
	});
	const registerDescrApiByLabel = (label) => {
		api.registerDescribeApi(label, `./generated/components/${label}.json`);
	};
	registerDescrApiByLabel("QBBThemePicker");
	registerDescrApiByLabel("QBBLabel");
	registerDescrApiByLabel("QBBTime");
});
//#endregion
export { BigBangTheme, src_default as default, primaries, surfaces };
