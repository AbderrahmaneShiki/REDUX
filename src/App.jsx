import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [friends, setFriends] = useState([]);

  function addFriend(friend) {
    setFriends([friend, ...friends]);
  }

  return (
    <>
      <main>
        <Form addFriend={addFriend} />
        <List friends={friends} />
      </main>
    </>
  );
}

export default App;
