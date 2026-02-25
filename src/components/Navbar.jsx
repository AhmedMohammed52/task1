import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top p-0 m-0">
        <div className="container d-flex justify-content-between mx-auto">
          <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
            <div className="logo-img position-relative">
              <img
                src="/task1/logo-GdqARQRt.png"
                alt="Logo Image"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <div className="d-flex flex-column">
              <span className="logo-name p-0 m-0 fw-bold">عدسة</span>
              <span className="sub-name p-0 m-0 d-block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav rounded-5">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link fw-medium rounded-5 ${isActive ? "active" : ""}`
                  }
                >
                  الرئيسية
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `nav-link fw-medium rounded-5 ${isActive ? "active" : ""}`
                  }
                >
                  المدونة
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link fw-medium rounded-5 ${isActive ? "active" : ""}`
                  }
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="search-btn">
              <i className="fa-solid fa-search"></i>
            </button>

            <Link className="btn-primary" to="/blog">
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
