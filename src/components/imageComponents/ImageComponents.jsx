import { Component } from "react";

class ImageComponents extends Component {

    render(){
        console.log("THIS", this);
        return (
            <div>
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

export default ImageComponents;