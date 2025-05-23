import React from 'react'
import { useTaskStore } from '../store/tasks'
import { useState } from 'react'

export default function Tasks() {
  const { tasks, addTask, toggleTask, selectedDate } = useTaskStore()
  const [title, setTitle] = useState('')

  const filtered = tasks.filter(
  (t) => t.date === selectedDate.toDateString()
)

  const handleAdd = () => {
    if (!title.trim()) return
    addTask({ title })
    setTitle('')
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Minhas Tarefas</h2>

      <div className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-2 py-1 border rounded text-white"
          placeholder="Nova tarefa"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-1 rounded">
          Adicionar
        </button>
      </div>

        <ul className="space-y-1">
            {filtered.length === 0 && <li className="text-sm italic">Nenhuma tarefa neste dia.</li>}
            {filtered.map((task) => (
                <li key={task.id}>
                <label className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    />
                    <span className={task.done ? 'line-through' : ''}>{task.title}</span>
                </label>
                </li>
            ))}
        </ul>

    </div>
  )
}
