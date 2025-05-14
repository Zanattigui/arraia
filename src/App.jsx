import ComidasList from './comidasList/ComidasList'
import Bandeiras from "./bandeiras/Bandeiras";
import Header from "./header/Header"

function App() {

  return (
    <div className="min-h-screen bg-yellow-50">
      <Bandeiras/>
      <Header/>
      <ComidasList/>
    </div>
  )
}

export default App
