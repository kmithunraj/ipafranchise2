import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSampleData } from '../utils/sampleData';

const Faculties = () => {
  const navigate = useNavigate();
  const data = generateSampleData();
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleRowClick = (faculty) => {
    navigate(`/faculties/${faculty.id}`, { state: { faculty } });
  };



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Faculties</h1>
        <button
          onClick={() => navigate('/faculties/add')}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
        >
          <span>+</span>
          <span>Add New Faculty</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Faculty Directory</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>

              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.faculties.map((faculty) => (
                  <tr 
                    key={faculty.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleRowClick(faculty)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {faculty.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{faculty.name}</div>
                          <div className="text-sm text-gray-500">{faculty.specialization}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {faculty.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {faculty.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {faculty.experience}
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

export default Faculties; 