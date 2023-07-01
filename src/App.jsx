import "./sass/App.scss"
import Header from "./components/Header"
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div>
      <header className="header position-sticky">
        <Header></Header>
      </header>
      <main className="">
        <Home></Home>
      </main>
    </div>
  )
}

export default App
