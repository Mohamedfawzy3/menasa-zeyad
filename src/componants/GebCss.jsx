import React from 'react'
import"../Styles/Who.css"
export default function Who() {
  return (
       
    <section className="py-5  container" id="who">
    <div className="header w-100 mb-5" data-aos="zoom-out">
      <h3 className="fw-bold fs-3 m-auto text-center">استكشف الدورات المقدمه </h3>
    </div>
  <div className="row g-3">
    <div className='col-12 col-sm-6 col-md-4 ' data-aos="zoom-in-left">
      <div className='rounded-3 overflow-hidden'>
    <div className="box position-relative">
    <img src={require("../images/math.jpeg")} className="w-100 h-100" alt="ahia"/>
    <div className="layout rounded-3"></div>
    <div className="text rounded-3">
      <h3>ماده الرياضيات</h3>
      <p>مستر محمد فوزى </p>
    </div>
    </div>
      </div>
    </div>
      <div className='col-12 col-sm-6 col-md-4 rounded-3 overflow-hidden' data-aos="zoom-out">
      <div className='rounded-3 overflow-hidden'>
    <div className="box position-relative">
    <img src={require("../images/ahia.png")} className="w-100 h-100" alt="ahia"/>
    <div className="layout rounded-3"></div>
    <div className="text rounded-3">
      <h3 className='fs-3 fw-bolder'>ماده الاحياء </h3>
      <p>مستر زياد سمير</p>
    </div>
    </div>
      </div>
    </div>
      <div className='col-12 col-sm-6 col-md-4 rounded-3 overflow-hidden' data-aos="zoom-in-right">
      <div className='rounded-3 overflow-hidden'>
    <div className="box position-relative ">
    <img src={require("../images/history.jpeg")} className="w-100 h-100" alt="ahia"/>
    <div className="layout rounded-3"></div>
    <div className="text rounded-3">
      <h3>ماده التاريخ</h3>
      <p>مستر احمد عبدالباسط </p>
      
    </div>
  
    </div>
      </div>
    </div>
  </div>
  </section>
  
  )
}
