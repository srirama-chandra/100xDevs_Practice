
export const Button = ({children,type}:any) => {
    return (
        <div>
            <button type={type} className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                {children}
            </button>
        </div>
    )
}