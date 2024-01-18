import React, {useState} from 'react'
import videoBg from '../../assets/videos/login_bg.mov'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModal from './LoginModal';

const Login = () => {
  const [modalShow, setModalShow] = useState(false);
  // const [username, setUserName] = useState('')
  // const [password, setPassword] = useState('')

  // const submit = async (e) => {
  //   e.preventDefault();

  //   const baseUrl = 'http://localhost:8000/api'

  //   const user = {
  //     username: username,
  //     password: password
  //   }
  //   //create the post request
  //   const {data} = await axios.post(`${baseUrl}/tokeen`, user, 
  //   {headers: {'Content-Type': 'application/json'}, withCredentials: true})

  //   // Initialize the access & refresh token in localstorage.      
  //   localStorage.clear();
  //   localStorage.setItem('access_token', data.access);
  //   localStorage.setItem('refresh_token', data.refresh);
  //   axios.defaults.headers.common['Authorization'] = 
  //                                   `Bearer ${data['access']}`;
  //   window.location.href = '/'

  // }

    
    
  return (
    <div className='login'>
        <video src={videoBg} autoPlay loop muted className='video'/>
        <div className="content">
            <h1 className='login_title '>Jorie Healthcare</h1>
            <p className='login_subtitle'>Revolutionizing Healthcare and Finance with Advanced Technology</p>
            <Button variant="outline-light" className='login_btn' onClick={() => setModalShow(true)}>Login</Button>
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    </div>
  )
}

export default Login