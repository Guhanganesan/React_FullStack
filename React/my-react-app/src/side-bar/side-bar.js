import Blog from '../pages/Blogs';
import Contact from '../pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function SideBar(){
    return  <>
            <div className='side-bar'>
               <ul class="list-group">
                  <li class="list-group-item"><a href='/blogs'>blogs</a></li>
                  <li class="list-group-item"><a href='/contacts'>contacts</a></li>
               </ul>
               <BrowserRouter>
                  <Routes>
                     <Route   path="blogs" element={<Blog />} />
                     <Route   path="contacts" element={<Contact />} />
                  </Routes>
               </BrowserRouter>
            </div>
            </>
}

export default SideBar;