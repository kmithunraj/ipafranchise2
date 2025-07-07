import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSampleData } from '../utils/sampleData';

const Students = () => {
  const navigate = useNavigate();
  const data = generateSampleData();
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showBulkOrder, setShowBulkOrder] = useState(false);

  const handleRowClick = (student) => {
    navigate(`/students/${student.id}`, { state: { student } });
  };

  const handleCheckboxChange = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = () => {
    if (selectedStudents.length === data.students.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(data.students.map(s => s.id));
    }
  };

  const handleBulkOrder = () => {
    if (selectedStudents.length > 0) {
      setShowBulkOrder(true);
    }
  };



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>
        {selectedStudents.length > 0 && (
          <div className="flex space-x-4">
            <button
              onClick={handleBulkOrder}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Place Bulk Order ({selectedStudents.length} students)
            </button>
            <button
              onClick={() => setSelectedStudents([])}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Clear Selection
            </button>
          </div>
        )}
      </div>

      {/* Bulk Order Modal */}
      {showBulkOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Place Bulk Order</h3>
            <p className="text-gray-600 mb-4">
              You have selected {selectedStudents.length} students for bulk ordering.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowBulkOrder(false)}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Bulk order placed for ${selectedStudents.length} students!`);
                  setShowBulkOrder(false);
                  setSelectedStudents([]);
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Student Directory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedStudents.length === data.students.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>


                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Father Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.students.map((student) => (
                <tr 
                  key={student.id} 
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => handleCheckboxChange(student.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td 
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() => handleRowClick(student)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 font-medium">
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


                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.fatherName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students; 