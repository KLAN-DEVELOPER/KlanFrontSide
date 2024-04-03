import {ref} from "vue";


export const useDropDown = () => {
    const isOpen = ref(false);

    const toggleList = () => {
        isOpen.value = !isOpen.value
    }

    const hideList = () => {
        isOpen.value = false
    }
    return {isOpen, toggleList, hideList}
}