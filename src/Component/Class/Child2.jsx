import React from "react";
import GrandChild from "./grandChild";

class Child2 extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <h2>Ini Child2</h2>
                <GrandChild data={this.props.stock}/>
            </div>
        )
    }
}

export default Child2