import soccer from '../assets/soccer.png'

const Nav = () => {
    return (
        <nav>
            <button className="logo">
                <img src={soccer} alt="logo" />       
            </button>
        </nav>
   )     
}

export default Nav