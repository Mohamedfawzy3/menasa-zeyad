import React from "react";
import { useState } from "react";
export default function ContactUS() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit=(e)=>{
e.preventDefault()
  }
  return (
    <section className="py-5 contact" id="contact">
      <div className="header w-100 mb-3" data-aos="zoom-out">
        <h3 className="fw-bold fs-3 m-auto text-center">للتواصل والاستفسار</h3>
      </div>
      <p className="text-center">
         تعبئه النموذج التالى او التواصل من خلال
        <a href="https://wa.me/+966555170120" className="fw-bold whatsapp me-2">
          واتساب
        </a>
      </p>
      <main className="container ">
        <form className="m-auto col-12 col-sm-10 col-md-8 bg-white shadow shadow-sm p-5 rounded-4" onSubmit={(e)=>handleSubmit(e)}>
          <h3 className="fw-bold fs-4 mb-3">يسعدنى تواصلك ,,</h3>
          <div className="mb-3 col-12 col-md-6 ps-md-2 d-inline-block">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="اسمك الكامل"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-12 col-md-6 pe-md-2 d-inline-block">
            <input
              type="text"
              className="form-control"
              id="e"
           placeholder="البريد الالكترونى"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="محتوى الرساله"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-center">
         
              <a

               className="btn btn-primary"
                href={`mailto:Smhejailan@gmail.com?subject=${name}&body=${message}`}
              >
          ارسال 
              </a>
         
          </div>
        </form>
      </main>
    </section>
  );
}
