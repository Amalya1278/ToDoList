import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoList } from "./components/todo-list";
//controlled(statei popoxutyamb poxvum e nayev componenty) and uncontrolled components, inputneri het ashxatelu hamar
function App() {
  return (
    <>
      <TodoList></TodoList>
    </>
  );
}

export default App