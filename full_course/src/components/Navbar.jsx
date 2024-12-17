import image from '../assets/react.svg'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={ image } alt="React logo" />
            <h1>ReactFacts</h1>
        </nav>
    )
}