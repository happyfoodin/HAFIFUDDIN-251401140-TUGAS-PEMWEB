export default function Toast({ toast }) {
  if (!toast) return null;
  const color = toast.type === "error" ? "bg-red-700" : "bg-green-700";
  return (
    <div
      role="status"
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded px-4 py-2 text-xs text-white shadow-lg ${color}`}
    >
      {toast.message}
    </div>
  );
}
