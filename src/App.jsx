import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const cards = data.map(item => {
  return (
    <Card 
          key={item.id}
          {...item}
      />
  )
})

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <section className='cards--list'>
            {cards}
        </section>
    </>
  )
}

export default App
