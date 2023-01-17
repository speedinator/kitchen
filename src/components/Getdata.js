import { useState, useEffect } from "react";
import axios from "axios";
import { client } from '../client'

const useData = () => {
  const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({ content_type: 'kitchenCarous'})
                // console.log(JSON.stringify(response))
                // const responseData = response.items
                setStudents(response)

            } catch(error) {
                console.log(error)
            }
        };
        fetchData(); 
    }, []);
    return (
        students
    )
}

export default useData;


























// import { useState, useEffect } from "react";
// import axios from "axios";
// import { client } from '../client'


// const usegetData = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await client.getEntries({ content_type: 'kitchenCarous'})
//                 console.log(JSON.stringify(response))
//                 // const responseData = response.items
//                 setData(response)

//             } catch(error) {
//                 console.log(error)
//             }
//         };
//         fetchData(); 
//     }, []);
//     return data
// }

// export default usegetData;