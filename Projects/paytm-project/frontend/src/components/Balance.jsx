
export function Balance({value})
{
    return <div className="flex items-center">
        <div className="font-bold text-lg">Your Balance</div>
        <div className="font-semibold text-lg pl-4">Rs {value}</div>
    </div>
}