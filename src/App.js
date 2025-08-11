// import { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
// import Auth from './componants/Auth';
// import Home from './componants/Home';

// import { supabase } from './supabaseClient';

// export default function App() {
//   const [session, setSession] = useState(null);
 

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//     return () => subscription.unsubscribe();
//   }, []);



//   if (!session) {
//     return <Auth />;
//   }

//   return (
      
//       <BrowserRouter>
//             <Routes>
//         <Route path="/" element={<Home />} />
        
//         <Route path="*" element={<div className="text-center p-6 text-red-500">Page not found</div>} />
//       </Routes>
//       </BrowserRouter>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componants/Home';
import TeacherSection from './componants/TeacherSection';
import Lectures from './componants/Lectures';
import UploadLecture from './componants/UploadLecture';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/App.css';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher/:subjectId" element={<TeacherSection />} />
        <Route path="/lectures/:subjectId/:gradeId" element={<Lectures />} />
        <Route path="/upload" element={<UploadLecture />} />
      </Routes>
    </Router>
  );
}

export default App;