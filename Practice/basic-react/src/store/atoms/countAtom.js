import { atom, atomFamily, selectorFamily } from "recoil";

const todos = [{id:1,title:"Math Class"},{id:2,title:"Science Class"}];

export const countAtomFamily = atomFamily({
    key:"countAtomFamily",
    default: (id) => todos.find( ( element ) => element.id==id ) 


})


export const newAtomFamily = atomFamily({
    key: "newAtomFamily",
    default : selectorFamily({
        key: "newAtomSelectorFamily",
        get : (id) => ({}) =>{
            //fetch call
        }
    })  
})