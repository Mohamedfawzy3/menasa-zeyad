import React, { useState, useEffect } from 'react';
import { supabase } from './utlis/supabaseClient';

export default function UploadLecture() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
    const [video, setVideo] = useState('');

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const { data, error } = await supabase.from('subjects').select('*');
        if (error) {
          throw error;
        }
        setSubjects(data);
        if (data.length > 0) setSelectedSubject(data[0].id);
      } catch (err) {
        console.error('Error fetching subjects:', err.message, err.details, err.hint);
        setError('فشل تحميل المواد: ' + (err.message || 'خطأ غير معروف'));
      }
    }
    fetchSubjects();
  }, []);

  useEffect(() => {
    async function fetchGrades() {
      if (selectedSubject) {
        try {
          const { data, error } = await supabase.from('grades').select('*').eq('subject_id', selectedSubject);
          if (error) {
            throw error;
          }
          setGrades(data);
          if (data.length > 0) setSelectedGrade(data[0].id);
        } catch (err) {
          console.error('Error fetching grades:', err.message, err.details, err.hint);
          setError('فشل تحميل الصفوف: ' + (err.message || 'خطأ غير معروف'));
        }
      }
    }
    fetchGrades();
  }, [selectedSubject]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !selectedSubject || !selectedGrade) {
      setError('يرجى ملء جميع الحقول');
      return;
    }

    try {
      // Upload file to Supabase Storage
      const fileName = `${Date.now()}_${file.name}`;
      // const { error: uploadError } = await supabase.storage
      //   .from('images')
      //   .upload(fileName, file);
      // if (uploadError) {
      //   throw new Error(`فشل رفع الملف: ${uploadError.message}`);
      // }

      // Insert lecture into database
       const imageUrl = `https://pbekewbfkxdiwajvohqt.supabase.co/storage/v1/object/public/lectures/${fileName}`;
      const { error: insertError } = await supabase.from('lectures').insert({
        subject_id: selectedSubject,
        grade_id: selectedGrade,
        title,
        description,
        image_url: imageUrl,
        video_link:video,
      });
      if (insertError) {
        throw new Error(`فشل إضافة المحاضرة: ${insertError.message}`);
      }

      alert('تم رفع المحاضرة بنجاح!');
      setTitle('');
      setDescription('');
      setFile(null);
      setSelectedSubject(subjects[0]?.id || '');
      setSelectedGrade(grades[0]?.id || '');
      setError(null);
    } catch (err) {
      console.error('Error uploading lecture:', err.message, err.details, err.hint);
      setError(err.message || 'فشل رفع المحاضرة');
    }
  };

  return (
    <section className="py-5 container">
      <div className="header w-100 mb-5 text-center">
        <h3 className="fw-bold fs-3">رفع محاضرة جديدة</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">المادة</label>
                  <select
                    className="form-control"
                    id="subject"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    required
                  >
                    <option value="">اختر المادة</option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="grade" className="form-label">الصف الدراسي</label>
                  <select
                    className="form-control"
                    id="grade"
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    required
                  >
                    <option value="">اختر الصف</option>
                    {grades.map((grade) => (
                      <option key={grade.id} value={grade.id}>
                        {grade.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">عنوان المحاضرة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">الوصف</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                   <div className="mb-3">
                  <label htmlFor="video" className="form-label">رابط المحاضرة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="video"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="file" className="form-label">اختر ملف المحاضرة</label>
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">رفع المحاضرة</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}