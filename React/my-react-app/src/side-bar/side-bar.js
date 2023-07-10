import Blog from '../pages/Blogs';
import Contact from '../pages/Contact';
import Course from '../pages/Course';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function SideBar(){

const myName = "Guhan Ganesan";
const courses = ['JAVA','HTML','CSS','PYTHON']

return  <>
            <div className='side-bar'>
               <ul class="list-group">
                  <li class="list-group-item"><a href='/blogs'>blogs</a></li>
                  <li class="list-group-item"><a href='/contacts'>contacts</a></li>
                  <li class="list-group-item"><a href='/courses'>courses</a></li>
               </ul>
               <BrowserRouter>
                  <Routes>
                     <Route   path="blogs" element={<Blog blog_name = 'React JS Course!' />} />
                     <Route   path="contacts" element={<Contact name={myName} />} />
                     <Route   path="courses" element={<Course courses={courses} />} />
                  </Routes>
               </BrowserRouter>
            </div>
         </>
}

export default SideBar;