import React from 'react';
import "../../css/Task.css";
import Task from "./Task.js";


export default function Tasks({tasks, setTask, onShow, createEdit, showFullItem, imageURL, images, setImages, getDate, checked}) {

	const res = tasks.map(task=>{
		return (
		<Task 
		key = {task.id}
		onShow = {onShow}
		task = {task}
		tasks = {tasks}
		setTask = {setTask}
		createEdit = {createEdit}
		showFullItem = {showFullItem}
		imageURL = {imageURL}
		images = {images}
		setImages = {setImages}
		getDate = {getDate}
		checked = {checked}
		/>
)
	})

	return (
		<div>
		{res}
		</div>
	)
}