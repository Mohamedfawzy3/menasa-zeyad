// import React from 'react'
// import MainLayout from '../componants/MainLayout'
// import SecondLayout from '../componants/SecondLayout'
// import Who from '../componants/Who'
// import ContactUS from '../componants/ContactUS'
// import Nav from '../componants/Nav'
// export default function Home() {
//   return (
//     <>
//     <Nav />
//             {/* layout */}
//       <MainLayout />
//       {/* Second layout */}
//       <SecondLayout />
//       {/* who i am */}
//       <Who />
//       {/* contact */}
//       <ContactUS />
//       {/* footer */}
  
 
//     </>
//   )
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './utlis/supabaseClient';
// import '../Styles/who.css';
import "../Styles/Who.css";


export default function Home() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const { data, error } = await supabase.from('subjects').select('*');
        if (error) {
          throw error;
        }
        setSubjects(data);
      } catch (err) {
        console.error('Error fetching subjects:', err.message, err.details);
        setError('فشل تحميل المواد');
      } finally {
        setLoading(false);
      }
    }
    fetchSubjects();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">منصة iLearn التعليمية</h1>
          <p className="lead">استكشف الدورات التعليمية مع أفضل المدرسين</p>
          <Link to="#who" className="btn btn-light btn-lg mt-3">ابدأ الآن</Link>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-5 container" id="who">
        <div className="header w-100 mb-5" data-aos="zoom-out">
          <h3 className="fw-bold fs-3 m-auto text-center">استكشف الدورات المقدمه</h3>
        </div>
        {loading ? (
          <div className="text-center">جاري التحميل...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <div className="row g-3">
            {subjects.map((subject) => (
              <div key={subject.id} className="col-12 col-sm-6 col-md-4" data-aos="zoom-in-left">
                <Link to={`/teacher/${subject.id}`} className="text-decoration-none">
                  <div className="rounded-3 overflow-hidden">
                    <div className="box position-relative">
                      <img
                        src="https://pbekewbfkxdiwajvohqt.supabase.co/storage/v1/object/public/images/main.jpeg"
                        className="w-100 h-100"
                        alt={subject.name}
                        onError={(e) => (e.target.src = '/fallback-image.jpg')}
                      />
                      <div className="layout rounded-3"></div>
                      <div className="text rounded-3">
                        <h3>{subject.name}</h3>
                        <p>{subject.teacher}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Additional Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">لماذا تختار منصتنا؟</h3>
          <div className="row">
            <div className="col-md-4">
              <h5>مدرسين خبراء</h5>
              <p>تعلم من أفضل المدرسين في مجالاتهم</p>
            </div>
            <div className="col-md-4">
              <h5>محتوى تفاعلي</h5>
              <p>دروس مصممة لتحقيق أفضل تجربة تعليمية</p>
            </div>
            <div className="col-md-4">
              <h5>سهولة الوصول</h5>
              <p>تعلم في أي وقت ومن أي مكان</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}