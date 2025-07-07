import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { generateSampleData } from '../utils/sampleData';

const FacultyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const data = generateSampleData();
  
  const faculty = data.faculties.find(f => f.id === parseInt(id));

  if (!faculty) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Faculty not found</h2>
        <button
          onClick={() => navigate('/faculties')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Faculties
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Details</h1>
        <button
          onClick={() => navigate('/faculties')}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Faculties</span>
        </button>
      </div>

      {/* Faculty Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-2xl font-bold">
                {faculty.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{faculty.name}</h2>
            <p className="text-gray-600 mb-4">{faculty.specialization}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <p className="text-sm font-medium text-gray-500">Experience</p>
                <p className="text-sm text-gray-900">{faculty.experience}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{faculty.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-sm text-gray-900">{faculty.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default FacultyDetail; 