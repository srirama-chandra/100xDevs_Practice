
type EventType = 'click' | 'scroll' | 'mousemove' ;

type ExcludedType = Exclude<EventType,'mousemove'>;

function displayEvent(event:ExcludedType)
{
    console.log(event);
}

displayEvent("scroll");