import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormBindings({
    fields: {
        string: {
            outlined: true,
            dense: true,
            color: 'red'
        }
    }
})

console.log(Submit64.getGlobalFormBind())
