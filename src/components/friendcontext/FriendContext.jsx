import React, { createContext } from 'react'
const FriendContext = createContext()
function FriendProvider({children}) {
const [callHistory, setCallHistory] = useState([])
    const handleConnection = (connectionType) =>{
        if(connectionType ==="Call"){
            
        }
            
    }
  return (
    <FriendContext value={data}>
        {children}
    </FriendContext>
  )
}

export default FriendContext
