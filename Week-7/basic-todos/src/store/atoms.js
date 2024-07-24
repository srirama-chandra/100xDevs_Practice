import {atomFamily} from 'recoil'

const TODOS=[{
    id:1,
    title:"Go To Gym"
},{
    id:2,
    title:"Do DSA"
},{
    id:3,
    title:"Play Tennis"
}]

export const todoAtomFamily= atomFamily({
    key:"todoAtomFamily",
    default: (id) => { return  TODOS.find( element => element.id===id ) }
})
