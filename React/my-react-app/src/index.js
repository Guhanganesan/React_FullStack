import React from 'react'
import ReactDOM from 'react-dom'
import './layout.css';
import Header from './header/header'
import SideBar from './side-bar/side-bar'
import Footer from './footer/footer'
import TableHeader from './table-header/table-header'
import TableFilter from './table-filter/table-filter'
import CustomerTable from './customer-table/customer-table'

const main = (

  <main className='test'>

     <div className='container'>
        
        <Header/>

        <div className='content'>

          <SideBar/>

          <div className='table-view'>

              <TableHeader/>

              <TableFilter/>

              <CustomerTable/>
          </div>

        </div>

       <Footer/>

     </div>
  </main>
)


const app = (
  <div>
    {main}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)