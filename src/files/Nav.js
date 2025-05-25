// import React from 'react'
// import {Link , useLocation} from 'react-router-dom'

// function Nav() {
//     const location = useLocation() ;
//     return (
//         <nav className='container1'> 
//             <Link className={`${location.pathname === "/" ? "" : "li"}`} to="/">Log Out</Link>
//             <Link className={`${location.pathname === "/delete" ? "" : "li"}`} to="/delete">Delete</Link>
//             <Link className={`${location.pathname === "/studs" ? "" : "li"}`} to="/studs">Home</Link>
//             <Link className={`${location.pathname === "/update" ? "" : "li"}`} to="/update">Update</Link>
//             <Link className={`${location.pathname === "/create" ? "" : "li"}`} to="/create">Create</Link>
//         </nav>
//     )
// }

// export default Nav


import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-blue-900 text-white p-2 rounded focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
        </svg>
      </button>

      {/* Sidebar for mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 to-purple-900 shadow-xl z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex flex-col items-center py-10 px-4">
          <h3 className="text-2xl font-bold text-white mb-10">Menu</h3>
          <nav className="flex flex-col space-y-6 w-full">
            <Link
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
                location.pathname === "/" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
              }`}
              to="/"
              onClick={() => setOpen(false)}
            >
              Log Out
            </Link>
            <Link
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
                location.pathname === "/delete" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
              }`}
              to="/delete"
              onClick={() => setOpen(false)}
            >
              Delete
            </Link>
            <Link
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
                location.pathname === "/studs" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
              }`}
              to="/studs"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
                location.pathname === "/update" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
              }`}
              to="/update"
              onClick={() => setOpen(false)}
            >
              Update
            </Link>
            <Link
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
                location.pathname === "/create" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
              }`}
              to="/create"
              onClick={() => setOpen(false)}
            >
              Create
            </Link>
          </nav>
        </div>
      </aside>

      {/* Top nav for desktop/tablet */}
      <nav className="w-full bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg py-4 flex justify-center md:flex hidden">
        <div className="flex space-x-6">
          <Link
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              location.pathname === "/" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
            }`}
            to="/"
          >
            Log Out
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              location.pathname === "/delete" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
            }`}
            to="/delete"
          >
            Delete
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              location.pathname === "/studs" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
            }`}
            to="/studs"
          >
            Home
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              location.pathname === "/update" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
            }`}
            to="/update"
          >
            Update
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              location.pathname === "/create" ? "bg-white text-blue-900 shadow" : "text-white hover:bg-blue-800"
            }`}
            to="/create"
          >
            Create
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav