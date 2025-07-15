import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'

const App: React.FC = () => {

  return (
    <main className='app-container'>
      <Header/>
      <Todos/>
      <Footer />
    </main>
  )
}

export default App
