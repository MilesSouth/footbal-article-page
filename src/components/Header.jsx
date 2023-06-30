import Nav from "react-bootstrap/Nav"

const Header = () => {
  return (
    <header className="header">
      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="just-content-end gap-2"
      >
        <Nav.Item>
          <Nav.Link href="/home">Anasayfa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Yazılarım</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Hakkımda</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Ekip ve Destek</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header
