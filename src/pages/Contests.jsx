import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSampleData, getContestParticipants, getContestScoresWithNames } from '../utils/sampleData';

const Contests = () => {
  const navigate = useNavigate();
  const data = generateSampleData();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'Active': return 'text-blue-600 bg-blue-100';
      case 'Upcoming': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleCardClick = (contest) => {
    navigate(`/contests/${contest.id}`, { state: { contest } });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Contests</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.contests.map((contest) => {
          const participants = getContestParticipants(data.students, contest);
          const scores = getContestScoresWithNames(data.students, contest);
          
          return (
            <div 
              key={contest.id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCardClick(contest)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{contest.name}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contest.status)}`}>
                  {contest.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{contest.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Start Date:</span>
                  <span>{new Date(contest.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>End Date:</span>
                  <span>{new Date(contest.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Participants:</span>
                  <span>{participants.length} students</span>
                </div>
              </div>

              {contest.status === 'Completed' && scores.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Performers:</h4>
                  <div className="space-y-1">
                    {scores.slice(0, 3).map((score, index) => (
                      <div key={score.studentId} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {index + 1}. {score.studentName}
                        </span>
                        <span className="font-medium text-gray-900">{score.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contests; 