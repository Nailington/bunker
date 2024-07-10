import Home from './pages/home.tsx'
import Navbar from './components/navbar.tsx'
import Store from './pages/store.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Plugins from './pages/plugins.tsx'
import { useEffect } from 'react'
import { registerDefaultPlugins } from './lib/pluginloader.ts'
import PluginRouter from './pages/pluginrouter.tsx'
import { createRoot } from 'react-dom/client'

window.document.documentElement.classList.add('dark')

export default function App() {
  useEffect(() => {
    registerDefaultPlugins()
  }, [])

  return (
    <div className="flex bg-zinc-900">
      <HashRouter>
        <Navbar />
        <Toaster position="top-right" />
        <div className="w-[calc(100vw-4rem)] absolute right-0 top-0 h-screen">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Plugins />} path="/plugins" />
            <Route element={<PluginRouter />} path="/plugin/:plugin" />
            <Route element={<Store />} path="/store" />
          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
