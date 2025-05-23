import { create } from 'zustand'

export const useTaskStore = create((set) => ({
  tasks: [],
  selectedDate: new Date(),
  setDate: (date) => set({ selectedDate: date }),
  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { ...task, id: Date.now(), done: false, date: state.selectedDate.toDateString() },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    })),
}))
