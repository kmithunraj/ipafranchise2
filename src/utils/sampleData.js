// Sample data generator for the application
export const generateSampleData = () => {
  // Generate faculties
  const faculties = [
    { id: 1, name: "Ms. Sarah Johnson", email: "sarah.johnson@abacus.edu", phone: "+1-555-0101", experience: "15 years", specialization: "Mental Arithmetic" },
    { id: 2, name: "Mr. Michael Chen", email: "michael.chen@abacus.edu", phone: "+1-555-0102", experience: "12 years", specialization: "Abacus Techniques" },
    { id: 3, name: "Ms. Emily Rodriguez", email: "emily.rodriguez@abacus.edu", phone: "+1-555-0103", experience: "8 years", specialization: "Speed Calculation" },
    { id: 4, name: "Mr. David Kim", email: "david.kim@abacus.edu", phone: "+1-555-0104", experience: "20 years", specialization: "Competition Preparation" },
    { id: 5, name: "Ms. Lisa Thompson", email: "lisa.thompson@abacus.edu", phone: "+1-555-0105", experience: "10 years", specialization: "Foundation Skills" }
  ];

  // Generate students
  const students = [
    { id: 1, name: "Alex Smith", email: "alex.smith@student.edu", grade: "Grade 5", fatherName: "John Smith", enrollmentDate: "2023-09-01" },
    { id: 2, name: "Maria Garcia", email: "maria.garcia@student.edu", grade: "Grade 7", fatherName: "Carlos Garcia", enrollmentDate: "2023-09-01" },
    { id: 3, name: "James Wilson", email: "james.wilson@student.edu", grade: "Grade 3", fatherName: "Robert Wilson", enrollmentDate: "2023-09-01" },
    { id: 4, name: "Sophia Lee", email: "sophia.lee@student.edu", grade: "Grade 9", fatherName: "David Lee", enrollmentDate: "2023-09-01" },
    { id: 5, name: "Ethan Brown", email: "ethan.brown@student.edu", grade: "Grade 2", fatherName: "Michael Brown", enrollmentDate: "2023-09-01" },
    { id: 6, name: "Olivia Davis", email: "olivia.davis@student.edu", grade: "Grade 6", fatherName: "Thomas Davis", enrollmentDate: "2023-09-01" },
    { id: 7, name: "Noah Miller", email: "noah.miller@student.edu", grade: "Grade 8", fatherName: "Christopher Miller", enrollmentDate: "2023-09-01" },
    { id: 8, name: "Ava Johnson", email: "ava.johnson@student.edu", grade: "Grade 4", fatherName: "Daniel Johnson", enrollmentDate: "2023-09-01" },
    { id: 9, name: "William Taylor", email: "william.taylor@student.edu", grade: "Grade 10", fatherName: "Richard Taylor", enrollmentDate: "2023-09-01" },
    { id: 10, name: "Isabella Anderson", email: "isabella.anderson@student.edu", grade: "Grade 1", fatherName: "Steven Anderson", enrollmentDate: "2023-09-01" }
  ];

  // Generate materials
  const materials = [
    { id: 1, name: "Abacus Tool (Professional)", price: 85.00, category: "Tools" },
    { id: 2, name: "Abacus Practice Book", price: 25.00, category: "Books" },
    { id: 3, name: "Abacus Training Kit", price: 35.00, category: "Training Materials" },
    { id: 4, name: "Mental Math Workbook", price: 45.00, category: "Books" },
    { id: 5, name: "Speed Calculation Cards", price: 15.00, category: "Training Materials" },
    { id: 6, name: "Competition Practice Set", price: 120.00, category: "Training Materials" },
    { id: 7, name: "Abacus Competition Kit", price: 150.00, category: "Training Materials" },
    { id: 8, name: "Mathematics Practice Book", price: 30.00, category: "Books" }
  ];

  // Generate orders
  const orders = [
    { 
      id: 1, 
      category: "Materials", 
      studentIds: [1], 
      materialId: 1, 
      quantity: 1, 
      totalAmount: 85.00, 
      status: "Delivered", 
      orderDate: "2024-01-15", 
      deliveryDate: "2024-01-20" 
    },
    { 
      id: 2, 
      category: "Materials", 
      studentIds: [2], 
      materialId: 2, 
      quantity: 1, 
      totalAmount: 25.00, 
      status: "In Transit", 
      orderDate: "2024-01-18", 
      deliveryDate: null 
    },
    { 
      id: 3, 
      category: "Materials", 
      studentIds: [3], 
      materialId: 3, 
      quantity: 1, 
      totalAmount: 35.00, 
      status: "Processing", 
      orderDate: "2024-01-20", 
      deliveryDate: null 
    },
    { 
      id: 4, 
      category: "Materials", 
      studentIds: [4], 
      materialId: 4, 
      quantity: 1, 
      totalAmount: 45.00, 
      status: "Delivered", 
      orderDate: "2024-01-12", 
      deliveryDate: "2024-01-17" 
    },
    { 
      id: 5, 
      category: "Materials", 
      studentIds: [5], 
      materialId: 5, 
      quantity: 2, 
      totalAmount: 30.00, 
      status: "Delivered", 
      orderDate: "2024-01-10", 
      deliveryDate: "2024-01-15" 
    },
    { 
      id: 6, 
      category: "Materials", 
      studentIds: [6], 
      materialId: 6, 
      quantity: 1, 
      totalAmount: 1200.00, 
      status: "Processing", 
      orderDate: "2024-01-22", 
      deliveryDate: null 
    },
    { 
      id: 7, 
      category: "Materials", 
      studentIds: [7], 
      materialId: 7, 
      quantity: 1, 
      totalAmount: 150.00, 
      status: "In Transit", 
      orderDate: "2024-01-19", 
      deliveryDate: null 
    },
    { 
      id: 8, 
      category: "Materials", 
      studentIds: [8], 
      materialId: 8, 
      quantity: 1, 
      totalAmount: 30.00, 
      status: "Delivered", 
      orderDate: "2024-01-14", 
      deliveryDate: "2024-01-19" 
    },
    { 
      id: 9, 
      category: "Contest Certificates", 
      studentIds: [1, 6, 9], 
      contestId: 1, 
      quantity: 3, 
      totalAmount: 45.00, 
      status: "Processing", 
      orderDate: "2024-01-21", 
      deliveryDate: null 
    },
    { 
      id: 10, 
      category: "Grading Certificates", 
      studentIds: [2, 4, 7], 
      certificateIds: [2, 4, 7], 
      quantity: 3, 
      totalAmount: 60.00, 
      status: "Delivered", 
      orderDate: "2024-01-16", 
      deliveryDate: "2024-01-21" 
    },
    { 
      id: 11, 
      category: "Materials", 
      studentIds: [9, 10], 
      materialId: 1, 
      quantity: 2, 
      totalAmount: 170.00, 
      status: "Processing", 
      orderDate: "2024-01-23", 
      deliveryDate: null 
    },
    { 
      id: 12, 
      category: "Contest Certificates", 
      studentIds: [4, 9], 
      contestId: 4, 
      quantity: 2, 
      totalAmount: 30.00, 
      status: "In Transit", 
      orderDate: "2024-01-24", 
      deliveryDate: null 
    }
  ];

  // Generate contests
  const contests = [
    {
      id: 1,
      name: "Annual Abacus Competition",
      description: "A competitive abacus calculation contest for all students",
      startDate: "2024-02-01",
      endDate: "2024-02-15",
      status: "Completed",
      participants: [1, 6, 9],
      scores: [
        { studentId: 1, score: 95, rank: 1 },
        { studentId: 6, score: 88, rank: 2 },
        { studentId: 9, score: 82, rank: 3 }
      ]
    },
    {
      id: 2,
      name: "Mental Math Olympiad",
      description: "Advanced mental arithmetic competition",
      startDate: "2024-03-01",
      endDate: "2024-03-10",
      status: "Active",
      participants: [2, 7],
      scores: []
    },
    {
      id: 3,
      name: "Speed Calculation Championship",
      description: "Fastest calculation competition for abacus students",
      startDate: "2024-04-01",
      endDate: "2024-04-20",
      status: "Upcoming",
      participants: [],
      scores: []
    },
    {
      id: 4,
      name: "Abacus Skills Challenge",
      description: "Comprehensive abacus skills competition",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      status: "Completed",
      participants: [4, 9],
      scores: [
        { studentId: 4, score: 92, rank: 1 },
        { studentId: 9, score: 85, rank: 2 }
      ]
    }
  ];

  // Generate grading certificates
  const gradingCertificates = [
    { id: 1, studentId: 1, examName: "Grade 5", score: 95, examDate: "2024-01-10", certificateUrl: "/certificates/grade5_alex_smith.pdf" },
    { id: 2, studentId: 2, examName: "Grade 7", score: 88, examDate: "2024-01-12", certificateUrl: "/certificates/grade7_maria_garcia.pdf" },
    { id: 3, studentId: 3, examName: "Grade 3", score: 82, examDate: "2024-01-15", certificateUrl: "/certificates/grade3_james_wilson.pdf" },
    { id: 4, studentId: 4, examName: "Grade 9", score: 90, examDate: "2024-01-18", certificateUrl: "/certificates/grade9_sophia_lee.pdf" },
    { id: 5, studentId: 5, examName: "Grade 2", score: 78, examDate: "2024-01-20", certificateUrl: "/certificates/grade2_ethan_brown.pdf" },
    { id: 6, studentId: 6, examName: "Grade 6", score: 96, examDate: "2024-01-22", certificateUrl: "/certificates/grade6_olivia_davis.pdf" },
    { id: 7, studentId: 7, examName: "Grade 8", score: 85, examDate: "2024-01-25", certificateUrl: "/certificates/grade8_noah_miller.pdf" },
    { id: 8, studentId: 8, examName: "Grade 4", score: 87, examDate: "2024-01-28", certificateUrl: "/certificates/grade4_ava_johnson.pdf" },
    { id: 9, studentId: 9, examName: "Grade 10", score: 79, examDate: "2024-01-30", certificateUrl: "/certificates/grade10_william_taylor.pdf" },
    { id: 10, studentId: 10, examName: "Grade 1", score: 91, examDate: "2024-02-01", certificateUrl: "/certificates/grade1_isabella_anderson.pdf" }
  ];

  return {
    faculties,
    students,
    materials,
    orders,
    contests,
    gradingCertificates
  };
};

// Helper functions to get related data
export const getStudentById = (students, id) => students.find(student => student.id === id);
export const getFacultyById = (faculties, id) => faculties.find(faculty => faculty.id === id);
export const getMaterialById = (materials, id) => materials.find(material => material.id === id);
export const getOrderById = (orders, id) => orders.find(order => order.id === id);
export const getContestById = (contests, id) => contests.find(contest => contest.id === id);
export const getCertificateByStudentId = (certificates, studentId) => certificates.filter(cert => cert.studentId === studentId);

// Get orders for a specific student
export const getOrdersByStudentId = (orders, studentId) => orders.filter(order => order.studentIds.includes(studentId));



// Get contest participants
export const getContestParticipants = (students, contest) => {
  return contest.participants.map(studentId => getStudentById(students, studentId));
};

// Get contest scores with student names
export const getContestScoresWithNames = (students, contest) => {
  return contest.scores.map(score => ({
    ...score,
    studentName: getStudentById(students, score.studentId)?.name || 'Unknown'
  }));
}; 