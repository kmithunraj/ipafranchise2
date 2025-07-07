import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Faculties from './pages/Faculties'
import FacultyDetail from './pages/FacultyDetail'
import Students from './pages/Students'
import StudentDetail from './pages/StudentDetail'
import Contests from './pages/Contests'
import ContestDetail from './pages/ContestDetail'
import GradingExams from './pages/GradingExams'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/faculties/:id" element={<FacultyDetail />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/contests/:id" element={<ContestDetail />} />
          <Route path="/grading-exams" element={<GradingExams />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
