import { useState } from 'react';

import Blog from '../pages/Blogs';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Example from '../pages/Example';
import Counter from '../pages/Counter';
import Employee from '../pages/Employee';
import View from '../pages/View';

import AddEmployee from '../components/AddEmployee';

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
   },
   {
      'id':3,
      'name':'raja',
      'age':30,
      'mobile':12345
   },
   {
      'id':5,
      'name':'kannan',
      'age':37,
      'mobile':543231
   }
]

const [count, setCount] = useState(0);

return  <>
            <div className='side-bar'>
               <ul class="list-group">
                  <li class="list-group-item"><a href='/blogs'>blogs</a></li>
                  <li class="list-group-item"><a href='/contacts'>contacts</a></li>
                  <li class="list-group-item"><a href='/courses'>courses</a></li>
                  <li class="list-group-item"><a href='/example'>examples</a></li>
                  <li class="list-group-item"><a href='/counts'>counts</a></li>
                  <li class="list-group-item"><a href='/employee'>employee</a></li>
                  <li class="list-group-item"><a href='/view'>view</a></li>
                  <li class="list-group-item"><a href='/create'>Create Employee</a></li>
               </ul>
               <BrowserRouter>
                  <Routes>
                     <Route   path="blogs" element={<Blog blog_data={data} />} />
                     <Route   path="contacts" element={<Contact name={myName} />} />
                     <Route   path="courses" element={<Course courses={courses} />} />
                     <Route   path="example" element={<Example name={myName} courses={courses} data={data} />} />
                     <Route   path="counts" element={<Counter  setCount={setCount} count={count} />} />
                     <Route   path="employee" element={<Employee  data={data} />} />
                     <Route   path="view" element={<View  />} />
                     <Route   path="create" element={<AddEmployee/>}/>
                  </Routes>
               </BrowserRouter>
            </div>
         </>
}

export default SideBar;