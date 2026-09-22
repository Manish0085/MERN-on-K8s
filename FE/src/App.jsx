import { Route, Routes } from 'react-router'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Toaster, toast } from "react-hot-toast"

const App = () => {
  return (
    <div className='relative h-full w-full'>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#FF9D0040_100%)]" /> */}
      <div className="absolute inset-0 -z-10 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"/>
      {/* <button onClick={() => toast.success('Congrats!')} className="text-red-500 p-4 bg-pink-300">Click me</button> */}
      {/* <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}
      <Toaster position="top-center" />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
    </div>
  )
}

export default App