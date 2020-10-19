import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state ={
           name: "",
           URL: ""
       }
    }

      //one way to solve the setState when it has two 
      //names:put the key in array

      handleChange = () =>{
          /*
            TODO - Logic for changing state based on form changes
        */

        //    this.setState({[this.target.name]: this.target.value});
      }

     //2nd way create two specific fucn and call each other separately:
    
     // 1st:name fcn
    handleNameChange = (event) => {

        console.log("name updated");
        console.log(event.target);

        //change state
       this.setState({name:event.target.value})
      
    }
        //2nd  :URL fcn
      handleURLChange =(event) =>{

        console.log("URL updated");
        console.log(event.target);

         //change state
     this.setState({URL: event.target.value});

      }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log(this.state)
        

        this.setState({name:'', URL:''})
        
        /*
            TODO - Logic for calling props to handle 
            submission and setting state changes
        */
       this.props.onSubmit(this.state)
       

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label> name</label> 
                <input type = 'text' name = "name" onChange={this.handleNameChange} value={this.state.name}></input>
                <label>URL</label>
                <input type = "text"  name = " URL" onChange={this.handleURLChange} value={this.state.URL}></input>
                {/* <input type="submit" value="Submit"></input> */}
                <button onClick = {this.onFormSubmit}> Submit</button>
            </form>
        )
    
    }
}

export default Form;
