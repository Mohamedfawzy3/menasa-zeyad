import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './utlis/supabaseClient';
import { Link } from 'react-router-dom';
export default function Lectures() {
  const { subjectId, gradeId } = useParams();
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLectures() {
      try {
        const { data, error } = await supabase
          .from('lectures')
          .select('*')
          .eq('subject_id', subjectId)
          .eq('grade_id', gradeId);
        if (error) {
          throw error;
        }
        setLectures(data);
      } catch (err) {
        console.error('Error fetching lectures:', err.message, err.details);
        setError('فشل تحميل المحاضرات');
      } finally {
        setLoading(false);
      }
    }
    fetchLectures();
  }, [subjectId, gradeId]);

  return (
    <section className="py-5 container">
      <div className="header w-100 mb-5 text-center">
        <h3 className="fw-bold fs-3">المحاضرات المتاحة</h3>
      </div>
      {loading ? (
        <div className="text-center">جاري التحميل...</div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <div className="row g-3">
          {lectures.map((lecture) => (
            <div key={lecture.id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100">
                <Link to={lecture.video_link
                }>
                 <img
                  src='https://pbekewbfkxdiwajvohqt.supabase.co/storage/v1/object/public/images/subject.webp'
                  className="card-img-top"
                  alt={lecture.title}
                  onError={(e) => (e.target.src = '/fallback-image.jpg')}
                />
                <div className="card-body">
                  <h5 className="card-title">{lecture.title}</h5>
                  <p className="card-text">{lecture.description}</p>
                </div>
                </Link>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}