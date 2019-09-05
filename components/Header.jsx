import css from 'sass/components/Header.scss';
import Link from 'next/link';

const Header = props => (
  <header className={`${props.className ? `${props.className} ` : ''}${css.Header}`}>
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
    </nav>
  </header>
);

export default Header;
