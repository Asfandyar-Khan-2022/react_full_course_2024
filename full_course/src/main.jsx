import { createRoot } from 'react-dom/client' 
import image from './assets/react.svg'
import './index.css'


const root = createRoot(document.getElementById('root'))
root.render(
  <Page />
)

function Page(){
  return (
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
  )
}

function Header(){
  return (
    <>
        <header>
          <img src={image} alt="logo"/>
          <nav className="nav-list">
            <ul>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    </>
  )
}

function MainContent(){
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>It's a powerful library</li>
        <li>It's a fun library</li>
      </ol>
    </>
  )
}

function Footer(){
  return (
    <>
      <footer>
      <small>&copy; 2023 Your Company. All rights reserved.</small>
      </footer>
    </>
  )
}