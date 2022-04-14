import React from "react";
import "../App.css"

class Cities extends React.Component {

    handleChange(event) {   
        event.preventDefault();
        document.getElementById('lab').innerHTML = "" }

    render(){

        return(
            <div>
                <div className="container">
                     <select className="select" onChange={this.handleChange}>
                         {this.props.item.map((item) => (    
                            <option  value={item.id}>{item.name}</option>
                         ))}
                    <label id="lab">aaaaaaaaaa</label>
                    </select>
                </div>
            </div>
        )
    }
}
export default Cities;