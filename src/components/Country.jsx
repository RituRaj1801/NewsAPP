import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import '../styles/Country.css'
export default function Country(props) {
    const [state, setState] = useState({ selected: "IN" });

    const country = (code) => {
        setState({
            selected: code
        })
        props.countryCode(code)
    }
    return (
        <ReactFlagsSelect
            selected={state.selected} // Use class component state
            onSelect={country} // Pass the function reference
            // searchable
            searchPlaceholder="Search countries"
            optionsSize={14}
            className="menu-flags"
        />
    );
}
