import "./sass/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Home from "./components/Home"
import ArticleCard from "./components/ArticleCard"

function App() {
  return (
    <div>
      <header className="header position-sticky">
        <Header></Header>
      </header>
      <main className="">
        <Home></Home>
        <div id="articles">
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
        </div>
      </main>
    </div>
  )
}

export default App
