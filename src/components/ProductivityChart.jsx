import React from 'react'
import { useTaskStore } from '../store/tasks'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function ProductivityChart() {
  const { tasks } = useTaskStore()

  const done = tasks.filter((t) => t.done).length
  const pending = tasks.length - done

  const data = [
    { name: 'Concluídas', value: done },
    { name: 'Pendentes', value: pending },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Produtividade</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
