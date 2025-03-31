"use client"

export const Button = () => {
    return <div>
        <button className="bg-white text-black rounded-full px-4" onClick={()=>console.log("Clicked")}>Click Here</button>
    </div>
}