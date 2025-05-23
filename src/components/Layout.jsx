import React from 'react'

export default function Layout({ children }) {
 
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      {/* Conteúdo principal */}
      <main className="flex-1 bg-white dark:bg-gray-900 p-6 text-gray-900 dark:text-gray-100 text-ce">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard de Tarefas</h1>
        </header>

        {children}
      </main>
    </div>
  )
}
