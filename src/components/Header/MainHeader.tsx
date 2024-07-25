import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_devmais.png';
import { MenuBar } from '../MenuBar';
import { Container } from '../template/Container';

export const MainHeader = () => {
  return (
    <header className='h-20 w-full bg-primary fixed top-0'>
      <Container className='w-full h-full flex justify-between items-center'>
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
