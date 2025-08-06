import { InjectionKey } from "vue";
import type { TSubmit64FormProvider } from "./models";

export const submit64FormProviderSymbol =
  Symbol() as InjectionKey<TSubmit64FormProvider>;
