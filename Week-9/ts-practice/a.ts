
function runAfter1S(fn : (a:number) => void,a:number)
{
    setTimeout(() => fn(a),2000);
}

runAfter1S((a:number)=>{console.log(a)},40);