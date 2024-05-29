import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useUserDataStore = defineStore('UserDataStore', () => {
    const email = ref('d.konshin@gmail.com')

    const getEmailFirstLetter = computed(() => email.value[0])
    return {
        email,
        getEmailFirstLetter
    }
})