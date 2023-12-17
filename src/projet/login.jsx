import { useState } from "react"
import './form.css'

export default function Login() {
    const [usernam,setUsernam]=useState(null)
    const [pws,setPws]=useState(null)
    const [nam,setNam]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [display,setDisplay]=useState(true)
    const [style,setStyle]=useState(false)
    const handleClick=()=>{
        setDisplay(false)
    }
    const handleClicks=()=>{
        setDisplay(true)
    }
    const validationEmail=()=>{
        if(!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return true 
        }else{
            return false
        }
    }
    const handleSubmit=(e)=>{
        if(validationEmail()){
            e.preventDefault()
            setStyle(true)
        }else{
            alert('Create a compte Succefully')
        }
    }
    return (
    <main>
        <form onSubmit={handleSubmit} >
            
            {display ?
            <>
            <h4>Login</h4>
            <label htmlFor="">Email or Usernam</label>
            <input type="text" value={usernam} onChange={e=>{
                setUsernam(e.target.value)
            }}/>
            <label >Password</label>
            <input type="password" value={pws} onChange={e=>{
                setPws(e.target.value)
            }}/>
            <input type="submit" value="Login" className="btn-submit" />
            <span  onClick={handleClick}>I dont have acount ?</span>
            </>
            :
            <>
            <h4>sign up</h4>
                <label >Name</label>
                <input type="text" value={nam} onChange={e=>setNam(e.target.value)}/>
                <label >Email</label>
                <input className={style ?'pswError':null}
                type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <label >Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <input type="submit"value="Sign Up" className="btn-submit"/>
                <span  onClick={handleClicks}>I have already acount</span>
            </>
        }
        </form>
    </main>
)
}