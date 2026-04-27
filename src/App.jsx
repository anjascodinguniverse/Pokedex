import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Pokedex</Link> | <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </div>
  )
}