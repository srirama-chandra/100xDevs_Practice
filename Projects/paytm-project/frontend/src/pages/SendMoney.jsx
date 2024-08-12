import { Heading } from "../components/Heading"


export function SendMoney()
{
    return <div className="h-screen bg-gray-100 flex justify-center items-center">

       <div className="bg-white w-96 p-4 shadow-lg rounded-lg flex flex-col gap-4">

                <div className="text-center">
                    <Heading label={"Send Money"}></Heading>
                </div>

                <div className="flex items-center gap-2 px-4 pt-10">
                        <div className="flex justify-center items-center w-12 h-12 bg-green-500 rounded-full text-2xl text-white">A</div>
                        <div className="text-2xl font-semibold">Friend's Name</div>
                </div>

                <div className="space-y-2 px-4">
                        <label className="text-sm font-medium ">Amount (in Rs)</label>
                        <input type={"number"} placeholder={"Enter amount"} className="w-full h-10 border border-input rounded-md px-3 py-2 text-sm focus:ring-0 focus:ring-blue-100"></input>
                </div>

                <div className="px-4 pb-3">
                    <button className="bg-green-500 w-full rounded-md text-white text-sm font-medium px-4 py-2 hover:bg-green-600">Intiate Transfer</button>
                </div>

       </div>
        
    </div>
}