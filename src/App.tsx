import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import List from "./components/List";
import FormCreate from "./components/FormCreate";

import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="header-area">
          <Header title="Lista de Tarefas" />
          <SubHeader subtitle="Crie uma tarefa a baixo" />
        </div>

        <div className="add-area">
          <FormCreate />
        </div>

        <div className="list-area">
          <List />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
