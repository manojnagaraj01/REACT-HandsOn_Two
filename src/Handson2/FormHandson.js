import React, {Component} from 'react';
import "./Handson2.css"

class FormHandson extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
            dept : '',
            rating : '',
            error : {},
            StuData : []
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }
    validate = () =>{
        //Name
        if(!this.state.name){
            this.state.error.name = "Please Fill your name"
        }
        //password 8-16
        if(!this.state.dept){
            this.state.error.dept = "Please Fill your Dept"
        }
        if(!this.state.rating || parseInt(this.state.rating) < 1 || parseInt(this.state.rating) > 5 ){
            this.state.error.rating = " Rating should be 1 to 5"
        }
    }
    handleSubmit = () =>{ 

        this.validate();
        const tempObj = { 
            name : this.state.name ,
            dept : this.state.dept,
            rating : this.state.rating
        }
        // console.log(this.state.name.length);
        this.state.StuData.push(tempObj)
        this.setState(
            {StuData : this.state.StuData, name : '', dept : '', rating : ''}
        )

    }
    render(){
        return (
            <>
                <div className='parent'>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <label>Name : 
                    <input type='text' name='name'  id="name" value={this.state.name} placeholder='Enter Your Name' onChange={this.handleChange}/> </label><br></br>
                    <div className='derror'>
                        {this.state.error.name && <span>Please fill the Name field</span>}
                    </div>
                    <label>Dept :
                    <input type='text' name='dept' id="dept" value={this.state.dept} placeholder='Enter Your Dept' onChange={this.handleChange}/> </label><br></br>
                    <div className='derror'>
                        {this.state.error.dept && <span>Please fill the Dept field</span>}
                    </div>
                    <label>Rating :
                    <input type='number' name='rating' id="rating" value={this.state.rating} placeholder='Enter Your Rating' onChange={this.handleChange}/> </label><br></br>
                    <div className='derror'>
                        {this.state.error.rating && <span>Rating 1 - 5 </span>}
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className='parentChild'>
                    {this.state.StuData.map((item, index) => {
                        return (
                            <div className='child' key={index}>
                                <span>Name : {item.name}</span>||
                                <span>dept : {item.dept}</span>||
                                <span>Rating : {item.rating}</span>
                            </div>   
                        )                        
                    })}
                </div>
            </>
        )
    }
}

export default FormHandson;