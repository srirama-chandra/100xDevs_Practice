import {atom, selector} from 'recoil'
import axios from 'axios'

export const notificationsAtom=atom({key:"notificationsAtom",
                                     default: selector({
                                                        key:"notificationsAtomSelector",
                                                        get: async ()=>{
                                                          const res=await axios.get("url");
                                                          return res.data;
                                                        }
                                                      })
                                    });

export const totalCountSelector=selector({key:"totalCountSelector",
                                        get:({get})=>{
                                        const notificationsObject= get(notificationsAtom)
                                        return notificationsObject.jobs+notificationsObject.messaging+notificationsObject.network+notificationsObject.notifications}
                                        });

