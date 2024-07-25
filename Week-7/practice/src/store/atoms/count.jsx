import {atom, selector} from 'recoil'

export const countAtom= atom({
    key:"countAtom",
    default:0
})

export const countAtomSelector=selector({
    key:"countAtomSelector",
    get: ({get}) => {

         const value=get(countAtom);
         return value%2==0;

    }
})