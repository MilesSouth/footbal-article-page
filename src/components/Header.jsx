import Nav from "react-bootstrap/Nav"

const Header = () => {
  return (
    <header className="header d-flex p-2 align-items-center justify-content-between">
      <div className="logo h2 p-4">
        <span className="text-white">Atalay Ferit</span>
      </div>
      <div className="nav">
        <Nav variant="pills" defaultActiveKey="/home" className="gap-2">
          <Nav.Item>
            <Nav.Link href="#home" className="text-white">
              Anasayfa
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://aferit.medium.com"
              target="_blank"
              className="text-white"
            >
              Yazılarım
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about" className="text-white">
              Hakkımda
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#team" className="text-white">
              Ekip ve Destek
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  )
}

export default Header
