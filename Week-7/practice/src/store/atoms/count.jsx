import {atom, atomFamily, selector, selectorFamily} from 'recoil'
import axios from 'axios'

const TODOS = [
    {
        id:1,
        title:"Go To Gym",
        desc:"From 9-10 PM"
    },
    {
        id:2,
        title:"Do DSA",
        desc:"From 9-10 PM"
    }
]

export const todoAtomFamily = atomFamily({

    key:"todoAtomFamily",
    default : selectorFamily({
        key:"todoSelectorFamily",
        get: (id) => async ({get}) =>{ 
            const todoData = await axios.get(`url`);
            return todoData.data.todo;
        }
    })

})