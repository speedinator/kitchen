import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import styles from './styles.css'
import { client } from '../client'

export default function Details({ data }) {
	

// 		useEffect(() => {
// 	// console.log('testEffect', useEffect(() => {
// 		// alert('hallo')
// 		const fetchData = async () => {
//             try {
//                 const response = await client.getEntries({ content_type: 'kitchenCarous'})
//                 // console.log(JSON.stringify(response))
// 				// console.log('test response', response)
//                 return response

//             } catch(error) {
//                 console.log(error)
//             }
//         };
//         fetchData();
// 		console.log('test response nach fetch', fetchData())

// 	}, [])
// 	return 
// }


	// const getAuthors = async () => {
	// 	try {
	// 		const entries = client.getEntries({
	// 			content_type: 'kitchenCarous',
	// 			select: 'fields'

	// 		})
	// 		return entries
	// 	} catch (error) {
	// 		console.log('error')
	// 	}
		
	// }

	// console.log('entries', getAuthors())


	const students = data
	// console.log('students in Student component', students.items.sys.id);
	// console.log('useParams', useParams());
	console.log(students.items.length)
	const dataArray = students.items
	const { id } = useParams();
	console.log('id aus useParams', id);
	console.log('useParams', useParams());
	// console.log(students.length);

	let test = students.items.map((data) => data)

	console.log(test.length)
	
	let thisStudent =
	test.length && test.find((student) => student.sys.id === id);
	// console.log('this student', thisStudent);
	// console.log('this student details', thisStudent.fields);

	// let thisStudent = false
    if (thisStudent) {
		return (
			<div className='box'>
				<h1>{thisStudent.fields.title} , Hmm!</h1>
				<img src={thisStudent.fields.image.fields.file.url}  className="img-fluid"></img>
				{/* // <img src={thisStudent.fields.image.fields.file.url}></img> */}
				 <p>Details für Feinschmecker: {thisStudent.fields.description}</p>
				 {/* <p>Details für Feinschmecker: {JSON.stringify(thisStudent)}</p> */}
				{/* <p className="first-name">{thisStudent}</p>{' '} */}
				{/* {thisStudent.name.last} {thisStudent.email} */}
			</div>
		);
	} else {
		return (
				<div>

					not found <br>
					</br> 
					Page ID= {id} 
					<br></br>
					Student ID ={ students.items[0].sys.id}
				</div>
				
		);
	}

 
}