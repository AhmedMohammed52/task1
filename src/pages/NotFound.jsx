import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <div className="landing-page p-0 m-0">
          <div className="main-abs-div position-absolute"></div>
          <div className="secondary-abs-div two position-absolute">
            <div className="top position-absolute rounded-circle"></div>
            <div className="bottom position-absolute rounded-circle"></div>
          </div>

          <div className="container">
            <div className=" d-flex flex-column align-items-center position-relative overflow-hidden">
              <div className="main-text position-relative mb-4">
                <h1>404</h1>

                <div className=" position-absolute">404</div>
              </div>

              <div class="icon-container position-relative">
                <div class="icon-bg position-absolute rounded-circle"></div>

                <div class="icon-content position-absolute d-flex justify-content-center align-items-center">
                  <i class="fa-regular fa-face-frown"></i>
                </div>

                <span class=" position-absolute"></span>
                <span class=" rounded-circle position-absolute"></span>
              </div>

              <h2 className=" mb-3 fw-bold text-light">
                عفواً! الصفحة غير موجودة
              </h2>

              <p className="p-0 text-center">
                الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
                المسار الصحيح.
              </p>

              <div className="btn-container d-flex flex-column flex-lg-row justify-content-center gap-3 mb-5">
                <Link
                  className="btn-primary d-flex justify-content-center align-items-center gap-2"
                  to="/"
                >
                  <i class="fa-solid fa-home"></i>
                  الذهاب للرئيسية
                </Link>

                <Link
                  className="btn-secondary d-flex justify-content-center gap-2"
                  to="/blog"
                >
                  <i class="fa-regular fa-newspaper"></i>
                  تصفح المقالات
                </Link>
              </div>

              <div className="useful-destinations text-center">
                <p className="p-0">قد تجد هذه مفيدة:</p>

                <div className="links d-flex flex-wrap justify-content-center gap-3">
                  <Link className=" fw-medium" to="/blog">
                    المدونة
                  </Link>
                  <span>•</span>
                  <Link className=" fw-medium" to="/about">
                    من نحن
                  </Link>
                  <span>•</span>
                  <Link className=" fw-medium">الخصوصية</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
