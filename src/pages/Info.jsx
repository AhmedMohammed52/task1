import { Link } from "react-router-dom";

export default function Info() {
  return (
    <>
      <section className="blog-info pb-5">
        <div className="landing-page overflow-hidden position-relative">
          <img
            src="/task1/art1.jfif"
            alt="Main Image"
            className="main-img position-absolute object-fit-cover h-100 w-100"
          />
          <div className="abs-one position-absolute"></div>
          <div className="abs-two position-absolute"></div>

          <div className="top-head position-absolute ">
            <nav className=" d-inline-flex align-items-center py-2 px-3 gap-2 rounded-5">
              <Link to="/blog">
                <i className="fa-solid fa-home"></i>
              </Link>

              <i className="fa-solid fa-chevron-left"></i>

              <Link to="/blog">المدونة</Link>

              <i className="fa-solid fa-chevron-left"></i>

              <span className=" fw-medium overflow-hidden">إضاءة</span>
            </nav>
          </div>

          <div className="center-content position-absolute p-5">
            <div className="container mx-auto p-0">
              <div className="sub-head d-flex align-items-center flex-wrap mb-4">
                <Link className=" text-light fw-bold rounded-5 py-2 px-3" to="">
                  إضاءة
                </Link>

                <div className=" d-flex align-items-center gap-3">
                  <span className=" d-flex align-items-center gap-2">
                    <i className="fa-regular fa-calendar"></i>
                    ١٥ يناير ٢٠٢٦
                  </span>

                  <span className=" d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock"></i>8 دقائق للقراءة
                  </span>
                </div>
              </div>

              <h1 className=" text-light fw-bold mb-4">
                إتقان تصوير الساعة الذهبية: دليل شامل
              </h1>

              <div className="user-card d-flex align-items-center gap-3 rounded-4 p-3">
                <img
                  src="/task1/user1.jfif"
                  alt="User Image"
                  className=" rounded-circle object-fit-cover"
                />

                <div>
                  <p className="p-0 m-0 fw-bold text-light">سالم أحمد</p>

                  <p className="p-0 m-0">مصور محترف</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" more-details">
          <div className="container py-5">
            <div className=" d-grid">
              <div className="all-texts">
                <div className=" top-side p-4 rounded-4">
                  <p className=" p-0 m-0">
                    "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                    احترافية حول الإضاءة والتكوين."
                  </p>
                </div>

                <div className="center-content">
                  <p className=" mb-4 p-0">
                    الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي.
                    ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء
                    ناعماً ودافئاً وساحراً.
                  </p>

                  <div className=" mb-4" id="topic-one">
                    <h2 className=" d-flex align-items-center text-light fw-bold gap-4 mb-4">
                      <span className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-camera"></i>
                      </span>
                      لماذا الساعة الذهبية؟
                    </h2>

                    <p className=" p-0">
                      الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة،
                      ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل.
                      البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول
                      إلى لوحات فنية.
                    </p>
                  </div>

                  <div className=" mb-4" id="topic-two">
                    <h2 className=" d-flex align-items-center text-light fw-bold gap-4 mb-4">
                      <span className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-camera"></i>
                      </span>
                      التحضير المسبق
                    </h2>

                    <p className=" p-0">
                      خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills
                      لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة
                      لاختيار أفضل زاوية.
                    </p>
                  </div>

                  <div className=" mb-4" id="topic-three">
                    <h2 className=" d-flex align-items-center text-light fw-bold gap-4 mb-4">
                      <span className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-camera"></i>
                      </span>
                      إعدادات الكاميرا
                    </h2>

                    <p className=" p-0">
                      استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد
                      على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو
                      f/8-f/11 للمناظر الطبيعية الحادة.
                    </p>
                  </div>

                  <div className=" mb-4" id="topic-four">
                    <h2 className=" d-flex align-items-center text-light fw-bold gap-4 mb-4">
                      <span className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-camera"></i>
                      </span>
                      التكوين الفني
                    </h2>

                    <p className=" p-0">
                      ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية
                      الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.
                    </p>
                  </div>

                  <div className=" mb-4" id="summary">
                    <h2 className=" d-flex align-items-center text-light fw-bold gap-4 mb-4">
                      <span className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-camera"></i>
                      </span>
                      الخلاصة
                    </h2>

                    <p className=" p-0">
                      الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على
                      صور لا تُنسى تتميز بجمالها الطبيعي.
                    </p>
                  </div>
                </div>

                <div className=" category-box p-4 rounded-4">
                  <div className="category-head d-flex align-items-center mb-3">
                    <div className=" d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-tags"></i>
                    </div>

                    <h3 className=" text-light fw-bold fs-6 p-0 m-0">الوسوم</h3>
                  </div>

                  <div className="category-bottom d-flex flex-wrap gap-2">
                    <span className=" px-3 py-2 rounded-5">#إضاءة</span>
                    <span className=" px-3 py-2 rounded-5">
                      #الساعة الذهبية
                    </span>
                    <span className=" px-3 py-2 rounded-5">#تصوير خارجي</span>
                  </div>
                </div>

                <div className="social-media p-4 mt-4 rounded-4">
                  <div className=" d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="right d-flex align-items-center">
                      <div className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-share-nodes"></i>
                      </div>

                      <h3 className=" fs-6 fw-bold text-light p-0 m-0">
                        شارك المقال
                      </h3>
                    </div>

                    <div className="links d-flex gap-2">
                      <button className=" d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-x-twitter"></i>
                      </button>

                      <button className=" d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </button>

                      <button className=" d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-whatsapp"></i>
                      </button>

                      <button className=" d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-link"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="writter-details mt-4 rounded-4">
                  <div className="d-flex align-items-center gap-4">
                    <img
                      src="/task1/user1.jfif"
                      alt="سالم أحمد"
                      className=" object-fit-cover rounded-4"
                    />

                    <div className=" text-end">
                      <span className=" fw-semibold text-uppercase">
                        كاتب المقال
                      </span>

                      <h3 className=" fw-bold text-light p-0 m-0 mt-2">
                        سالم أحمد
                      </h3>

                      <p className=" p-0 m-0">مصور محترف</p>
                      <p className=" p-0 m-0">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside>
                <div className="position-sticky">
                  <div className="articale-content-list p-4 mb-4 rounded-4">
                    <div className="sub-head d-flex align-items-center">
                      <div className="icon-box d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-list"></i>
                      </div>

                      <h3 className=" fw-bold text-light fs-6 m-0 p-0">
                        محتويات المقال
                      </h3>
                    </div>

                    <nav>
                      <Link
                        to="#topic-one"
                        className=" d-flex align-items-center"
                      >
                        <span className="num d-flex justify-content-center align-items-center fw-bold">
                          1
                        </span>

                        <span className="txt">لماذا الساعة الذهبية؟</span>
                      </Link>

                      <Link
                        to="#topic-two"
                        className=" d-flex align-items-center"
                      >
                        <span className="num d-flex justify-content-center align-items-center fw-bold">
                          2
                        </span>

                        <span className="txt">التحضير المسبق</span>
                      </Link>

                      <Link
                        to="#topic-three"
                        className=" d-flex align-items-center"
                      >
                        <span className="num d-flex justify-content-center align-items-center fw-bold">
                          3
                        </span>

                        <span className="txt">إعدادات الكاميرا</span>
                      </Link>

                      <Link
                        to="#topic-four"
                        className=" d-flex align-items-center"
                      >
                        <span className="num d-flex justify-content-center align-items-center fw-bold">
                          4
                        </span>

                        <span className="txt">التكوين الفني</span>
                      </Link>

                      <Link
                        to="#summary"
                        className=" d-flex align-items-center"
                      >
                        <span className="num d-flex justify-content-center align-items-center fw-bold">
                          5
                        </span>

                        <span className="txt">الخلاصة</span>
                      </Link>
                    </nav>
                  </div>

                  <div className="date-time-box p-4 mb-4 rounded-4">
                    <div className="d-grid gap-3">
                      <div className=" text-center p-3">
                        <i className="fa-regular fa-clock mb-2"></i>
                        <p className=" p-0 m-0 text-light fw-bold">
                          8 دقائق للقراءة
                        </p>
                        <p className=" p-0 m-0">وقت القراءة</p>
                      </div>

                      <div className=" text-center p-3">
                        <i className="fa-regular fa-calendar mb-2"></i>
                        <p className=" p-0 m-0 text-light fw-bold">١٥ يناير</p>
                        <p className=" p-0 m-0">تاريخ النشر</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-box p-4 rounded-4">
                    <div className=" text-center">
                      <div className="icon-box d-flex justify-content-center align-items-center rounded-4 mx-auto mb-3">
                        <i className="fa-solid fa-envelope"></i>
                      </div>

                      <h3 className="fs-6 mb-2 text-light fw-bold">
                        لا تفوّت جديدنا
                      </h3>

                      <p className=" p-0 m-0 mb-3">
                        اشترك للحصول على أحدث المقالات
                      </p>

                      <Link
                        to=""
                        className="d-block w-100 fw-semibold text-light text-center"
                      >
                        تصفح المزيد
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className="suggestions">
          <div className="container">
            <div className="sub-head d-flex justify-content-between align-items-center">
              <div className="right-side d-flex align-items-center gap-3">
                <div className="icon-box d-flex justify-content-center align-items-center rounded-4">
                  <i className="fa-solid fa-images "></i>
                </div>

                <div>
                  <h2 className="m-0 p-0 fw-bold text-light">
                    مقالات قد تعجبك
                  </h2>

                  <p className=" p-0 m-0">استكشف المزيد من المحتوى المميز</p>
                </div>
              </div>

              <Link to="" className=" d-flex align-items-center gap-2">
                عرض الكل
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>

            <div className="suggestion-cards d-grid gap-4">
              <Link
                to=""
                className=" position-relative overflow-hidden rounded-4"
              >
                <div className="image position-relative overflow-hidden">
                  <img
                    src="/task1/art4.jfif"
                    alt="image"
                    className=" object-fit-cover w-100 h-100 "
                  />

                  <div className=" position-absolute"></div>

                  <span className=" position-absolute rounded-5 text-light fw-bold">
                    إضاءة
                  </span>
                </div>

                <div className="card-details">
                  <h3 className=" fw-bold fs-6 p-0 m-0 text-light overflow-hidden">
                    تصوير الليل والنجوم: دليلك لالتقاط سماء الليل
                  </h3>

                  <div className="info d-flex justify-content-between align-items-center">
                    <div className="user d-flex align-items-center gap-2">
                      <div className="user-img rounded-circle">
                        <img
                          src="/task1/user29.jfif"
                          alt="user image"
                          className=" w-100 h-100 object-fit-cover"
                        />
                      </div>

                      <span>خالد الفيصل</span>
                    </div>

                    <span>11 دقائق للقراءة</span>
                  </div>
                </div>
              </Link>

              <Link
                to=""
                className=" position-relative overflow-hidden rounded-4"
              >
                <div className="image position-relative overflow-hidden">
                  <img
                    src="/task1/art3.jfif"
                    alt="image"
                    className=" object-fit-cover w-100 h-100 "
                  />

                  <div className=" position-absolute"></div>

                  <span className=" position-absolute rounded-5 text-light fw-bold">
                    إضاءة
                  </span>
                </div>

                <div className="card-details">
                  <h3 className=" fw-bold fs-6 p-0 m-0 text-light overflow-hidden">
                    التعريض الطويل: كيف تصور الحركة والزمن
                  </h3>

                  <div className="info d-flex justify-content-between align-items-center">
                    <div className="user d-flex align-items-center gap-2">
                      <div className="user-img rounded-circle">
                        <img
                          src="/task1/user30.jfif"
                          alt="user image"
                          className=" w-100 h-100 object-fit-cover"
                        />
                      </div>

                      <span>باسم المصري</span>
                    </div>

                    <span>8 دقائق للقراءة</span>
                  </div>
                </div>
              </Link>

              <Link
                to=""
                className=" position-relative overflow-hidden rounded-4"
              >
                <div className="image position-relative overflow-hidden">
                  <img
                    src="/task1/art5.jfif"
                    alt="image"
                    className=" object-fit-cover w-100 h-100 "
                  />

                  <div className=" position-absolute"></div>

                  <span className=" position-absolute rounded-5 text-light fw-bold">
                    إضاءة
                  </span>
                </div>

                <div className="card-details">
                  <h3 className=" fw-bold fs-6 p-0 m-0 text-light overflow-hidden">
                    أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة
                  </h3>

                  <div className="info d-flex justify-content-between align-items-center">
                    <div className="user d-flex align-items-center gap-2">
                      <div className="user-img rounded-circle">
                        <img
                          src="/task1/user28.jfif"
                          alt="user image"
                          className=" w-100 h-100 object-fit-cover"
                        />
                      </div>

                      <span>ماجد القحطاني</span>
                    </div>

                    <span>8 دقائق للقراءة</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
