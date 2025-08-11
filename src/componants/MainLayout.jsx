import React from 'react'
import"../Styles/mainLayout.css"
export default function MainLayout() {
  return (
    <section className="vh-100 layout pt-5 " id="main">
    {/* <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  تسجيل الدخول
                </p>

                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example3c"
                      >
                        البريد الالكترونى
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4"> 
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example4c"
                      >
                        كلمة المرور
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                    >
                      تسجيل الدخول
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    <div className="container py-md-5 h-100">
      <div className="d-flex  align-items-center justify-content-center justify-content-md-between flex-column flex-md-row flex-column-reverse h-100">
        <div className="col-12 col-md-7 " data-aos="fade-down-left">
          <h1 className="fw-bold fs-2 fs-md-2 mb-5" >
          منصه الاوئل
          </h1>
          <p className='col-12 col-md-8'>الاوائل هي منصتك الذكية لتعلُّم المناهج الدراسية لمرحلة الثانوية بطريقة حديثة وممتعة.اختَر صفك ومادتك، واشترك في أفضل الكورسات مع نخبة من المدرسين </p>
      
         
        </div>
        <div className="col-12 col-md-5 mb-5 mb-md-0 d-flex justify-content-center justify-content-md-end " data-aos="fade-down-right">
          <img
            className="main-img "
            src={require("../images/vec.png")}
            alt="main-img"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
