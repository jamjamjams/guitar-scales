import './Navbar.css';

import siteMap from '../../../../siteMap';

function Navbar() {
  return (
    <div className="Navbar">
        { siteMap.pages.map((page, index) => {
                return (
                    <div className="navbar-item" key={index}>
                        <a href = {page.page}>{page.page}</a>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Navbar;
