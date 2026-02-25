import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" position-relative overflow-hidden">
        <div className="container">
          <div className="top-footer d-flex align-items-start gap-5">
            <div className="logo-info col">
              <Link
                className="footer-logo d-flex align-items-center gap-2 mb-4"
                to="/"
              >
                <div className="logo-img position-relative">
                  <img
                    src="/task1/logo-GdqARQRt.png"
                    alt="Logo Image"
                    className="w-100 h-100"
                  />
                </div>

                <span className="logo-name p-0 m-0 fw-bold">عدسة</span>
              </Link>

              <p className=" p-0 mb-4">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>

              <div className="social-links d-flex align-items-center gap-2">
                <Link className=" d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link className=" d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link className=" d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link className=" d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="links">
              <div className=" d-flex justify-content-between gap-5">
                <div className="list">
                  <h3 className=" d-flex align-items-center gap-2 text-light fw-semibold mb-4">
                    <span></span>
                    استكشف
                  </h3>

                  <ul className=" list-unstyled p-0">
                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        الرئيسية
                      </Link>
                    </li>

                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        المدونه
                      </Link>
                    </li>

                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        من نحن
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="list">
                  <h3 className=" d-flex align-items-center gap-2 text-light fw-semibold mb-4">
                    <span></span>
                    التصنيفات
                  </h3>

                  <ul className=" list-unstyled p-0">
                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        إضاءة
                      </Link>
                    </li>

                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        بورتريه
                      </Link>
                    </li>

                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        مناظر طبيعية
                      </Link>
                    </li>

                    <li>
                      <Link className=" d-flex align-items-center gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        تقنيات
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="list">
                  <h3 className=" d-flex align-items-center gap-2 text-light fw-semibold mb-4">
                    <span></span>
                    ابقى على اطلاع
                  </h3>

                  <p className="p-0 mb-3">
                    اشترك للحصول على أحدث المقالات والتحديثات.
                  </p>

                  <form action="">
                    <input
                      type="email"
                      className="text-light w-100"
                      placeholder="أدخل بريدك الإلكتروني"
                    />

                    <button type="submit" className="btn-primary w-100">
                      اشترك
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-footer position-relative py-4">
            <div className=" d-flex justify-content-between align-items-center">
              <p className=" p-0 m-0">
                © 2026 عدسة. صنع بكل <span>❤</span> جميع الحقوق محفوظة.
              </p>

              <div className=" d-flex gap-4">
                <Link>سياسة الخصوصية</Link>
                <Link>شروط الخدمة</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
