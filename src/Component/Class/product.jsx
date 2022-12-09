import React from "react";
import "./Style.css"

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            stauts:"Tersedia",
            disable:false
        }
    }

    ButtonBeli = () =>{
        this.setState({
            stock: this.state.stock - 1
        })

        if (this.state.stock <= 1){
            this.setState({
                stauts: "Habis",
                disable: true
        })
        }
    }

    render(){
        return <div className="card">
            <h2>{this.props.nama}</h2>
            <img src="https://d1n6dbtoa2690v.cloudfront.net/article/5b5b049b16312e9c156716b6/5b5b049b16312e9c156716b6_1638355231.jpg" alt="Images" style={{width:"100%",height:"50%"}} />
            <div class="container">
                <p>Rp.<b>{this.props.harga}</b></p>
                <h4><b>{this.state.stock}</b></h4>
                <button onClick={this.ButtonBeli} disabled={this.state.disable}>Beli</button> 
                <p>{this.state.stauts}</p> 
            </div>
        </div>
    }
}

export default Product