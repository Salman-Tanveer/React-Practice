import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
      <nav>
      <Link to="About">About</Link>
      <Link to="Contact">Contact</Link>
    </nav>
    </div>
  )
}
