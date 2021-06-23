import React from "react"
import { useHistory } from "react-router"

const Header = () =>{
    const history = useHistory()
    return (
        <div 
            style={{width:"100%", height:"100px", background:"grey", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <div 
                style={{flexGrow:"1", display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}} 
                onClick={() => history.push("/home")}>
                    Home
            </div>
            <div 
                style={{flexGrow:"1", display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}} 
                onClick={() => history.push("/user")}>
                    User
            </div>
        </div>
    )
}

export default Header