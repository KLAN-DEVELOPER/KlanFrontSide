import {defineStore} from "pinia";
import {ref} from "vue";


export const useNavigationAsideStore = defineStore('NavigationAsideStore', () => {
    const isDisplayed = ref(false)


    const showNavigationAside = () => isDisplayed.value = true

    const hideNavigationAside = () => isDisplayed.value = false

    const toggleNavigationAside = () => isDisplayed.value = !isDisplayed.value
    return {
        isDisplayed,
        showNavigationAside,
        hideNavigationAside,
        toggleNavigationAside
    }
})