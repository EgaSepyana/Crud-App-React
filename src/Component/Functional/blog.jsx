import React from "react";
import './Style.css'

const Blog = (props) =>{
    return <div className="card">
         <img src="https://picsum.photos/200/300" alt="Images" style={{width:"100%",height:"50%"}} />
        <div class="container">
            <p>{props.tanggal}</p>
            <h4><b>{props.judul}</b></h4> 
            <p>{props.deskripsi}</p> 
    </div>
  </div>
}

export default Blog