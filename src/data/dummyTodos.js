// Struktur data sesuai ketentuan (dan siap dipakai untuk REST API nanti):
// id, title, description, priority, deadline, status
export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];

export const dummyTodos = [
  {
    id: 1,
    title: "Menyelesaikan Laporan Praktikum",
    description: "Menyusun laporan praktikum lengkap dengan analisis dan kesimpulan",
    priority: "high",
    deadline: "2026-11-25",
    status: "in progress",
  },
  {
    id: 2,
    title: "Belajar Persiapan UAS",
    description: "Mengulang materi dari pertemuan awal sampai akhir dan mengerjakan soal latihan",
    priority: "high",
    deadline: "2026-12-05",
    status: "to-do",
  },
  {
    id: 3,
    title: "Merapikan Repository GitHub",
    description: "Menambahkan README dan menghapus file yang tidak terpakai",
    priority: "medium",
    deadline: "2026-11-30",
    status: "to-do",
  },
  {
    id: 4,
    title: "Mengerjakan Tugas Kelompok",
    description: "Menyelesaikan bagian masing-masing dan menggabungkannya menjadi satu",
    priority: "medium",
    deadline: "2026-11-22",
    status: "in progress",
  },
  {
    id: 5,
    title: "Membaca Dokumentasi React Router",
    description: "Memahami routing dasar, useParams, dan useNavigate",
    priority: "low",
    deadline: "2026-12-10",
    status: "done",
  },
];
