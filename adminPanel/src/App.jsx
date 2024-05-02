import { useReducer } from 'react';
import './App.css'
import Admin from './components/Pages/Admin/Admin';
import Edit from './components/Pages/Edit/Edit';
import Post from './components/Pages/Post/Post';
import Layout from './layout'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reducer from './components/Reducers/reducer';



function App() {

  const [state, dispatch] = useReducer(reducer,{
    datas: []
  })

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin state={state} dispatch={dispatch} />} />
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
