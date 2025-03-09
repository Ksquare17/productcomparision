
import './App.css'
import { Routes, Route } from "react-router";
import Layout from './components/layout/BaseLayout';
import View from './components/product/view/View';
import Compare from './components/product/compare/Compare';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<View />} />
          <Route path="compare" element={<Compare />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
