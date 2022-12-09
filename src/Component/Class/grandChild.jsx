import React from "react";

class GrandChild extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h5>GrandChild</h5>
                <p>{this.props.data}</p>
            </div>
        )
    }
}

export default GrandChild