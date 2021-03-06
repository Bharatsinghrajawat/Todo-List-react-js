import React from 'react';
import PropTypes from 'prop-types';
class AddTodo extends React.Component {
    state = {
        title : ""
    }
   
    onSubmit = (e) => {
        if(this.state.title===''){
            alert('add some to do');
        }else{
            this.props.addTodo(this.state.title);
            this.setState({title : ""});            
        }
        e.preventDefault();

    }

    onChange = (e) => this.setState({title : e.target.value}); //{e.target.name : e.target.value} we can use name attribute of other name type like e.target.email or e.target.contact etc.


render () {
    return (
        <form onSubmit={this.onSubmit} style={{display : "flex"}}>
            <input type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}  style={{flex : "10" ,padding : "5px" , fontWeight : "bold" }}/>
            <input type="submit" value="Submit"  style={{flex : "1" , fontSize : "2em" , fontWeight : "bold" }}/>
        </form>
    )
}
}
AddTodo.propTypes = {
    addTodo : PropTypes.func.isRequired
}


export default AddTodo ;