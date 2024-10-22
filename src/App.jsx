import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import QuotesBox from './Components/QuotesBox'




function App() {


  return (
  <>
  <div
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    >
      
    <QuotesBox></QuotesBox>
    </div>
  </>
  )
}

export default App
