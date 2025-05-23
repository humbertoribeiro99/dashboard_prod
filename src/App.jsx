import React from 'react'
import Layout from './components/Layout'
import CalendarPanel from './components/CalendarPanel'
import Tasks from './components/Tasks'
import ProductivityChart from './components/ProductivityChart'

export default function App() {
  return (
    <Layout>
      <CalendarPanel />
      <Tasks />
      <ProductivityChart />
    </Layout>
  )
}
