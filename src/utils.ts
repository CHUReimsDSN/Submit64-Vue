import { InjectionKey } from "vue";
import type { TSubmit64FormProvider } from "./models";

export function getSubmit64FormProviderSymbol(uuid: string) {
  return Symbol(uuid) as InjectionKey<TSubmit64FormProvider>;
}
export function getSubmit64AssociationDataDefaultLimit() {
  return 20
}
