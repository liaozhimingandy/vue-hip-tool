import {defineStore} from "pinia";
import {ref} from 'vue';


export const appStore = defineStore({
    id: "appStore",
    state: () => {
        const APP_BASE_URL = ref<string>();

        return {APP_BASE_URL}
    },
    actions: {
        enabled: true,
        strategies: [
            {
                key: 'appStore',
                storage: localStorage,
            },
        ],
    },
})