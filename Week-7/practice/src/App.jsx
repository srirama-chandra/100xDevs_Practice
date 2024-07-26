import { RecoilRoot , useRecoilValue } from "recoil";
import { notificationsAtom } from './store/atoms/count'

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

    return <div>
      <button>Home</button>
      <button>My Network {(notificationsObject.network>=100) ? "99+" : notificationsObject.network}</button>
      <button>Jobs {notificationsObject.jobs}</button>
      <button>Messages {notificationsObject.messaging}</button>
      <button>Notifications {notificationsObject.notifications}</button>
      <button>Me </button>
    </div>
}

export default App