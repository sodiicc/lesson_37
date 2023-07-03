import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'
import About from './components/About'

function PageNotFound() {
  return <h1>Page not found</h1>
}

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/contacts" element={<h1>Contacts Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/about/:id" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
