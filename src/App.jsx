import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { dummyTodos } from "./data/dummyTodos";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import Toast from "./components/Toast";

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const notify = (message, type = "success") => {
    clearTimeout(timer.current);
    setToast({ message, type });
    timer.current = setTimeout(() => setToast(null), 2500);
  };

  const addTodo = (data) => {
    const id = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { ...data, id }]);
    notify("Tugas berhasil ditambahkan");
  };

  const updateTodo = (id, data) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...data, id } : t)));
    notify("Tugas berhasil diperbarui");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    notify("Tugas berhasil dihapus");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />} />
        <Route path="/todo/:id" element={<TodoDetail todos={todos} updateTodo={updateTodo} />} />
        <Route path="*" element={<p className="p-8 text-xs">Halaman tidak ditemukan.</p>} />
      </Routes>
      <Toast toast={toast} />
    </>
  );
}
