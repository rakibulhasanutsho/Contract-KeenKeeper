import { use, useState } from "react";
import { FriendContext } from "./HistoryContext";
import { ToastContainer, toast } from 'react-toastify';

function FriendProvider({ children }) {
    const [allHistory, setAllHistory] = useState([])
    let name = ""
    let type = ""
    {
        allHistory.map(history => 
             name  = history.name,
             type = history.type
        )
    }

    const addToHistory = ({ name, type }) => {
        if (type === 'Call') {
            const newEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                type: "Call",
                timestamp: new Date().toISOString(),
                name:name
            };

            setAllHistory([newEntry, ...allHistory]);
        }
        else if (type === 'Massage') {
            const newEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                type: "Massage",
                timestamp: new Date().toISOString(),
                name:name
            };

            setAllHistory([newEntry, ...allHistory]);
        }
        else if (type === 'Video') {
            const newEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                type: "Video",
                timestamp: new Date().toISOString(),
                name:name
            };

            setAllHistory([newEntry, ...allHistory]);
        }
       

    }

     const data = {
            addToHistory,
            allHistory,
            setAllHistory,
            name,
            type,
           
            
        }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    )
}

export default FriendProvider
