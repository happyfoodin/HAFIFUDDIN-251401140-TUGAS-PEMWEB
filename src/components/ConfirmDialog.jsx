import Modal from "./Modal";

export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <Modal title="Konfirmasi Hapus" onClose={onCancel}>
      <p className="mb-4 text-center text-xs">{message}</p>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <button onClick={onCancel} className="rounded bg-gray-500 py-1.5 text-white hover:bg-gray-600">
          Batal
        </button>
        <button onClick={onConfirm} className="rounded bg-red-700 py-1.5 text-white hover:bg-red-800">
          Hapus
        </button>
      </div>
    </Modal>
  );
}
