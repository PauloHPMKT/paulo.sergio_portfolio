import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_devmais.png';
import { MenuBar } from '../MenuBar';
import { Container } from '../template/Container';

export const MainHeader = () => {
  return (
    <header className='flex h-16 w-full bg-blue-400'>
      <Container className='w-full h-full justify-between items-center'>
        <div className='w-44'>
          <Link to="/">
            <img src={logo} alt="Logo Devmais" className='w-full' />
          </Link>
        </div>
        <MenuBar />
      </Container>
    </header>
  )
}
