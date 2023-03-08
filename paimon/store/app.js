import {defineStore } from 'pinia'

export const useAppStore = defineStore('app',{
    state:() =>({
        client: null,
        commandsActionMaps:null,
    }),
    getters:{},
    actions:{},
})