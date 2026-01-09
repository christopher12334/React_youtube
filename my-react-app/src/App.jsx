import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="BenDover" age={21} isStudent={true}/>
      <Header/>
      <Button/>
      <Food/>
      <Footer/>
    </>
  )
}

export default App
