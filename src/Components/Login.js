import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Login() {

    const [userData, setUserData] = useState({
        userEmail: "",
        Password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    }
    const [userDataErr, setUserDataErr] = useState({
        userEmailInvalid: "",
        PasswordInvalid: ""
    })
    const [passwordShown, setPasswordShown] = useState(false);

    const [displayi, setdisplayi] = useState({
        show: { display: 'inline' },
        hide: { display: 'none' }
    });


    const showPassword = () => {
        setdisplayi({
            ...displayi,
            show: { display: 'none' },
            hide: { display: 'inline' }
        })
        setPasswordShown(!passwordShown);
    };
    const hidePassword = () => {
        setdisplayi({
            ...displayi,
            show: { display: 'inline' },
            hide: { display: 'none' }
        })
        setPasswordShown(!passwordShown);
    };
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validPassword = new RegExp('[a-zA-Z0-9]{8}');

    return (
        <>
            <div className='container login  py-5 px-4'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <h1 className='text-center'>Login</h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group py-4">
                                <label htmlFor="exampleInputEmail1">Email address</label>

                                <input
                                    type="email"
                                    value={userData.userEmail}
                                    onChange={(e) => {
                                        setUserData({
                                            ...userData,
                                            userEmail: e.target.value
                                        });
                                        setUserDataErr({
                                            ...userDataErr,

                                            userEmailInvalid:
                                                e.target.value.length == 0 ? "Required value" : validEmail.test(e.target.value) == false ? "Invalid Value" : null
                                        })

                                    }}
                                    className=" mt-4 form-control"
                                    id="exampleInputEmail1"

                                ></input>
                                <small className="text-danger">{userDataErr.userEmailInvalid}</small>

                            </div>
                            <div className="form-group py-4">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <br></br>
                                <div className='container-fluid border border-secondary justify-content-start input my-4 mx-0 px-0'>
                                    <div className='row   justify-content-start py-0 '>
                                        <div className='col-lg-8 col-md-8 col-sm-8 '>
                                            <input
                                                type={passwordShown ? "text" : "password"}
                                                value={userData.Password}
                                                onChange={(e) => {
                                                    setUserData({
                                                        ...userData,
                                                        Password: e.target.value
                                                    });
                                                    setUserDataErr({
                                                        ...userDataErr,

                                                        PasswordInvalid:
                                                            e.target.value.length == 0 ? "Required value" : validPassword.test(e.target.value) == false ? "Invalid Password" : null
                                                    })
                                                }}
                                                className="form-control text-start border-0 d-inline"
                                                id="exampleInputPassword1"

                                            ></input>
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-4 pt-2 text-end '>
                                            <button style={displayi.show} onClick={showPassword}> <RemoveRedEyeIcon />  </button>
                                            <button style={displayi.hide} onClick={hidePassword}> <VisibilityOffIcon /></button>
                                        </div>
                                    </div>
                                </div>
                                <small className="text-danger">{userDataErr.PasswordInvalid}</small>


                            </div>
                            <button type="submit" className="btn btn-primary my-4 mt-4 sub">Submit</button>
                            <Link className='px-3 regq' to="/registration">Not Registed yet?</Link>
                        </form>
                    </div>

                </div>


            </div>

        </>
    );
}

export default Login;