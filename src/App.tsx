import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import './App.css'

const App: React.FC = () => {

  return (
    <>
      <Header/>
      <Todos/>
      <Footer />
    </>
  )
}

export default App
