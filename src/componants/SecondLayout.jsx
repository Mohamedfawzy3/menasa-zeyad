import React from "react";
import "../Styles/SecondLayout.css";
export default function SecondLayout() {
  return (
    <section className="shadow shadow-sm py-5 shower text-center ">
      <main className="container"data-aos="fade-down">
        <h2 className="fw-bold fs-1 m-auto text-center">,,</h2>
        <p className="text-center text fs-4 fs-md-1 fw-bold my-4">
          تعلّمك اليوم هو استثمار في مستقبلك. لا تخف من السؤال، فالفضول بداية
          الفهم. أخطئ، تعلم، وواصل. أنت قادر، ونحن معك في كل خطوة.
        </p>
        <div className="d-flex gap-3 justify-content-center"data-aos="fade-up">
          <img src={require("../images/hero2.webp")} alt="hero-img" />
          <div >
            <h4>فريق منصه عافر </h4>
            <p>خبراء التعليم والمناهج الحديثه</p>
          </div>
        </div>
      </main>
    </section>
  );
}
