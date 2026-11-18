import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";

export default function TodoDetail({ todos, updateTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-3 text-xs">
        <p>Tugas tidak ditemukan.</p>
        <button onClick={() => navigate("/")} className="rounded bg-red-700 px-4 py-1.5 text-white">
          Kembali
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="grid w-full max-w-xl grid-cols-[1.4fr_1fr] gap-6 rounded-lg border border-gray-200 p-6 text-xs shadow-sm">
        <div>
          <h2 className="text-sm font-bold">Judul</h2>
          <p className="mb-3">{todo.title}</p>
          <h2 className="text-sm font-bold">Deskripsi</h2>
          <div className="min-h-24 rounded border border-indigo-200 p-2">{todo.description}</div>
        </div>
        <div>
          <h2 className="text-sm font-bold">Status</h2>
          <p className="mb-2">{todo.status}</p>
          <h2 className="text-sm font-bold">Prioritas</h2>
          <p className="mb-2">{todo.priority}</p>
          <h2 className="text-sm font-bold">Deadline</h2>
          <p className="mb-3">{todo.deadline}</p>
          <div className="flex gap-2">
            <button onClick={() => navigate("/")} className="rounded bg-red-700 px-3 py-1.5 text-white hover:bg-red-800">
              Kembali
            </button>
            <button onClick={() => setShowEdit(true)} className="rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">
              Update
            </button>
          </div>
        </div>
      </div>

      {showEdit && (
        <Modal title="Update Todo" onClose={() => setShowEdit(false)}>
          <TodoForm
            initial={todo}
            submitLabel="Update"
            onCancel={() => setShowEdit(false)}
            onSubmit={(data) => {
              updateTodo(todo.id, data);
              setShowEdit(false);
            }}
          />
        </Modal>
      )}
    </main>
  );
}
