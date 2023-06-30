import Header from "./components/Header"
import "./sass/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div>
      <header className="header position-sticky">
        <Header></Header>
      </header>

      <img
        src="https://cdn.pixabay.com/photo/2018/06/07/08/12/trophy-3459584_1280.jpg"
        alt=""
        className="main-img"
      />
    </div>
  )
}

export default App
