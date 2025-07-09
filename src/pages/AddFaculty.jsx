import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFaculty = () => {
  const navigate = useNavigate();
  const [newFaculty, setNewFaculty] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    experience: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFaculty.name && newFaculty.email && newFaculty.phone && newFaculty.specialization && newFaculty.experience) {
      // In a real app, this would make an API call
      alert(`Faculty ${newFaculty.name} added successfully!`);
      navigate('/faculties');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Add New Faculty</h1>
        <button
          onClick={() => navigate('/faculties')}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Faculties</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faculty Name *
              </label>
              <input
                type="text"
                value={newFaculty.name}
                onChange={(e) => setNewFaculty({...newFaculty, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter faculty name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={newFaculty.email}
                onChange={(e) => setNewFaculty({...newFaculty, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                value={newFaculty.phone}
                onChange={(e) => setNewFaculty({...newFaculty, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization *
              </label>
              <input
                type="text"
                value={newFaculty.specialization}
                onChange={(e) => setNewFaculty({...newFaculty, specialization: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter specialization"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience *
              </label>
              <input
                type="text"
                value={newFaculty.experience}
                onChange={(e) => setNewFaculty({...newFaculty, experience: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 5 years"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate('/faculties')}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Faculty
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFaculty; 