import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from './utlis/supabaseClient';

export default function TeacherSection() {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState({ name: '', teacher: '' });
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubjectAndGrades() {
      try {
        // Fetch subject
        const { data: subjectData, error: subjectError } = await supabase
          .from('subjects')
          .select('*')
          .eq('id', subjectId)
          .single();
        if (subjectError) {
          throw subjectError;
        }
        setSubject(subjectData);

        // Fetch grades
        const { data: gradesData, error: gradesError } = await supabase
          .from('grades')
          .select('*')
          .eq('subject_id', subjectId);
        if (gradesError) {
          throw gradesError;
        }
        setGrades(gradesData);
      } catch (err) {
        console.error('Error fetching data:', err.message, err.details);
        setError('فشل تحميل بيانات المادة أو الصفوف');
      } finally {
        setLoading(false);
      }
    }
    fetchSubjectAndGrades();
  }, [subjectId]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">{subject.name}</h1>
          <p className="lead">مع {subject.teacher}</p>
        </div>
      </section>

      {/* Grades Section */}
      <section className="py-5 container">
        <div className="header w-100 mb-5 text-center">
          <h3 className="fw-bold fs-3">اختر الصف الدراسي</h3>
        </div>
        {loading ? (
          <div className="text-center">جاري التحميل...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <div className="row g-3">
            {grades.map((grade) => (
              <div key={grade.id} className="col-12 col-sm-6 col-md-4">
                <Link to={`/lectures/${subjectId}/${grade.id}`} className="text-decoration-none">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5 className="card-title">{grade.name}</h5>
                      <p className="card-text">ابدأ تعلم {subject.name} لهذا الصف</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}