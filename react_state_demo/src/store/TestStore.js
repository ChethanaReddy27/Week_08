import {create} from  'zustand'

//create store
export const useTest = create((set) => ({
    x:10,
    y:5,
    userObj: {
        name: "Chethana",
        age: 21
    },
    //functions to modify state
    incrementX: () => set((state) => ({x: state.x + 1})),
    decrementX: () => set((state) => ({x: state.x - 1})),
    incrementXByValue: (v) => set((state) => ({x: state.x + v})),
    updateObj: () => set(state => ({userObj: {...state.userObj, age: 20}})),
    changeName: (newName) => set(state => ({userObj: {...state.userObj, name: newName}})),

    incrementY: () => set((state) => ({y: state.y + 1})),
}))