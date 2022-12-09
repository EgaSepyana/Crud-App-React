import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            stock: 10
        }
    }

    BeliProduct = (jumlah) =>{
        this.setState({
            stock: this.state.stock - jumlah
        })
    }

    render(){
        return(
            <div>
                <Child1 
                stock={this.state.stock}
                fungsi={this.BeliProduct.bind(this)}
                />
                <Child2 
                stock={this.state.stock}
                />
            </div>
        )
    }
}

export default Parent