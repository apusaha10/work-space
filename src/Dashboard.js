import React from 'react'
import './components/dashboard/assets/custom.css'
import './components/dashboard/assets/custom.js'
import './fontawesome'

import Header from './components/dashboard/Header';
import Content from './components/dashboard/Content'
import Footer from './components/dashboard/Footer';

class Dashboard extends React.Component {

render() 
{
  return(
<div>
<Header/>
<Footer/>
</div>
);
}
}

 export default Dashboard;


