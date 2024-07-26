// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import './index.css';

const App = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await axios.get('https://student-attendance-tracker-q4nb.vercel.app/subjects');
      setSubjects(response.data.map((subject) => subject.name));
    };
    fetchSubjects();
  }, []);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <SubjectForm addSubject={addSubject} />
        <SubjectList subjects={subjects} />
      </div>
    </div>
  );
};

export default App;
