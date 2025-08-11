import React, { useEffect, useState } from 'react'
import '../Styles/levels.css'
import { createClient } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
export default function Levels_content() {
  const supabase = createClient("","");
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [subjects, setSubjects] = useState([]);
      async function handleLogin(event) {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) {
          alert(error.message);
        } else {
          alert('Check your email for the login link!');
        }
        setLoading(false);
      }
useEffect(() => {
        async function fetchSubjects() {
          setLoading(true);
          try {
          const { data, error } = await supabase
  .from('teacher_subjects')
  .select(`
    id,
    subject_id,
    level,
    subjects (id, name),
    teachers (id, name)
  `);
            if (error) throw error;
            // Group by subject_id to avoid duplicates
            const subjectMap = data.reduce((acc, item) => {
              const { subject_id, subjects, teachers, level } = item;
              if (!acc[subject_id]) {
                acc[subject_id] = { ...subjects, teachers: [], levels: [] };
              }
              acc[subject_id].teachers.push(teachers);
              acc[subject_id].levels.push(level);
              return acc;
            }, {});
            setSubjects(Object.values(subjectMap));
            console.log(subjects
            );
            
          } catch (error) {
            console.error('Error fetching subjects:', error.message);
          } finally {
            setLoading(false);
          }
        }
        fetchSubjects();
      }, []);


  return (
    <>
    <div className='vh-100   levels_hero d-flex align-items-center position-relative'> 
    <div className='hero-layout position-absolute'></div>
    <div className="container">
<div className=' row  align-items-center justify-content-between'>
        <div className="col-12 col-sm-6">
            <div className="text">
            
                <h3 className='fs-1 fw-bolder  mb-3' >أ / محمد فوزى</h3>
                  <h3 className='mb-5'>ماده الرياضيات</h3>
                <p className='fs-5 second-color fw-medium'>أحمد تخرج من كلية العلوم قسم الكيمياء. مدرب متمرس في تدريس الكيمياء لأكثر من عشر سنوات، وله إسهامات متميزة في تبسيط المفاهيم الكيميائية للطلاب في مراحل التعليم المختلفة. قام بتأليف عدد من الكتب والمذكرات التعليمية التي ساعدت آلاف الطلاب على التفوق في مادة الكيمياء.
                  ت</p>
            </div>
        </div>
        <div className="col-12 col-sm-4">
            <div className="image-box">
                <img src={require('../images/m.jpg')} className='w-100 h-100'  alt="teacher" />
            </div>
        </div>
      
      </div>
    </div>
      
    </div>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              classfficlassName="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? 'Sending...' : 'Send Magic Link'}
            </button>
          </div>
        </div>
        {/* =================== */}
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Available Subjects</h1>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) =>{
                console.log("subject", subject);
                
                return(
               <>
              
                <Link
                  key={subject.id}
                  to={`/subject/${subject.id}/${subject.teachers[0].id}`}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-xl font-semibold">{subject.name}</h2>
                  <p className="text-gray-600">
                    Taught by: {subject.teachers.map(t => t.name).join(', ')}
                  </p>
                  <p className="text-gray-500">Levels: {subject.levels.join(', ')}</p>
                </Link>
                </>
              )
              } )}
            </div>
          )}
        </div>
    </>
  )
}
