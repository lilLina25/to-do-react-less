import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import ImageShow from './ImageShow.js';

export default function Task({onShow, task, tasks, setTask, createEdit, showFullItem, getDate, checked}) {
	function createEditItem(item){
		createEdit(item);
		onShow(item);
	}
	function remTask(id){
		setTask(tasks.filter(task => task.id !==id))
	}
	const res = task.files.map(file => {
		return <ImageShow key = {file.id} file = {file} />
	})

	return (
		<div className = 'task'>
		<FaWindowClose className = "close_btn" onClick = {()=> remTask(task.id)}/>
		<h4> Название задачи: {task.title}</h4>
		<p> Описание задачи: {task.desc}</p>
		<p> Дата завершения: <span  className = {getDate(task) ? "data" : "data_false"} >{task.data.split('-').reverse().join('.')}</span></p>
		<p> Статус задачи: <span className = {checked ? "task_green" : "data_false"}>{checked ? 'Задача выполнена' : task.status}</span></p>
		<div className = "img_container">{res}</div>
		<div className = "form_container">
		<div className = "watch_form" onClick = {() => showFullItem(task)}>Просмотр задачи</div>
		<div className = "edit_form" onClick = {()=>createEditItem(task)}><FaEdit /><span>Редактировать</span></div>
		</div>
		</div>
)
}