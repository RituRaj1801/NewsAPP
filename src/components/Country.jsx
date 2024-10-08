import React, { Component } from 'react';
import ReactFlagsSelect from "react-flags-select";
import '../styles/Country.css'
export default class Country extends Component {
  constructor() {
    super();
    this.state = {
      selected: "IN" // Initialize state
    };
  }
  country =(code)=>{
   this.setState({
    selected:code
   })
   this.props.countryCode(code)
  }


  
  render() {
      return (<>

      <ReactFlagsSelect
        selected={this.state.selected} // Use class component state
        onSelect={this.country} // Pass the function reference
        // searchable
        searchPlaceholder="Search countries"
        optionsSize={14}
        className="menu-flags"

        // className='form-control me-2 mx-1'
      />
      </>
    );
  }
}
