import { Link } from "react-router-dom"

export default function Navbar () {
  return (
    <header className="w-full h-[60px] flex items-center justify-between mb-10 px-6 text-lg">
      <nav className="flex gap-6">
        <Link to='/'>About</Link>
        <Link to='/Home'>Blog</Link>
        <Link to='/Posts'>Posts</Link>
      </nav>
      <Link className="py-1 px-6 rounded-3xl border-2 border-primary hover:bg-primary hover:text-background transition-colors duration-300">Author</Link>
    </header>
  )
}