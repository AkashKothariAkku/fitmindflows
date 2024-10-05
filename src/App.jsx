import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Coaches from './pages/Coaches/Coaches';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import AdminLogin from "./pages/Admin/Login/AdminLogin"
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AdminNavigation from './components/Admin/Navigation/Navigation';
import UserList from './pages/Admin/UserList/UserList';
import User from './pages/Admin/User/User';
import Blogs from './pages/Admin/Blogs/Blogs';
import AddBlog from './pages/Admin/Blogs/Addblog/AddBlog';
import Subscribers from './pages/Admin/Subscribers/Subscribers';
import EditProfile from './pages/Admin/EditProfile/EditProfile';
import UpcomingEvents from './pages/UpcomingEvents/UpcomingEvents';
import EventDetailsPage from './pages/EventDetails/EventDetailsPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/mma-workshop" element={<EventDetailsPage />} />
          <Route path="admin-login-panel" element={<AdminLogin />} />
          <Route path="admin" element={<AdminNavigation />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:id" element={<User />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="edit-blog/:id" element={<AddBlog />} />
          <Route path="subscribers" element={<Subscribers />} />
          <Route path="edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
