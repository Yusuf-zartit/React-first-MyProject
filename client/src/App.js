import React from "react";
import Header from './components/Header';
import "./App.css"

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            stcities: [],
            selectedCities: "0",
            backendData: null
        };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }
    

    componentDidMount(){
        fetch('/cities')
        .then(res => res.json())
        .then(data => this.setState({stcities: data}))
    }
    handleSubmit(e) {
      e.preventDefault();
//      if(this.state.stcities.length > 0){
//      this.state.stcities.map((city) => {
//               if(parseInt(city.id)===parseInt(this.state.selectedCities))
//                  document.getElementById('lab').innerHTML = city.PLAKA;
//                  return 0;
//      })
//          }
          fetch('/'+this.state.selectedCities)
          .then(response => response.json())
            .then(data => {this.setState({backendData: data})
              console.log("data",data);
              document.getElementById('lab').innerHTML = data.PLAKA;
            }
          )
          
    }
    handleChange(e) {
      this.setState({selectedCities:e.target.value});
    }

    render(){
        return(
            <div>
            <Header />
              <div className="container">
                <select className="form-select" aria-label="Default select example" onChange={this.handleChange}>
                <option selected>seçim menüsünü açın</option>
              { this.state.stcities.map((city) => {
                 return <option value={city.id}>{city.name}</option>
      
                })
              }
                </select>
              </div>
                <form onSubmit={this.handleSubmit} className="label">
                <button type="button" className ="btn btn-success" onClick={this.handleSubmit} >SORGULA</button>
                <br/>
                <br/>
                <label className="form-label" id="lab">PLAKA KODU</label>
                </form>
          </div>

        )
    }
}
export default App;