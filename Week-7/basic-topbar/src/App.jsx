import { RecoilRoot, useRecoilValue } from 'recoil'
import { notificationsAtom,totalCountSelector } from './store/atom/count'

function App() {
  return (
    <div>
      <RecoilRoot> <AppBar /> </RecoilRoot>
    </div>
  )
}

function AppBar()
{
    const notificationsObject=useRecoilValue(notificationsAtom);
    const totalCount=useRecoilValue(totalCountSelector);
    return <div>
      <button>Home</button>
      <button>My Network {(notificationsObject.network>=100) ? "99+" : notificationsObject.network}</button>
      <button>Jobs {notificationsObject.jobs}</button>
      <button>Messages {notificationsObject.messaging}</button>
      <button>Notifications {notificationsObject.notifications}</button>
      <button>Me {totalCount}</button>
    </div>
}

export default App
