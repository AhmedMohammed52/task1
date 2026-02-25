import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="landing-page position-relative d-flex align-items-center overflow-hidden">
          <div className="main-abs-div position-absolute"></div>
          <div className="top-abs position-absolute rounded-circle"></div>
          <div className="middel-abs position-absolute rounded-circle"></div>
          <div className="bottom-abs position-absolute rounded-circle"></div>

          <div className="container position-relative text-center d-flex flex-column align-items-center">
            <div className="sub-title">
              <span className="span-dots position-relative">
                <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                <span className="dot d-flex position-relative rounded-circle d-flex"></span>
              </span>

              <span className="span-text fw-medium">مرحباً بك في عدسة</span>
            </div>

            <h1 className="fw-bold text-light mb-4">
              اكتشف <span className="custom-text"> فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="para mx-auto">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="btn-container d-flex flex-column flex-lg-row justify-content-center gap-3">
              <Link
                className="btn-primary d-flex justify-content-center align-items-center gap-2"
                to="/blog"
              >
                استكشف المقالات
                <i class="fa-solid fa-arrow-left-long"></i>
              </Link>

              <Link
                className="btn-secondary d-flex justify-content-center gap-2"
                to="/about"
              >
                <i class="fa-solid fa-circle-info"></i>
                اعرف المزيد
              </Link>
            </div>

            <div className="card-container mx-auto gap-3 w-100">
              <div className="p-3">
                <i className="fa-solid fa-newspaper mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">+50</p>
                <span>مقالة</span>
              </div>

              <div className="p-3">
                <i className="fa-solid fa-users mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">+10ألف</p>
                <span>قارئ</span>
              </div>

              <div className="p-3">
                <i className="fa-solid fa-folder-open mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">4</p>
                <span>تصنيفات</span>
              </div>

              <div className="p-3">
                <i className="fa-solid fa-pen-nib mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">6</p>
                <span>كاتب</span>
              </div>
            </div>
          </div>
        </div>

        <div className="selected-articales">
          <div className="container">
            <div className="title d-flex justify-content-between align-items-end">
              <div>
                <div className="sub-title mb-3">
                  <span className="span-dots position-relative">
                    <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                    <span className="dot d-flex position-relative rounded-circle d-flex"></span>
                  </span>

                  <span className="span-text fw-medium">مميز</span>
                </div>

                <h2 className="fw-bold p-0 m-0">مقالات مختارة</h2>

                <p className="p-0 m-0 mt-3">محتوى منتقى لبدء رحلة تعلمك</p>
              </div>

              <Link
                className="d-flex justify-content-center align-items-center text-light gap-2 fw-medium"
                to="/blog"
              >
                عرض الكل
                <i class="fa-solid fa-angle-left"></i>
              </Link>
            </div>

            <div className="articales-container">
              <div className="card position-relative overflow-hidden">
                <Link className="d-block h-100" to="/info">
                  <div className="d-grid gap-0">
                    <div className="image main position-relative overflow-hidden">
                      <img
                        src="../public/art1.jfif"
                        alt="Articale Image"
                        className="w-100 h-100 object-fit-cover"
                      />

                      <div className="hover-layer position-absolute"></div>

                      <div className="custom position-absolute">
                        <span className="fw-semibold rounded-4 d-flex align-items-center justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>

                    <div className="info d-flex flex-column">
                      <div className="info-head d-flex align-items-center mb-3">
                        <span className="fw-semibold">إضاءة</span>

                        <span className="d-flex align-items-center gap-1">
                          <i className="fa-regular fa-clock"></i>8 دقائق للقراءة
                        </span>
                      </div>

                      <h2 className="text-light fw-bold mb-3">
                        إتقان تصوير الساعة الذهبية: دليل شامل
                      </h2>

                      <p className="p-0 m-0 mb-4">
                        تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                        احترافية حول الإضاءة والتكوين.
                      </p>

                      <div className="info-footer d-flex justify-content-between align-items-center mt-auto">
                        <div className="profile d-flex align-items-center">
                          <div className="image position-relative">
                            <img
                              src="../public/user1.jfif"
                              alt="User Image"
                              className="object-fit-cover rounded-circle "
                            />

                            <div className="img-abs position-absolute rounded-circle"></div>
                          </div>

                          <div className="text">
                            <h5 className="text-light fw-semibold">
                              سالم أحمد
                            </h5>

                            <p className="p-0 m-0">١٥ يناير ٢٠٢٦</p>
                          </div>
                        </div>

                        <span className="read-span d-flex align-items-center gap-2 fw-semibold">
                          اقرأ المقال
                          <i class="fa-solid fa-arrow-left-long"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="card position-relative overflow-hidden">
                <Link className="d-block h-100" to="/info">
                  <div className="d-grid gap-0">
                    <div className="image main position-relative overflow-hidden">
                      <img
                        src="../public/user1bg.jfif"
                        alt="Articale Image"
                        className="w-100 h-100 object-fit-cover"
                      />

                      <div className="hover-layer position-absolute"></div>

                      <div className="custom position-absolute">
                        <span className="fw-semibold rounded-4 d-flex align-items-center justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>

                    <div className="info d-flex flex-column">
                      <div className="info-head d-flex align-items-center mb-3">
                        <span className="fw-semibold">بورتريه</span>

                        <span className="d-flex align-items-center gap-1">
                          <i className="fa-regular fa-clock"></i>6 دقائق للقراءة
                        </span>
                      </div>

                      <h2 className="text-light fw-bold mb-3">
                        أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
                      </h2>

                      <p className="p-0 m-0 mb-4">
                        اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن
                        شخصية الموضوع الحقيقية.
                      </p>

                      <div className="info-footer d-flex justify-content-between align-items-center mt-auto">
                        <div className="profile d-flex align-items-center">
                          <div className="image position-relative">
                            <img
                              src="../public/user2.jfif"
                              alt="User Image"
                              className="object-fit-cover rounded-circle "
                            />

                            <div className="img-abs position-absolute rounded-circle"></div>
                          </div>

                          <div className="text">
                            <h5 className="text-light fw-semibold">محمد علي</h5>

                            <p className="p-0 m-0">١٢ يناير ٢٠٢٦</p>
                          </div>
                        </div>

                        <span className="read-span d-flex align-items-center gap-2 fw-semibold">
                          اقرأ المقال
                          <i class="fa-solid fa-arrow-left-long"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="card position-relative overflow-hidden">
                <Link className="d-block h-100" to="/info">
                  <div className="d-grid gap-0">
                    <div className="image main position-relative overflow-hidden">
                      <img
                        src="../public/art2.jfif"
                        alt="Articale Image"
                        className="w-100 h-100 object-fit-cover"
                      />

                      <div className="hover-layer position-absolute"></div>

                      <div className="custom position-absolute">
                        <span className="fw-semibold rounded-4 d-flex align-items-center justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>

                    <div className="info d-flex flex-column">
                      <div className="info-head d-flex align-items-center mb-3">
                        <span className="fw-semibold">مناظر طبيعية</span>

                        <span className="d-flex align-items-center gap-1">
                          <i className="fa-regular fa-clock"></i>10 دقائق
                          للقراءة
                        </span>
                      </div>

                      <h2 className="text-light fw-bold mb-3">
                        دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
                      </h2>

                      <p className="p-0 m-0 mb-4">
                        استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية
                        التقاط جمال الطبيعة بعدستك.
                      </p>

                      <div className="info-footer d-flex justify-content-between align-items-center mt-auto">
                        <div className="profile d-flex align-items-center">
                          <div className="image position-relative">
                            <img
                              src="../public/user3.jfif"
                              alt="User Image"
                              className="object-fit-cover rounded-circle "
                            />

                            <div className="img-abs position-absolute rounded-circle"></div>
                          </div>

                          <div className="text">
                            <h5 className="text-light fw-semibold">
                              إبراهيم حسن
                            </h5>

                            <p className="p-0 m-0">١٠ يناير ٢٠٢٦</p>
                          </div>
                        </div>

                        <span className="read-span d-flex align-items-center gap-2 fw-semibold">
                          اقرأ المقال
                          <i class="fa-solid fa-arrow-left-long"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-topics position-relative">
          <div className="container">
            <div className="title d-flex flex-column align-items-center">
              <div className="sub-title mb-3">
                <span className="span-dots position-relative">
                  <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                  <span className="dot d-flex position-relative rounded-circle d-flex"></span>
                </span>

                <span className="span-text fw-medium">التصنيفات</span>
              </div>

              <h2 className="fw-bold p-0 m-0">استكشف حسب الموضوع</h2>

              <p className="p-0 m-0 mt-3">اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>

            <div className="cards d-grid gap-4">
              <Link
                className="d-block position-relative p-4 overflow-hidden text-light rounded-4"
                to=""
              >
                <div className="abs-layer position-absolute "></div>

                <div className="card-texts position-relative d-flex justify-content-between align-items-center">
                  <div className="texts">
                    <div className="icon-box d-flex justify-content-center align-items-center mb-3">
                      <i className="fa-solid fa-sun"></i>
                    </div>

                    <h3 className="fw-bold mb-1">إضاءة</h3>

                    <p className="p-0 m-0">3 مقالة</p>
                  </div>

                  <div className="arrow-box rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>

              <Link
                className="d-block position-relative p-4 overflow-hidden text-light rounded-4"
                to=""
              >
                <div className="abs-layer position-absolute "></div>

                <div className="card-texts position-relative d-flex justify-content-between align-items-center">
                  <div className="texts">
                    <div className="icon-box d-flex justify-content-center align-items-center mb-3">
                      <i className="fa-solid fa-user"></i>
                    </div>

                    <h3 className="fw-bold mb-1">بورتريه</h3>

                    <p className="p-0 m-0">3 مقالة</p>
                  </div>

                  <div className="arrow-box rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>

              <Link
                className="d-block position-relative p-4 overflow-hidden text-light rounded-4"
                to=""
              >
                <div className="abs-layer position-absolute "></div>

                <div className="card-texts position-relative d-flex justify-content-between align-items-center">
                  <div className="texts">
                    <div className="icon-box d-flex justify-content-center align-items-center mb-3">
                      <i class="fa-solid fa-mountain-sun"></i>
                    </div>

                    <h3 className="fw-bold mb-1">مناظر طبيعية</h3>

                    <p className="p-0 m-0">2 مقالة</p>
                  </div>

                  <div className="arrow-box rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>

              <Link
                className="d-block position-relative p-4 overflow-hidden text-light rounded-4"
                to=""
              >
                <div className="abs-layer position-absolute "></div>

                <div className="card-texts position-relative d-flex justify-content-between align-items-center">
                  <div className="texts">
                    <div className="icon-box d-flex justify-content-center align-items-center mb-3">
                      <i className="fa-solid fa-sliders"></i>
                    </div>

                    <h3 className="fw-bold mb-1">تقنيات</h3>

                    <p className="p-0 m-0">5 مقالة</p>
                  </div>

                  <div className="arrow-box rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>

              <Link
                className="d-block position-relative p-4 overflow-hidden text-light rounded-4"
                to=""
              >
                <div className="abs-layer position-absolute "></div>

                <div className="card-texts position-relative d-flex justify-content-between align-items-center">
                  <div className="texts">
                    <div className="icon-box d-flex justify-content-center align-items-center mb-3">
                      <i class="fa-solid fa-gear"></i>
                    </div>

                    <h3 className="fw-bold mb-1">معدات</h3>

                    <p className="p-0 m-0">3 مقالة</p>
                  </div>

                  <div className="arrow-box rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="latest-articales position-relative overflow-hidden">
          <div className="big-abs h-100 position-absolute bottom-0 z-1"></div>

          <div className="container position-relative z-3">
            <div className="title d-flex justify-content-between align-items-end">
              <div>
                <div className="sub-title mb-3">
                  <span className="span-dots position-relative">
                    <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                    <span className="dot d-flex position-relative rounded-circle d-flex"></span>
                  </span>

                  <span className="span-text fw-medium">الأحدث</span>
                </div>

                <h2 className="fw-bold p-0 m-0">أحدث المقالات</h2>

                <p className="p-0 m-0 mt-3">محتوى جديد طازج من المطبعة</p>
              </div>

              <Link
                className="d-flex justify-content-center align-items-center gap-2 fw-semibold"
                to=""
              >
                عرض جميع المقالات <i class="fa-solid fa-arrow-left-long"></i>
              </Link>
            </div>

            <div className="cards-container d-flex">
              <div className="card custom-card">
                <Link to="" className="d-block">
                  <div className="image position-relative overflow-hidden">
                    <img
                      src="../public/latest1.jfif"
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
                          src="../public/latestUser1.jfif"
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
                      src="../public/latest2.jfif"
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
                          src="../public/latestUser2.jfif"
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
                      src="../public/latest3.jfif"
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
                          src="../public/latestUser3.jfif"
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
          </div>
        </div>

        <div className="subscribe-card position-relative overflow-hidden">
          <div className="big-abs position-absolute"></div>

          <div className="container mx-auto">
            <div className="card text-center">
              <div className="icon-box mb-4 rounded-4 d-flex justify-content-center align-items-center mx-auto">
                <i className="fa-regular fa-envelope text-light"></i>
              </div>

              <h2 className="fw-bold mb-3 text-light">
                اشترك في
                <span className="custom-text "> نشرتنا الإخبارية</span>
              </h2>

              <p className="p-0 m-0 mx-auto container-sm">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>

              <form className="d-flex mb-4 mx-auto w-100">
                <input
                  type="email"
                  className="text-light w-100"
                  placeholder="أدخل بريدك الإلكتروني"
                />

                <button type="submit" className=" fw-semibold text-light">
                  اشترك الآن
                </button>
              </form>

              <div className="details d-flex justify-content-center align-items-center gap-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="images d-flex">
                    <img
                      src="../public/user1.jfif"
                      alt="Subscribe User Image"
                      className="rounded-circle"
                    />
                    <img
                      src="../public/user2.jfif"
                      alt="Subscribe User Image"
                      className="rounded-circle"
                    />
                    <img
                      src="../public/user3.jfif"
                      alt="Subscribe User Image"
                      className="rounded-circle"
                    />
                  </div>

                  <span>
                    انضم لـ
                    <span className=" fw-medium text-light"> +10,000 </span>
                    مصور
                  </span>
                </div>

                <span>بدون إزعاج</span>

                <span>إلغاء الاشتراك في أي وقت</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
