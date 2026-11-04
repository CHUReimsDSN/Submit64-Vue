---
title: BigBang
icon: rocket
---

# BigBang

### Utiliser les composants de BigBang

```ts [submit64.ts]
import { Submit64 } from 'submit64-vue'

Submit64.registerGlobalFormSetting({
  enableQuasarBigBangComponents: true
})
```


### Utiliser les bindings de BigBang

```ts [submit64.ts]
import { BigBangTheme } from 'quasar-app-extension-big-bang'
import { Submit64 } from 'submit64-vue'

Submit64.registerGlobalFormSetting({
  getBindingsCb: BigBangTheme.getPropsByComponent.bind(this)
})
```
