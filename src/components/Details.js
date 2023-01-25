import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import styles from './styles.css'
import { client } from '../client'

export default function Details({ data }) {
	
console.log(data)


	const students = data

	console.log(data)

	const dataArray = students
	const { id } = useParams();
	console.log('id aus useParams', id);
	console.log('useParams', useParams());


	let test = students.map((data) => data)


	let thisStudent =
	test.length && test.find((student) => student.id === parseInt(id) );

    if (thisStudent) {
		return (
			<div className='box'>
				<h1>{thisStudent.title} , Hmm!</h1>
				<img src={thisStudent.url}  className="img-fluid"></img>
				 <p>Details für Feinschmecker: {thisStudent.desc_s}</p>

			</div>
		);
	} else {
		return (
				<div>

					not found <br>
					</br> 
					Page ID= {id} 
					<br></br>
					Student ID ={test[0].id}
				</div>
				
		);
	}

 
}