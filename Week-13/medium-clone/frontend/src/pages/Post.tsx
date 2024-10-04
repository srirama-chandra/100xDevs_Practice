import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { Heading } from "../components/Heading"
import { TextEditor } from "../components/TextEditor"
import { blogPostType } from "@sriramachandra/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


export const Post = () => {

    const [postInput,setPostInput] = useState<blogPostType>({title:"",content:""});

    const navigate = useNavigate();

    async function publishPost(){
        try{
            await axios.post(`${BACKEND_URL}/blog/`,postInput,{headers:{
                Authorization: localStorage.getItem("token"),
            }});
            navigate('/blogs');
        }
        catch(e)
        {
            alert("Something Went Wrong")
        }

    }

    return <div>

        <AppBar/>

        <div className="mt-6 mx-40">

            <div className="flex justify-center mb-6"><Heading label="Publish A Post"></Heading></div>

            <input type="text" onChange={ (e) => {
                setPostInput({
                    ...postInput,
                    title:e.target.value
                })
            }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title"/>
            
            <div className="mt-3"> <TextEditor onChange={ (e) => {
                setPostInput({
                    ...postInput,
                    content:e.target.value
                })
            }}></TextEditor> </div>

            <div className="flex justify-center">
                <button type="button" onClick={publishPost} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-20 py-2.5 me-2 mb-2">Publish</button>
            </div>

        </div>

    </div>
}