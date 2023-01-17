import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

export default function Details({ data }) {
	
	const students = data
	console.log('students in Student component', students.items[0].sys.id);
	// console.log('useParams', useParams());
	const { id } = useParams();
	console.log('id aus useParams', id);
	console.log('useParams', useParams());
	// console.log(students.length);

	let thisStudent =
	students.length && students.find((student) => student.items.sys.id === id);
	// console.log('this student', thisStudent);

	// let thisStudent = false
    if (thisStudent) {
		return (
			<div>
				<h1>One Student!</h1>
				<p>Student has the ID: {thisStudent.login.uuid}</p>
				<p className="first-name">{thisStudent.name.first}</p>{' '}
				{thisStudent.name.last} {thisStudent.email}
			</div>
		);
	} else {
		return <div>not found</div>;
	}

 
}