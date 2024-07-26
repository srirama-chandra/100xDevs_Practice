import {atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'

export const todoAtomFamily= atomFamily({
    key:"todoAtomFamily",
    default: selectorFamily({
        key:"todoSelectorFamily",
        get: (id) => async ({get}) =>{ 
            const res= await axios.get(`url`);
            return res.data.todo;
        }
    })
})
