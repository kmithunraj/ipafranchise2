import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateSampleData, getContestById, getContestParticipants, getContestScoresWithNames } from '../utils/sampleData';

const ContestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = generateSampleData();
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showParticipantModal, setShowParticipantModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  const contest = getContestById(data.contests, parseInt(id));
  const participants = contest ? getContestParticipants(data.students, contest) : [];
  const scores = contest ? getContestScoresWithNames(data.students, contest) : [];

  if (!contest) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Contest not found</h2>
        <button
          onClick={() => navigate('/contests')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Contests
        </button>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'Active': return 'text-blue-600 bg-blue-100';
      case 'Upcoming': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleStudentSelection = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleAddParticipants = () => {
    if (selectedStudents.length > 0) {
      alert(`Added ${selectedStudents.length} students to ${contest.name}`);
      setShowParticipantModal(false);
      setSelectedStudents([]);
    }
  };

  const handleBulkDownload = () => {
    if (selectedStudents.length > 0) {
      alert(`Downloading certificates for ${selectedStudents.length} students`);
      setShowDownloadModal(false);
      setSelectedStudents([]);
    }
  };

  const handleBulkOrder = () => {
    if (selectedStudents.length > 0) {
      alert(`Ordering physical certificates for ${selectedStudents.length} students`);
      setShowDownloadModal(false);
      setSelectedStudents([]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{contest.name}</h1>
        <button
          onClick={() => navigate('/contests')}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Contests</span>
        </button>
      </div>

      {/* Contest Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(contest.status)}`}>
            {contest.status}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{contest.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Start Date</p>
            <p className="text-sm text-gray-900">{new Date(contest.startDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">End Date</p>
            <p className="text-sm text-gray-900">{new Date(contest.endDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Participants</p>
            <p className="text-sm text-gray-900">{participants.length} students</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        {contest.status !== 'Completed' && (
          <button
            onClick={() => setShowParticipantModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Participants
          </button>
        )}
        
        {contest.status === 'Completed' && (
          <>
            <button
              onClick={() => setShowDownloadModal(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Download Certificates
            </button>
            <button
              onClick={() => setShowDownloadModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Order Physical Copies
            </button>
          </>
        )}
      </div>

      {/* Participants Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Participants ({participants.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>

                {contest.status === 'Completed' && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {participants.map((student) => {
                const score = scores.find(s => s.studentId === student.id);
                return (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-sm font-medium">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.email}
                    </td>

                    {contest.status === 'Completed' && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {score ? `${score.score}%` : 'N/A'}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scores Section (if completed) */}
      {contest.status === 'Completed' && scores.length > 0 && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Results</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scores.map((score, index) => (
                  <tr key={score.studentId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{score.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {score.studentName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {score.score}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Participants Modal */}
      {showParticipantModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Add Participants to {contest.name}</h3>
            
            <div className="space-y-2 mb-4">
              {data.students.map((student) => (
                <label key={student.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => handleStudentSelection(student.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">{student.name} - {student.department}</span>
                </label>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowParticipantModal(false)}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddParticipants}
                disabled={selectedStudents.length === 0}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
              >
                Add Selected ({selectedStudents.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download/Order Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Select Students for {contest.name}</h3>
            
            <div className="space-y-2 mb-4">
              {participants.map((student) => (
                <label key={student.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => handleStudentSelection(student.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">{student.name}</span>
                </label>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkDownload}
                disabled={selectedStudents.length === 0}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
              >
                Download ({selectedStudents.length})
              </button>
              <button
                onClick={handleBulkOrder}
                disabled={selectedStudents.length === 0}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400"
              >
                Order Physical ({selectedStudents.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContestDetail; 