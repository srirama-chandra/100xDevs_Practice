import {atom, selector} from 'recoil'
import axios from 'axios'

export const notificationsAtom= atom({

    key:"notificationsAtom",
    default: selector({
        key:"notificationSelector",
        get: async ()=> {
            const notificationData= await axios.get('url');
            return notificationData.data;
        }
    })
})