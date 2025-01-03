import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
const App = () => {

  const user = true

  return (
    <div className="App">
      <header className="container">
        {
          user ? (
            <>
              <List />
              <Chat />
              <Detail />
            </>
          ) : (
            <Login />
          )
        }
        <Notification/>


      </header>
    </div>
  );
}

export default App;
