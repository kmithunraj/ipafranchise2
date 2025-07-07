import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateSampleData, getOrdersByStudentId, getMaterialById } from '../utils/sampleData';

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = generateSampleData();
  
  const student = data.students.find(s => s.id === parseInt(id));
  const orders = student ? getOrdersByStudentId(data.orders, parseInt(id)) : [];

  if (!student) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Student not found</h2>
        <button
          onClick={() => navigate('/students')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Students
        </button>
      </div>
    );
  }



  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-100';
      case 'In Transit': return 'text-blue-600 bg-blue-100';
      case 'Processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Student Details</h1>
        <button
          onClick={() => navigate('/students')}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Students</span>
        </button>
      </div>

      {/* Student Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-2xl font-bold">
                {student.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{student.name}</h2>
            <p className="text-gray-600 mb-4">{student.grade}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{student.email}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Grade</p>
                <p className="text-sm text-gray-900">{student.grade}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Father Name</p>
                <p className="text-sm text-gray-900">{student.fatherName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Enrollment Date</p>
                <p className="text-sm text-gray-900">{new Date(student.enrollmentDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Order History ({orders.length} orders)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Material
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => {
                const material = getMaterialById(data.materials, order.materialId);
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material?.name || 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${order.totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default StudentDetail; 