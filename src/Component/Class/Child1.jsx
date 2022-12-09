import React from "react";

class Child1 extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    minBeli = 1
    render(){
        return(
            <div>
                <h1>Ini Child 1</h1>
                <h4>{this.props.stock}</h4>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
        )
    }
}

export default Child1