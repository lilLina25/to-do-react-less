import React from 'react';
import {useState} from 'react';
import SetTaskForm from './SetTaskForm.js';
import "../../css/Header.css";
import { CgAddR } from "react-icons/cg";
import uuid from 'react-uuid';

function id(){
  return uuid();
}

export default function Header({tasks, setTask, obj, setObj, err, setShowErr}) {
	const [show, setShow] = useState(false);
	function create(){
	 setObj(createForm());
	 setShow(!show);
	}
	function createForm(){
		return {
			id:id(),
			title:'',
			desc: '',
			data: '',
			status: 'Задача выполняется',
			files: []
		}
	}
	return (
		<header className = "header">
		<h1>My To-Do List</h1>
		<CgAddR className = "add_icon" onClick = {create} />
		{show && <SetTaskForm 
		setShow = {setShow}
		tasks = {tasks} 
		setTask = {setTask}
		obj = {obj}
		setObj={setObj}
		createForm = {createForm}
		err = {err}
		setShowErr = {setShowErr}
		/>}
		</header>
	)
}