import './index.css'
import pageNotFound from './../../assets/images/pageNotFound.gif'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <img src={pageNotFound} alt='404 Error' />
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
    </div>
  )
}

export default PageNotFound
