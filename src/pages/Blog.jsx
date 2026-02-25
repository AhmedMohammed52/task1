import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <section className="blog">
        <div className="landing-page position-relative overflow-hidden">
          <div className="secondary-abs-div one position-absolute"></div>
          <div className="main-abs-div position-absolute"></div>
          <div className="secondary-abs-div two position-absolute">
            <div className="top position-absolute rounded-circle"></div>
            <div className="bottom position-absolute rounded-circle"></div>
          </div>

          <div className="container position-relative text-center d-flex flex-column align-items-center">
            <div className="sub-title mb-4">
              <span className="span-dots position-relative">
                <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                <span className="dot d-flex position-relative rounded-circle d-flex"></span>
              </span>

              <span className="span-text fw-medium">مدونتنا</span>
            </div>

            <h1 className="fw-bold text-light mb-4">
              استكشف <span className="custom-text">مقالاتنا</span>
            </h1>

            <p className="para mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        <div className="filteration position-sticky">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center gap-3 py-3">
              <div className="search-bar position-relative">
                <input
                  type="search"
                  className=" w-100"
                  placeholder="ابحث في المقالات..."
                />
                <i class="fa-solid fa-magnifying-glass position-absolute"></i>
              </div>

              <div className="filteration-btns d-flex flex-wrap justify-content-center gap-2">
                <button className=" active fw-medium py-2 px-3">
                  جميع المقالات
                </button>

                <button className=" fw-medium py-2 px-3">إضاءة</button>

                <button className=" fw-medium py-2 px-3">بورتريه</button>

                <button className=" fw-medium py-2 px-3">مناظر طبيعية</button>

                <button className=" fw-medium py-2 px-3">تقنيات</button>

                <button className=" fw-medium py-2 px-3">معدات</button>
              </div>
            </div>
          </div>
        </div>

        <div className="articales-filteration">
          <div className="container">
            <div className="filteration-head d-flex justify-content-between align-items-center">
              <p className=" p-0 m-0">
                عرض <span className=" fw-bold text-light">28</span> مقالات
              </p>

              <div className=" d-flex align-content-center gap-2">
                <div className="category-switch d-flex align-items-center p-1">
                  <button className="active p-2">
                    <i class="fa-solid fa-table-cells"></i>
                  </button>

                  <button className=" p-2">
                    <i class="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="cards-container d-flex">
              <div className="card custom-card">
                <Link to="" className="d-block">
                  <div className="image position-relative overflow-hidden">
                    <img
                      src="/task1/latest1.jfif"
                      alt="Latest Image 1"
                      className="w-100 h-100 object-fit-cover"
                    />

                    <div className="abs-div position-absolute"></div>

                    <span className="position-absolute d-block fw-semibold">
                      تقنيات
                    </span>
                  </div>

                  <div className="card-details p-4">
                    <div className="card-head d-flex align-items-center">
                      <p className="p-0 m-0">
                        <i className="fa-solid fa-clock"></i> 7 دقائق للقراءة
                      </p>

                      <span className="rounded-circle"></span>

                      <p className="p-0 m-0">٨ يناير ٢٠٢٦</p>
                    </div>

                    <div className="card-body p-0">
                      <h3 className="fw-bold">
                        أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
                      </h3>

                      <p className="p-0 m-0">
                        افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO
                        للتحكم الكامل في صورك.
                      </p>
                    </div>

                    <div className="card-footer pt-3 d-flex justify-content-between align-items-center">
                      <div className="user-info d-flex align-items-center">
                        <img
                          src="/task1/latestUser1.jfif"
                          alt="User Image"
                          className=" rounded-circle object-fit-cover"
                        />

                        <div>
                          <p className="fw-medium text-light p-0 m-0">
                            داود خالد
                          </p>

                          <span className="p-0 m-0">مدرب تصوير</span>
                        </div>
                      </div>

                      <div className="icon-box d-flex justify-content-center align-items-center rounded-circle">
                        <i className="fa-solid fa-angle-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="card custom-card">
                <Link to="" className="d-block">
                  <div className="image position-relative overflow-hidden">
                    <img
                      src="/task1/latest2.jfif"
                      alt="Latest Image 2"
                      className="w-100 h-100 object-fit-cover"
                    />

                    <div className="abs-div position-absolute"></div>

                    <span className="position-absolute d-block fw-semibold">
                      تقنيات
                    </span>
                  </div>

                  <div className="card-details p-4">
                    <div className="card-head d-flex align-items-center">
                      <p className="p-0 m-0">
                        <i className="fa-solid fa-clock"></i> 9 دقائق للقراءة
                      </p>

                      <span className="rounded-circle"></span>

                      <p className="p-0 m-0">٥ يناير ٢٠٢٦</p>
                    </div>

                    <div className="card-body p-0">
                      <h3 className="fw-bold">
                        قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
                      </h3>

                      <p className="p-0 m-0">
                        تعلم قواعد التكوين الأساسية التي يستخدمها المصورون
                        المحترفون لإنشاء صور مؤثرة بصرياً.
                      </p>
                    </div>

                    <div className="card-footer pt-3 d-flex justify-content-between align-items-center">
                      <div className="user-info d-flex align-items-center">
                        <img
                          src="/task1/latestUser2.jfif"
                          alt="User Image"
                          className=" rounded-circle object-fit-cover"
                        />

                        <div>
                          <p className="fw-medium text-light p-0 m-0">
                            ليث محمود
                          </p>

                          <span className="p-0 m-0">فنان بصري</span>
                        </div>
                      </div>

                      <div className="icon-box d-flex justify-content-center align-items-center rounded-circle">
                        <i className="fa-solid fa-angle-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="card custom-card">
                <Link to="" className="d-block">
                  <div className="image position-relative overflow-hidden">
                    <img
                      src="/task1/latest3.jfif"
                      alt="Latest Image 3"
                      className="w-100 h-100 object-fit-cover"
                    />

                    <div className="abs-div position-absolute"></div>

                    <span className="position-absolute d-block fw-semibold">
                      معدات
                    </span>
                  </div>

                  <div className="card-details p-4">
                    <div className="card-head d-flex align-items-center">
                      <p className="p-0 m-0">
                        <i className="fa-solid fa-clock"></i> 8 دقائق للقراءة
                      </p>

                      <span className="rounded-circle"></span>

                      <p className="p-0 m-0">٣ يناير ٢٠٢٦</p>
                    </div>

                    <div className="card-body p-0">
                      <h3 className="fw-bold">
                        تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك
                      </h3>

                      <p className="p-0 m-0">
                        اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه
                        النصائح والتقنيات.
                      </p>
                    </div>

                    <div className="card-footer pt-3 d-flex justify-content-between align-items-center">
                      <div className="user-info d-flex align-items-center">
                        <img
                          src="/task1/latestUser3.jfif"
                          alt="User Image"
                          className=" rounded-circle object-fit-cover"
                        />

                        <div>
                          <p className="fw-medium text-light p-0 m-0">
                            جمال عبدالله
                          </p>

                          <span className="p-0 m-0">مصور ومراجع تقني</span>
                        </div>
                      </div>

                      <div className="icon-box d-flex justify-content-center align-items-center rounded-circle">
                        <i className="fa-solid fa-angle-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="carsoual-container d-flex justify-content-center align-items-center gap-2">
              <button className="move-right d-flex justify-content-center align-items-center text-light">
                <i className="fa-solid fa-angle-right"></i>
              </button>

              <div className="pages d-flex justify-content-center align-items-center gap-1">
                <button className="active d-flex justify-content-center align-items-center fw-medium">
                  1
                </button>

                <button className=" d-flex justify-content-center align-items-center fw-medium">
                  2
                </button>

                <button className=" d-flex justify-content-center align-items-center fw-medium">
                  3
                </button>

                <button className=" d-flex justify-content-center align-items-center fw-medium">
                  4
                </button>

                <button className=" d-flex justify-content-center align-items-center fw-medium">
                  5
                </button>
              </div>

              <button className="move-left d-flex justify-content-center align-items-center text-light">
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </div>

            <p className="carsoual-para text-center mt-3">صفحة 1 من 5</p>
          </div>
        </div>
      </section>
    </>
  );
}
