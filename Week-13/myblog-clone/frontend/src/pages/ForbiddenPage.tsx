import { Link } from "react-router-dom"

export const ForbiddenPage = () => {
    return <div className="h-screen bg-white flex justify-center items-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">403</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, Authentication Failed. Please Login Again </p>
                        <Link to="/signin" className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Signin Page</Link>
                    </div>   
                </div>
            </div>
}