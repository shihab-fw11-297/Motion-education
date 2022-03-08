import { useContext,useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = () => {
    const {setAuth} = useContext(AuthContext);
    const initState = {
        username: "",
        password: "",
    }
    const [userData, setUserData] = useState(initState);
    const [signuperror, setSignUpError] = useState(false)
    const history = useHistory();

    const handleInput = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const emptyData = () => {
        setUserData({
            username: "",
            password: "",
        })
    }


    const handleSignin = (e) => {
        e.preventDefault()
       
        if (!userData.username || !userData.password) {
            alert("Kindly Fill All Details Properly")
            emptyData()
        }
        axios.post(`https://shihab-api.herokuapp.com/api/users/login-user`, userData).then(res => {
            setAuth(res.data)
            setSignUpError(false)
            emptyData();
            history.push("/dashbords");
        }).catch(function (e) {
            setSignUpError(true)
            emptyData();
        })
    }
    return (
        <>
            <div className="signin-container">
                <div className="signin-box">
                    <div className="borders">
                        <div className="siginin-title">Sign In</div>
                    </div>
                    <form onSubmit={handleSignin}>
                        <input type="text" name="username" onChange={handleInput} placeholder="Enter Username" value={userData.username}/>
                        
                        <input type="password" name="password" onChange={handleInput} placeholder="Enter Password" value={userData.password} />
                       
                        <input type="submit" onClick={handleSignin} />
                       
                        <p className="AlreadyRegister">If you are not Registerd Then Please <b><Link to="/register">Click Here</Link></b></p>
                        {signuperror ? <p className="AlreadyRegister">Something Wrong Please Check and Try Gain Leter</p> : "" } 
                    
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;