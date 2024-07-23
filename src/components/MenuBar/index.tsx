import { Link } from "react-router-dom"

const navigationMenu = [
  {
    id: 0,
    to: "/",
    description: "Home"
  },
  {
    id: 1,
    to: "/about",
    description: "About"
  },
  {
    id: 2,
    to: "/skills",
    description: "Skills"
  },
]

export const MenuBar = () => {
  return (
    <nav className="flex">
      <ul className="flex gap-6">
        {navigationMenu.map(item => (
          <Link to={item.to}>
            <li key={item.id} >{item.description}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
