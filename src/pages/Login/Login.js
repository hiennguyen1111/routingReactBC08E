import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';




export default function Login(props) {
    const [state, setState] = useState({isSaveForm:true, taiKhoan:'', matKhau:''})

    const handleChangeInput = (event) => {
        let {value, name} = event.target;

        setState({
            ...state,
            [name]: value,
        })
        console.log('state', state);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(state.taiKhoan === 'cybersoft' ) {
            // Xu ly nghiep vu thanh cong moi chuyen huong
            props.history.push('/home');
            // Thay doi trang hien tai thanh trang co path tuong ung
            // props.history.replace('/home');
        } else {
            alert ('Tai khoan hoac mat khau khong dung!');
        }  
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Tai Khoan</p>
                <input className="form-control" name="taiKhoan" onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <p>Mat Khau</p>
                <input className="form-control" name="matKhau" type="matKhau" onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <button className="btn btn-outline-primary">Login</button>
                <button className="btn btn-outline-success" onClick={()=>{
                    props.history.goBack()
                }}>Go back</button>
            </div>
            <Prompt when={state.isSaveForm} message={(location)=>{

                return 'Ban co chac muon roi khoi trang?';
            }} />
        </form>
    )
}
