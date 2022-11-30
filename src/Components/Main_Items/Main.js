import React from 'react';
import {useState} from 'react';
import Tasks from './Tasks.js';
import EditTaskForm from './EditTaskForm.js';
import Full_Item from './Full_Item.js';
import "../../css/Main.css";

const obj_full_item = {};

export default function Main({tasks, setTask, onShow, item, showItem, createEdit, editId, setEditId, obj, setObj, err, setShowErr, getDate}) {
	const [show, setShow] = useState(false);
	const [checked, setChecked] = useState(false);
	const [objFull, setObjFull] = useState(obj_full_item);
	function showFullItem(item){
		setShow(!show);
		setObjFull(item);
	}

	return (
		<main className = "main">
		{tasks.length>0
		?
		<Tasks tasks = {tasks}
		 setTask = {setTask}
		 onShow = {onShow}
		 item = {item}
		 createEdit = {createEdit}
		 showFullItem = {showFullItem}
		 getDate = {getDate}
		 checked = {checked}
		  />
		:
		<div className = "main_empty">
		На данный момент нет активных задач!
		</div>
		}
		{showItem && <EditTaskForm 
		tasks = {tasks}
		setTask = {setTask} 
		onShow = {onShow}
		task = {item}
		editId = {editId}
		setEditId = {setEditId}
		obj = {obj}
		setObj={setObj}
		err = {err}
		setShowErr = {setShowErr}
		checked = {checked}
		setChecked = {setChecked}
		/>}
		{show && <Full_Item 
		item = {objFull} 
		setShow = {setShow}
		getDate = {getDate}
		/>}
		</main>
	)
}