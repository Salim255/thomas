import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='app-error'>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to='/'>back Home</Link>
    </div>
  )
}

export default Error