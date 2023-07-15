import Blog from '../pages/Blogs';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Example from '../pages/Example';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function SideBar(){

const myName = "Guhan Ganesan";
const courses = ['JAVA','HTML','CSS','PYTHON']
const data = [
   {
      'id':1,
      'name':'guhan',
      'age':32,
      'mobile':349843
   },
   {
      'id':2,
      'name':'anbu',
      'age':30,
      'mobile':464274
   }
]

return  <>
            <div className='side-bar'>
               <ul class="list-group">
                  <li class="list-group-item"><a href='/blogs'>blogs</a></li>
                  <li class="list-group-item"><a href='/contacts'>contacts</a></li>
                  <li class="list-group-item"><a href='/courses'>courses</a></li>
                  <li class="list-group-item"><a href='/example'>examples</a></li>
               </ul>
               <BrowserRouter>
                  <Routes>
                     <Route   path="blogs" element={<Blog blog_data={data} />} />
                     <Route   path="contacts" element={<Contact name={myName} />} />
                     <Route   path="courses" element={<Course courses={courses} />} />
                     <Route   path="example" element={<Example name={myName} courses={courses} data={data} />} />
                  </Routes>
               </BrowserRouter>
            </div>
         </>
}

export default SideBar;