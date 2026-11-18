import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Trash2 } from "lucide-react";
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";
import ConfirmDialog from "../components/ConfirmDialog";

export default function TodoList({ todos, addTodo, deleteTodo }) {
  const navigate = useNavigate();
  const [showAdd, setShowAdd] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  return (
    <main className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <button
          onClick={() => setShowAdd(true)}
          className="rounded bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-700"
        >
          Tambah Todo
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="font-bold">
              <th className="px-3 py-2">Judul</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Prioritas</th>
              <th className="px-3 py-2">Deadline</th>
              <th className="px-3 py-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((t) => (
              <tr key={t.id} className="border-t border-gray-200">
                <td className="max-w-[200px] truncate px-3 py-3" title={t.title}>{t.title}</td>
                <td className="px-3 py-3">{t.status}</td>
                <td className="px-3 py-3">{t.priority}</td>
                <td className="px-3 py-3">{t.deadline}</td>
                <td className="px-3 py-3">
                  <div className="flex justify-center gap-1.5">
                    <button
                      aria-label={`Lihat detail ${t.title}`}
                      onClick={() => navigate(`/todo/${t.id}`)}
                      className="rounded bg-blue-600 p-1.5 text-white hover:bg-blue-700"
                    >
                      <Eye size={14} />
                    </button>
                    <button
                      aria-label={`Hapus ${t.title}`}
                      onClick={() => setToDelete(t)}
                      className="rounded bg-red-700 p-1.5 text-white hover:bg-red-800"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {todos.length === 0 && (
          <p className="py-10 text-center text-xs text-gray-500">
            Belum ada tugas. Klik "Tambah Todo" untuk membuat tugas pertama.
          </p>
        )}
      </div>

      {showAdd && (
        <Modal title="Tambah Todo" onClose={() => setShowAdd(false)}>
          <TodoForm
            submitLabel="Tambah"
            onCancel={() => setShowAdd(false)}
            onSubmit={(data) => {
              addTodo(data);
              setShowAdd(false);
            }}
          />
        </Modal>
      )}

      {toDelete && (
        <ConfirmDialog
          message={`Hapus tugas "${toDelete.title}"? Tindakan ini tidak dapat dibatalkan.`}
          onCancel={() => setToDelete(null)}
          onConfirm={() => {
            deleteTodo(toDelete.id);
            setToDelete(null);
          }}
        />
      )}
    </main>
  );
}
