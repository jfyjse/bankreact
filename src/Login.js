import React from 'react'
import './Login.css'


class Login extends React.Component{


    state={
        username:'',
        password:''
    }
    usernameChange=(event)=>{
    this.setState({username:event.target.value})}

    passwordChange=(event)=>{
        this.setState({password:event.target.value})
    }
    handleSubmit=(event)=>
    {
        alert("username: "+this.state.username)
        alert("pwd: "+this.state.password)
    }

    render(){
       return <div> 
           <div class="container headd">
    <h1 class="margg">State Bank Of India</h1>
   
</div>


<form >
    <div className="Login" class="container fhead">
        <div class="mb-3">
            <label  class="form-label labmargin">Account number</label>
            <input onChange={this.usernameChange} type="text"  name= "username" class="form-control" id="acno"/>
            {/* <div  class="err">invalid accno</div> */}


        </div>
        <div class="mb-3">
            <label for="pswd" class="form-label">password</label>
            <input onChange={this.passwordChange} type="password" name="password" class="form-control" id="pswd"/>
            {/* <div  id="paass" class="err">Wrng pwd fmt</div> */}
            <div id="emailHelp" class="form-text">We'll never share your password with anyone else.</div>
        </div>
        <div class="flexx">
            <button type="submit" name="submit" class="btn btn-primary">login</button>
           <button type="button" class="btn btn-primary">Reg</button>
            
        </div></div>

       
</form>
</div>
    }

}

export default Login