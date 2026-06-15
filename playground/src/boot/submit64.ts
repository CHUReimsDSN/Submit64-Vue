import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormBindings({
    fields: {
        string: {
            outlined: true,
            dense: true,
            color: 'purple'
        },
        color: {
            input: {
                outlined: true,
                color: 'red'
            },
            icon: {
                name: 'star',
                color: 'yellow',
                size: 'lg'
            }
        }
    }
})

console.log(Submit64.getGlobalFormBind().fields.color.input)
