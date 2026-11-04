import { BigBangTheme } from 'quasar-app-extension-big-bang'
import { Submit64 } from 'submit64-vue'

Submit64.registerGlobalFormSetting({
  getBindingsCb: BigBangTheme.getPropsByComponent.bind(this)
})
