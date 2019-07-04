//for create component
import React,{Component} from 'react';
//for use graphql query
import {graphql} from 'react-apollo';


//create component class
class BookDetails extends Component{
    render(){
        return(
            <div id="book-details">
                <p>Book Details</p>
            </div>
        );
    }
}

//export this component
export default BookDetails