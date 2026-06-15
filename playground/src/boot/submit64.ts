import { Submit64 } from 'submit64-vue';

Submit64.registerGlobalFormBindings({
    fields: {
        string: {
            outlined: true,
            dense: true,
            color: 'purple'
        },
        color: {
            _input: {
                outlined: true,
                color: 'red'
            },
            _icon: {
                name: 'star',
                color: 'yellow',
                size: 'lg'
            }
        }
    }
})

console.log(Submit64.getGlobalFormBind().fields.color._input)
