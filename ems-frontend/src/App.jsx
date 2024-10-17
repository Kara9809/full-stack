import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <HeaderComponent />
      <ListEmployeeComponent />
      <FooterComponent />
    </>
  )
}

export default App
