import './App.css'
import Admin from './components/Pages/Admin/Admin';
import Edit from './components/Pages/Edit/Edit';
import Post from './components/Pages/Post/Post';
import Layout from './layout'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="post" element={<Post />} />
          <Route path="edit" element={<Edit />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
