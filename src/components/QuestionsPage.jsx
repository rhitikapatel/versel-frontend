import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function QuestionsPage() {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyQuestions = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:4001/company/${companyId}`);
        setCompany(res.data);
        setQuestions(res.data.questions || []);
      } catch (error) {
        console.error('Error fetching company questions:', error);
        setError('Failed to load questions');
      } finally {
        setLoading(false);
      }
    };

    if (companyId) {
      fetchCompanyQuestions();
    }
  }, [companyId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
      <div className="mb-8">
        <button 
          onClick={() => navigate('/course')}
          className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          ← Back to Companies
        </button>
        
        {company && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <img 
                src={company.image} 
                alt={company.name} 
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{company.name}</h1>
                <p className="text-gray-600">{company.description}</p>
                <span className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full mt-2">
                  {company.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Interview Questions</h2>
        
        {questions.length > 0 ? (
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-3">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-lg">{question}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No questions available for this company yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}