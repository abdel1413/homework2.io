import React from 'react';
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state ={
            favLinks:[]
        }
        
    }

    removeLinks = (index )=> {
        /*
            TODO - Create logic for setting the state 
            to filter array and remove favLink at index
        */
    
        const copyLink = this.state.favLinks.slice(); //copy array Favlinks
        copyLink.splice(index,1);  //remove a row
        this.setState({favLinks:copyLink}) //update array favLinks

    };

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({favLinks:this.state.favLinks.concat(favLink)});
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>

                {/*TODO - Add Table Component */}
                <Table linkData = {this.state.favLinks} removeLink = {this.removeLinks}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form  onSubmit ={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;