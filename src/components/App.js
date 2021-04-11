import React from 'react';
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { images : []};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    async onSearchSubmit(term)
    {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:
                {
                    Authorization: "Client-ID jLM9e4PIL-Xv8gtSDGMLBcE-mDr4xXTZthVmU1Vh_k4"
                }
            }
            );
        this.setState({ images:response.data.results });
        console.log("Hello");
    }
   render() {
       return (
           <div className="ui container" style={{marginTop: '20px'}}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
               Found : {this.state.images.length} images
           </div>
       );
   }
}
export default App;