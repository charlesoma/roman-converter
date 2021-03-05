import { HeaderMain } from './style';

const Header = () => {
  return (
    <HeaderMain>
      <div className='header'>
        <a href='/' className='logo'>
          <p>Roman Converter</p>
        </a>
        <p><span className='built-with'>Built with coffee</span> &#x2615;</p>
      </div>
    </HeaderMain>
  );
}

export default Header;
