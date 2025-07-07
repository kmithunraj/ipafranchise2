import { useState } from 'react';
import { generateSampleData, getStudentById } from '../utils/sampleData';

const GradingExams = () => {
  const data = generateSampleData();
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCertificateSelection = (certificateId) => {
    setSelectedCertificates(prev => 
      prev.includes(certificateId) 
        ? prev.filter(id => id !== certificateId)
        : [...prev, certificateId]
    );
  };

  const handleSelectAll = () => {
    if (selectedCertificates.length === data.gradingCertificates.length) {
      setSelectedCertificates([]);
    } else {
      setSelectedCertificates(data.gradingCertificates.map(c => c.id));
    }
  };

  const handleBulkDownload = () => {
    if (selectedCertificates.length > 0) {
      alert(`Downloading ${selectedCertificates.length} certificates`);
      setShowBulkModal(false);
      setSelectedCertificates([]);
    }
  };

  const handleBulkOrder = () => {
    if (selectedCertificates.length > 0) {
      alert(`Ordering physical copies for ${selectedCertificates.length} certificates`);
      setShowBulkModal(false);
      setSelectedCertificates([]);
    }
  };



  const filteredCertificates = data.gradingCertificates.filter(certificate => {
    const student = getStudentById(data.students, certificate.studentId);
    return student?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           certificate.examName.toLowerCase().includes(searchTerm.toLowerCase());
  });



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Grading Exams</h1>
        {selectedCertificates.length > 0 && (
          <div className="flex space-x-4">
            <button
              onClick={() => setShowBulkModal(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Download Selected ({selectedCertificates.length})
            </button>
            <button
              onClick={() => setShowBulkModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Order Physical ({selectedCertificates.length})
            </button>
            <button
              onClick={() => setSelectedCertificates([])}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Clear Selection
            </button>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="max-w-md">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Certificates
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student name or exam name..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Grading Certificates ({filteredCertificates.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedCertificates.length === data.gradingCertificates.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exam Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exam Date
                </th>

              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCertificates.map((certificate) => {
                const student = getStudentById(data.students, certificate.studentId);
                return (
                  <tr key={certificate.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedCertificates.includes(certificate.id)}
                        onChange={() => handleCertificateSelection(certificate.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-sm font-medium">
                              {student?.name.split(' ').map(n => n[0]).join('') || 'N/A'}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student?.name || 'Unknown'}</div>
                          <div className="text-sm text-gray-500">{student?.department || 'N/A'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {certificate.examName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {certificate.score}%
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(certificate.examDate).toLocaleDateString()}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bulk Action Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Bulk Actions</h3>
            <p className="text-gray-600 mb-4">
              You have selected {selectedCertificates.length} certificates for bulk processing.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowBulkModal(false)}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkDownload}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Download All
              </button>
              <button
                onClick={handleBulkOrder}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Order Physical
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradingExams; 