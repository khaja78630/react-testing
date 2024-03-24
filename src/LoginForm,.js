import { useState } from "react";

function LoginForm(props) {
  const [loginstatus, setLoginStatus] = useState('false');
  const [username, setUserName] = useState('')
  return (
    <div>
        <label for="uname">User Name</label>
        <input type="text" id="uname" value={username} onChange={(e) => {setUserName(e.target.value)}}/>
        {/* <label for="password">Password/label </label> */}
        {/* <input type="text" id="password"/> */}
        <button onClick={() => {setLoginStatus('true')}}>Login</button>
        <p>props value {props.name}</p>
        <p>login status {loginstatus}</p>
        <p>user name {username}</p>
    </div>
  );
}

export default LoginForm;
