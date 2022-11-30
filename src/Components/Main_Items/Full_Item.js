import React from 'react';
import { FaWindowClose } from "react-icons/fa";
import "../../css/SetTaskForm.css";
import ImageShow from './ImageShow.js';

export default function Full_Item({item, setShow, getDate}) {
	const res = item.files.map(file => {
		return <ImageShow key = {file.id} files = {item.files} file = {file} />
	})
	return (
		<div className = "task_wrapper">
		<div className = "task_form">
		<FaWindowClose className = "close_btn" onClick = {()=> setShow(false)}/>
		<h2>Название задачи: {item.title}</h2>
		<span>Описание задачи: {item.desc}</span><br/>
		<span>Дата завершения: <span className = {getDate(item) ? "data" : "data_false"}>{item.data.split('-').reverse().join('.')}</span></span><br/>
		<div className = "img_container">{res}</div>
		</div>
		</div>
	)
}
		