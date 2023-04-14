import {Link} from 'react-router-dom'

function Header(props) {
    return (
    <div>
        <h1>Header</h1>
        <Link to='create'>Create</Link>
        <Link to=''>Home</Link>
    </div>
    )
}

export default Header
