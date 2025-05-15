// import React,{useContext} from 'react'
// import UserContex from '../contex/UserContex'



// function Profile() {
// const {user} = useContext(UserContex)

   
  
// if(!user) return <div> Please log in</div>
// return <div>Welcome {user.Username}</div>

// }
// export default Profile


import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile