import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:8080/api/v1/restaurants/Helsinki")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.restaurants,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> SolidAbiksen tikkataulukilleri</h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    Ravintola: { item.name }, 
                    Aukioloajat: { item.openingHours } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App;