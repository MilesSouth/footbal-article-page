import Nav from "react-bootstrap/Nav"

const Header = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="logo h2 p-4">
        <span className="text-white">Atalay Ferit Özdemir</span>
      </div>
      <div className="nav p-4">
        <Nav variant="pills" defaultActiveKey="/home" className="gap-2 ">
          <Nav.Item>
            <Nav.Link href="#home" className="text-white">
              Anasayfa
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#articles" className="text-white">
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
    </div>
  )
}

export default Header
