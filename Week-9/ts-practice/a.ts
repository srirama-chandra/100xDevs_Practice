
function runAfter1S(fn : () => void)
{
    setTimeout(fn,2000);
}

runAfter1S(()=>{console.log("Hello User")});