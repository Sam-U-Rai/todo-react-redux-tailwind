import AddTodo from "./components/AddTodo";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <AddTodo />
          <Tabs />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
