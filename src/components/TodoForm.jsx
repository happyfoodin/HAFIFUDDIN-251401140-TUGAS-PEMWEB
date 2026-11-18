import { useState } from "react";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "../data/dummyTodos";

const field =
  "w-full rounded border border-indigo-200 px-2 py-1 text-xs outline-none focus:border-blue-500";

export default function TodoForm({ initial, submitLabel, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    initial ?? {
      title: "",
      description: "",
      status: "to-do",
      priority: "low",
      deadline: "",
    }
  );
  const [errors, setErrors] = useState({});

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.title.trim()) err.title = "Judul wajib diisi";
    if (!form.deadline) err.deadline = "Deadline wajib diisi";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-xs">
      <div>
        <label className="mb-1 block font-bold">Judul</label>
        <input name="title" value={form.title} onChange={change} className={field} />
        {errors.title && <p className="mt-1 text-red-600">{errors.title}</p>}
      </div>

      <div>
        <label className="mb-1 block font-bold">Deskripsi</label>
        <textarea
          name="description"
          rows={3}
          value={form.description}
          onChange={change}
          className={field}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block font-bold">Status</label>
          <select name="status" value={form.status} onChange={change} className={field}>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block font-bold">Prioritas</label>
          <select name="priority" value={form.priority} onChange={change} className={field}>
            {PRIORITY_OPTIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block font-bold">Deadline</label>
        <input type="date" name="deadline" value={form.deadline} onChange={change} className={field} />
        {errors.deadline && <p className="mt-1 text-red-600">{errors.deadline}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 pt-1">
        <button type="button" onClick={onCancel} className="rounded bg-red-700 py-1.5 text-white hover:bg-red-800">
          Batal
        </button>
        <button type="submit" className="rounded bg-blue-600 py-1.5 text-white hover:bg-blue-700">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
