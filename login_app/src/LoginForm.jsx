import React, { useState } from "react";

function LoginForm(){

       const [username,setUsername] = useState('');
       const [password,setPassword] = useState('');
       const [msg , setMsg] = useState('');
       const [showDiv,setShowDiv] = useState(false);



const handleInput=(e) =>{
       if(e.target.name ==='username'){
              setUsername(e.target.value);
       }
       if(e.target.name === 'password'){
              setPassword(e.target.value);
       }
       
}
const handleSubmit =(e) =>{
       e.preventDefault();
       if(username ==='user' && password === 'password'){
              setMsg("Welcome, user!");
              setShowDiv(true);
       }else{
              setMsg("Invalid username or password");
       }
}


return(<div className="wrapper">


<h1>Login Page</h1>
<br/>


{ showDiv ? (<div>{msg}</div>) :
  
       (<form onSubmit={handleSubmit}> 
                      <div>{msg}</div>
                      <br/>
                     <div>
                     <label>Username:</label> 
                     <input type="text" 
                            value={username}
                            name ='username'
                            placeholder="username" 
                            className="input"
                            onChange={handleInput} required
                            />
                     </div>
                     <div>
                     <label>Password:</label>
                     <input type="password" 
                            value={password}
                            name='password'
                            placeholder="password" 
                            className="input"
                            onChange={handleInput} required/>
                     </div>

                     <button type='submit' className="submit_button">Submit</button>
                     
       </form>)
}       

</div>);

}

export default LoginForm;