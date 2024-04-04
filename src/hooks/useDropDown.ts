import {ref} from "vue";


export const useDropDown = () => {
    const isOpen = ref(false);

    const showList = () => {
        isOpen.value = true
    }

    const hideList = () => {
        isOpen.value = false
    }
    return {isOpen, showList, hideList}
}