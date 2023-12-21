import Link from 'next/link';

import './Navbar.css';

import siteMap from '../../../../siteMap';
import next from 'next';

function Navbar() {
  return (
    <div className="navbar">
        { siteMap.pages.map((page, index) => {
                return (
                    <div className="navbar-container">
                      <div className="navbar-item" key={index}>
                          <Link href={page.route}>{page.page}</Link>
                      </div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Navbar;
