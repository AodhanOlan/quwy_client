import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faRssSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router";

const MainNav: React.FC = () => {
  const router = useRouter();
  const links: Array<MainLink> = [
    { img: faHome, href: "/" },
    { img: faBookOpen, href: "/list" },
    { img: faRssSquare, href: "/overview" },
    { img: faUser, href: "/profile" },
  ];
  return (
    <nav className="nav">
      {links.map((link, i) => (
        <li className={`nav__list ${router.asPath === link.href ? 'nav__list--active' : ''}`} key={`link_${i}`}>
          <Link href={link.href}>
            <a className="nav__link">
              <FontAwesomeIcon className="nav__icon" icon={link.img} />
            </a>
          </Link>
        </li>
      ))}
    </nav>
  );
};
export default MainNav