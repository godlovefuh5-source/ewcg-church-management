import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <h1>EWCG Church Management</h1>
      </header>
      
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2024 Enlighten Word Christian Gathering. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MainLayout
