import './header.css'

function Header() {
    return (
        <>
            <div id="f-container">
                <nav id='s-container'>
                    <h1 className='f-end'>Front-end Developer</h1>
                    <ul>
                        <li className='list'><a className='h-link' href="#home">Home</a></li>
                        <li className='list'><a className='h-link' href="#first-container">About</a></li>
                        <li className='list'><a className='h-link' href="#container-footer">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header