import './home.css'
import Button from '@mui/material/Button';
import * as React from 'react';

const Home =()=>{
    return(

        <>
        <div className="home">
        <div >
           <h6  style={{fontSize:"60px" ,color: "blue"}}>Leading MEP & Facility management company in Dubai <br></br>
           <p style={{fontSize :"20px",color:"black"}}>Urban Science is always ready to accept your challenges
Meeting your goals is our main objective. Professional services for facility management & MEP works.</p><br></br>
<Button variant="contained">Contained</Button></h6>
           
        
        <div>
         

        </div>
             <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png"  width={800} height={600}/>
        </div>
        </div>
        
        </>
    );
}

export default Home;