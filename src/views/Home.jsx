import pikachu from '../assets/pikachu.png'

const Home = () => {
  return (
    <div className='Home'>
    <h1>Bienvenido maestro pokemón</h1>
    <img className='pikachu' src={pikachu} alt="Pikachu" />
    </div>
  )
}

export default Home