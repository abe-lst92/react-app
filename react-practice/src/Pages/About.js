import React, { Component } from 'react'; 
import Navbar from "../Components/Navbar";




//use a render to return something in our page content on The Dom
class about extends Component{
    render(){
        return(
<div>
<h1>this is my about page</h1>
<Navbar />
</div>



        )
    }
}

export default about;