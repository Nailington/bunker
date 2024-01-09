import { Home, LayoutGrid, LogOut, Settings } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Plugin } from '@/lib/pluginloader'
export default function Navbar({ loadedPlugins }: { loadedPlugins: Plugin[] }) {
  const items = [
    {
      icon: <Home className="group-active:scale-90 transition-all duration-300 text-2xl" />,
      tooltip: 'Home',
      href: '/',
      position: 'top'
    },
    // {
    //   icon: <Library className="bx bx-user group-active:scale-90 transition-all duration-300 text-2xl" />,
    //   tooltip: 'Library',
    //   href: '/library'
    // },
    {
      icon: <LayoutGrid className="bx bx-user group-active:scale-90 transition-all duration-300 text-2xl" />,
      tooltip: 'Plugins',
      href: '/plugins',
      position: 'top'
    }
  ]

  useEffect(() => {
    loadedPlugins.forEach((plugin) => {
      if (plugin.page && plugin.icon) {
      }
    })
  }, [loadedPlugins])
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <TooltipProvider>
      <div className="w-16 h-screen bg-zinc-800 flex flex-col justify-between fixed left-0 top-0">
        <div>
          <div className="font-extrabold text-3xl bg-zinc-700 hover:bg-sky-600 transition-colors duration-150 aspect-square m-3 rounded-lg flex items-center justify-center cursor-pointer">B</div>
          {items.map((item, index) => {
            return (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <div
                    onClick={() => {
                      navigate(item.href)
                    }}
                    className={`font-bold hover:bg-zinc-700 ${location.pathname == item.href && 'bg-zinc-600'} transition-colors duration-150 aspect-square flex items-center justify-center cursor-pointer group`}
                  >
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
        <div>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="font-bold hover:bg-zinc-700 transition-colors duration-150 aspect-square flex items-center justify-center cursor-pointer group">
                <LogOut className="group-active:scale-90 transition-all duration-300" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Exit Safely</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="font-bold hover:bg-zinc-700 transition-colors duration-150 aspect-square flex items-center justify-center cursor-pointer group">
                <Settings className="group-active:scale-90 transition-all duration-300" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}
