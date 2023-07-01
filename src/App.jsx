import "./sass/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Home from "./components/Home"
import CardSection from "./components/CardSection"

function App() {
  return (
    <div>
      <header className="header position-sticky">
        <Header></Header>
      </header>
      <main className="">
        <Home></Home>
        <CardSection></CardSection>
      </main>
    </div>
  )
}

export default App
