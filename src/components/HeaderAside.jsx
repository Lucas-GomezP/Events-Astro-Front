import { useEffect, useState } from "react"
import {Home, Search} from '../icons/IconsReact'

export const HeaderAside = () => {
  const [showAsideMenu, setShowAsideMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState()
  let wValue = undefined
  if (typeof window !== 'undefined') {
    wValue = window.innerWidth
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newWindowWidth = window.innerWidth < 1024
      setWindowWidth(newWindowWidth)
    }
  }, [wValue])
  const handleShowMenu = () => {
    const newState = !showAsideMenu
    setShowAsideMenu(newState)
  }
  return (
    <>
      <header className="bg-zinc-800 [grid-area:header] min-h-12 rounded-lg p-4">
        HEADER
        <button
          id="btn-aside-menu"
          className="bg-green-600 p-2 relative lg:hidden "
          onClick={handleShowMenu}
        >
          Aside
        </button>
      </header>

      <aside
        id="aside-container"
        className={`bg-zinc-800
        row-start-2 row-end-2 col-start-1
        lg:flex lg:flex-col lg:min-w-[280px]
        overflow-y-auto rounded-lg p-4 top-0 bottom-0 w-full z-50 
        ${showAsideMenu && windowWidth ? ' absolute z-20 col-span-3 ' : ' hidden'}`}
      >
        <nav>
          <div>
            <ul class="flex flex-col gap-2">
              <SideMenuItem 
                href="/"
                showMenu={handleShowMenu}
              >
                <Home />
                Inicio
              </SideMenuItem>
              <SideMenuItem 
                href="/search/all-all-all-all-all"
                showMenu={handleShowMenu}
              >
                <Search />
                Buscar evento
              </SideMenuItem>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  )
}

const SideMenuItem = ({children, href, showMenu}) => {
  return (
    <li>
      <a href={href} class="text-zinc-400 flex items-center gap-2 text-xl font-bold hover:text-zinc-200 transition duration-300" onClick={showMenu}>
        {children}
      </a>
    </li>
  )
}