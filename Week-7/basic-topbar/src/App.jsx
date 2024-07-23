import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalCountAtom } from './store/atom/count'

function App() {
  return (
    <div>
      <RecoilRoot> <AppBar /> </RecoilRoot>
    </div>
  )
}

function AppBar()
{
    const networkCount=useRecoilValue(networkAtom);
    const jobCount=useRecoilValue(jobAtom);
    const messageCount=useRecoilValue(messageAtom);
    const notifcationCount=useRecoilValue(notificationAtom);
    const totalCount=useRecoilValue(totalCountAtom);
    return <div>
      <button>Home</button>
      <button>My Network {(networkCount>=100) ? "99+" : networkCount}</button>
      <button>Jobs {jobCount}</button>
      <button>Messages {messageCount}</button>
      <button>Notifications {notifcationCount}</button>
      <button>Me {totalCount}</button>
    </div>
}

export default App
