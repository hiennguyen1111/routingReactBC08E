import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../util/settings';
import {http} from '../../util/settings'

// closure function: connect()()
export const layDanhSachPhimAction = (maNhom='GP01') => {
    return (dispatch2) => {
        // let promise = axios({
        //     url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        //     method: 'GET',
        //     headers: {
        //         "TokenCybersoft": TOKEN_CYBERSOFT
        //     }
        // })
        let promise = http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
        promise.then(result => {
            console.log('result', result)
            console.log('result', result.data)
            //Sau khi call api thanh cong lay du lieu api api set vao state mangPhim
            dispatch2({
                type:'LAY_DANH_SACH_PHIM',
                mangPhim:result.data.content
            })
        })
        promise.catch(error => {
            console.log('error', error)
            console.log('error', error.response.data)
        })
    } 
}