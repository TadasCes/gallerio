import { Ref, ref, watch } from 'vue';

export default function (startVal: string, validators: Array<Function>, onValidate: any) {
    const input = ref(startVal);
    const errors: Ref<any> = ref([])
    watch(input, value => {
        errors.value = validators.map(validator => validator(value))
        console.log(errors)
        onValidate(value)
    });

    return {
        input,
        errors
    }
}