import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="landing-page position-relative d-flex align-items-center overflow-hidden">
          <div className="secondary-abs-div one position-absolute"></div>
          <div className="main-abs-div position-absolute"></div>
          <div className="secondary-abs-div two position-absolute">
            <div className="top position-absolute rounded-circle"></div>
            <div className="bottom position-absolute rounded-circle"></div>
          </div>

          <div className="container position-relative text-center d-flex flex-column align-items-center">
            <div className="sub-title">
              <span className="span-dots position-relative">
                <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                <span className="dot d-flex position-relative rounded-circle d-flex"></span>
              </span>

              <span className="span-text fw-medium">من نحن</span>
            </div>

            <h1 className="fw-bold text-light mb-4">
              مهمتنا هي <span className="custom-text"> الإعلام والإلهام</span>
            </h1>

            <p className="para mx-auto">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            <div className="card-container mx-auto gap-3 w-100">
              <div className="p-4">
                <i className="fa-solid fa-users mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">+2مليون</p>
                <span>قارئ شهرياً</span>
              </div>

              <div className="p-4">
                <i className="fa-solid fa-newspaper mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">+500</p>
                <span>مقالة منشورة</span>
              </div>

              <div className="p-4">
                <i className="fa-solid fa-pen-nib mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">+50</p>
                <span>كاتب خبير</span>
              </div>

              <div className="p-4">
                <i className="fa-solid fa-book-open mb-1"></i>
                <p className="fw-bold p-0 m-0 custom-text">+15</p>
                <span>تصنيف</span>
              </div>
            </div>
          </div>
        </div>

        <div className="review">
          <div className="container">
            <div className="title text-center">
              <div className="sub-head d-flex align-items-center justify-content-center mb-3">
                <span className="line"></span>
                <span className="word fw-bold text-light">قيمنا</span>
                <span className="line"></span>
              </div>

              <p className="p-0 m-0">المبادئ التي توجه كل ما نقوم بإنشائه</p>
            </div>

            <div className="box-container container px-5 d-flex align-items-center justify-content-center gap-4 w-100">
              <div className="box col-3 p-4 rounded-4 overflow-hidden position-relative text-center">
                <div className=" position-absolute"></div>

                <div className="texts position-relative">
                  <i className="fa-solid fa-bullseye mb-3"></i>

                  <h3 className=" mb-2 fw-bold text-light">الجودة أولاً</h3>

                  <p className=" p-0 m-0">محتوى مدروس ومكتوب بخبرة</p>
                </div>
              </div>

              <div className="box col-3 p-4 rounded-4 overflow-hidden position-relative text-center">
                <div className=" position-absolute"></div>

                <div className="texts position-relative">
                  <i className="fa-solid fa-bolt mb-3"></i>

                  <h3 className=" mb-2 fw-bold text-light">تركيز عملي</h3>

                  <p className=" p-0 m-0">أمثلة واقعية يمكنك تطبيقها اليوم</p>
                </div>
              </div>

              <div className="box col-3 p-4 rounded-4 overflow-hidden position-relative text-center">
                <div className=" position-absolute"></div>

                <div className="texts position-relative">
                  <i className="fa-solid fa-handshake mb-3"></i>

                  <h3 className=" mb-2 fw-bold text-light">المجتمع</h3>

                  <p className=" p-0 m-0">تعلم مع آلاف المصورين</p>
                </div>
              </div>

              <div className="box col-3 p-4 rounded-4 overflow-hidden position-relative text-center">
                <div className="position-absolute"></div>

                <div className="position-relative">
                  <i className="fa-solid fa-arrows-rotate mb-3"></i>

                  <h3 className=" mb-2 fw-bold text-light">دائماً محدث</h3>

                  <p className=" p-0 m-0">أحدث الاتجاهات وأفضل الممارسات</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-team">
          <div className="container">
            <div className="repeted-title text-center">
              <div className="sub-title mb-3">
                <span className="span-dots position-relative">
                  <span className="around-dot w-100 h-100 position-absolute rounded-circle d-flex"></span>

                  <span className="dot d-flex position-relative rounded-circle d-flex"></span>
                </span>

                <span className="span-text fw-medium">فريقنا</span>
              </div>

              <h2 className="fw-bold text-light mb-4">تعرف على كتابنا</h2>

              <p className="para mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>

            <div className="partners-container">
              <div className="container">
                <div className="row justify-content-center g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="partner-card p-4 text-center rounded-4 h-100">
                      <div className="image position-relative d-inline-block mb-3">
                        <img
                          src="../public/user1.jfif"
                          alt="Partner Image"
                          className=" object-fit-cover rounded-circle"
                        />

                        <div className=" position-absolute d-flex justify-content-center align-items-center rounded-circle">
                          <i className="fa-solid fa-check text-light"></i>
                        </div>
                      </div>

                      <h4 className=" fw-bold text-light p-0 m-0">سالم أحمد</h4>

                      <p className=" fw-medium m-0 mb-3 p-0">مصور محترف</p>

                      <div className="social-links d-flex justify-content-center align-items-center">
                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>

                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-github"></i>
                        </Link>

                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="partner-card p-4 text-center rounded-4 h-100">
                      <div className="image position-relative d-inline-block mb-3">
                        <img
                          src="../public/user2.jfif"
                          alt="Partner Image"
                          className=" object-fit-cover rounded-circle"
                        />

                        <div className=" position-absolute d-flex justify-content-center align-items-center rounded-circle">
                          <i className="fa-solid fa-check text-light"></i>
                        </div>
                      </div>

                      <h4 className=" fw-bold text-light p-0 m-0">محمد علي</h4>

                      <p className=" fw-medium m-0 mb-3 p-0">مصور بورتريه</p>

                      <div className="social-links d-flex justify-content-center align-items-center">
                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>

                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-github"></i>
                        </Link>

                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="partner-card p-4 text-center rounded-4 h-100">
                      <div className="image position-relative d-inline-block mb-3">
                        <img
                          src="../public/user1.jfif"
                          alt="Partner Image"
                          className=" object-fit-cover rounded-circle"
                        />

                        <div className=" position-absolute d-flex justify-content-center align-items-center rounded-circle">
                          <i className="fa-solid fa-check text-light"></i>
                        </div>
                      </div>

                      <h4 className=" fw-bold text-light p-0 m-0">سالم أحمد</h4>

                      <p className=" fw-medium m-0 mb-3 p-0">مصور محترف</p>

                      <div className="social-links d-flex justify-content-center align-items-center">
                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>

                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-github"></i>
                        </Link>

                        <Link className=" d-flex justify-content-center align-items-center rounded-3">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="questions-card position-relative overflow-hidden">
          <div className=" position-absolute"></div>

          <div className="container position-relative text-center">
            <h2 className=" fw-bold text-light mb-4">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>

            <p className="p-0 m-0 mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="btn-container d-flex justify-content-center gap-3">
              <Link className=" d-flex align-items-center justify-content-center gap-2 fw-semibold text-light" to="mailto:">
                <i class="fa-regular fa-envelope"></i> تواصل معنا
              </Link>

              <Link className=" d-flex align-items-center justify-content-center gap-2 fw-semibold text-light" to="/blog">
                تصفح المقالات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
