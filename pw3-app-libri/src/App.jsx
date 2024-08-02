import './App.css'
import CardBooks from './components/CardBooks'
 
 
function App() {
 
 
  return (
    <>
      <CardBooks
      titulo ='O caçador de aço'
      autor= 'Isaac Asimov'
      />
       <CardBooks
      titulo ='Crime e Castigo'
      autor= 'Fyodor Dostoyevski'
      />
       <CardBooks
      titulo ='Eu sou um gato'
      autor= 'Natsume Souseki'
      />
    </>
  )
}
 
export default App