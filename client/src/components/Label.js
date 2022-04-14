import React from "react";
import "../App.css"

function Label(){
    function handleSubmit(e) {
        e.preventDefault();
        document.getElementById('lab').innerHTML ='asdfg'
      }
    return(
      <form onSubmit={this.handleSubmit} className="label">
      <button type="button" className ="btn btn-success" onClick={this.handleSubmit} >SORGULA</button>
      <br/>
      <br/>
      <label className="form-label" id="lab">PLAKA KODU</label>
      </form>
    );
}
export default Label;