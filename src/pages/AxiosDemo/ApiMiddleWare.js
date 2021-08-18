import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { TOKEN_CYBERSOFT } from '../../util/settings';
import { layDanhSachPhimAction } from '../../redux/actions/PhimActions';


export default function ApiMiddleWare(props) {
    const {mangPhim} = useSelector(state=>state.PhimReducer) 

    const dispatch = useDispatch();

    useEffect(() => {

        // 2 loai action trong redux
        // Loai 1: {type: 'type_name', data: {}}
        // Loai 2: action la function
        const action = layDanhSachPhimAction('GP03');  

        // Trong truong hop action la function thi redux se dooi function excute xong => gui du lieu di
        dispatch(action)
        
    }, [])


    const renderPhim = () => {
        return mangPhim.map((phim,index)=>{
            return <div className="col-4" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} />
                    <div className="card-body">
                        <p>{phim.tenPhim}</p>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }


    return (
        <div className="container">
            <h3 className="text-center">Danh sach phim</h3>
            <div className="row">
            {renderPhim()}
            </div>
        </div>
    )
}



// let promise = axios({
        //     url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET',
        //     headers: {
        //         "TokenCybersoft": TOKEN_CYBERSOFT
        //     }
        // })
        // promise.then(result => {
        //     console.log('result', result.data)
        //     //Sau khi call api thanh cong lay du lieu api set vao state mangPhim
        //     dispatch({
        //         type:'LAY_DANH_SACH_PHIM',
        //         mangPhim:result.data.content
        //     })
        // })
        // promise.catch(error => {
        //     console.log('error', error.response.data)
        // })

        // }