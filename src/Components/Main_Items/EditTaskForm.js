import React from 'react';
import {useState, useRef} from 'react';
import { FaWindowClose } from "react-icons/fa";
import "../../css/SetTaskForm.css";
import Image from '../Header_Items/Image.js';
import ErrorItem from '../Header_Items/Error.js';
import uuid from 'react-uuid';

function id(){
  return uuid();
}
export default function EditTaskForm({task, tasks, setTask, onShow, editId, setEditId, obj, setObj, err, setShowErr, checked, setChecked}) {
	const [objFile, setObjFile] = useState(createObj()); // файл
	const [files, setFiles] = useState(task.files);
	const fileComponent = useRef();
	const fileReader = new FileReader();

	fileReader.onloadend = () => {
		setObjFile({...objFile, ['data_file']: fileReader.result});
	}
	const handlerSubmit = (event) => {
	 	event.preventDefault();
	 	const file = fileReader.readAsDataURL(fileComponent.current.files[0]);
	 }

	function createObj(){ 
		return {
			id: id(),
			data_file:''
		}
	}

	function createImgArr(){
		if(objFile.data_file !== ''){ 
		setObj({...obj,['files']: [...files,objFile]});
		setObjFile(createObj());
		setFiles([...files,objFile]);
	}		
	}
	function createTask() {
		setTask(tasks.map(task=>
			task.id === editId ? {...task,['files']: files} : task
			)); 
		setFiles([]);
	}
	createImgArr();

	function editTask(item){
		setEditId(null);
		onShow(task);
		createTask();
	}
	function getValue(prop){
		return tasks.reduce((res,task)=>task.id===editId ? task[prop]:res, '');
	}
	function changeProp(prop, event){
		setTask(tasks.map(task=>
			task.id === editId ? {...task, [prop]: event.target.value} : task
			))
	}
	const res = files.map(file => {
		return <Image key = {file.id} file = {file}  files = {files} obj = {obj} setObj = {setObj} setFiles = {setFiles}/>
	})

	return (
		<div className = "task_wrapper">
		<div className = "task_form">
		{err && <ErrorItem setShowErr = {setShowErr}/>}
		<FaWindowClose className = "close_btn" onClick = {()=> onShow(task)}/>
			<p>Название задачи</p>
			<input value = {getValue('title')} onChange = {event=> changeProp('title',event)}/>
			<p>Описание задачи</p>
			<input value = {getValue('desc')} onChange = {event=> changeProp('desc',event)}/>
			<p>Дата</p>
			<input type="date" value = {getValue('data')} onChange = {event=> changeProp('data',event)}/>
			<input
			id = "file_input_edit"
			ref = {fileComponent}
			onChange = {handlerSubmit}
			className = "hidden" 
			type = "file"
			/>
			<label htmlFor="file_input_edit" className = "file_input">Выберите файл</label>
				<div className = "img_container">{res}</div>
			<div className = "checked_input"><input type = "checkbox" checked = {checked} onChange={() => setChecked(!checked)}/><p>Задача выполнена</p></div>
			
			<button className = "create_task" onClick = {()=>{getValue('title') === '' ? setShowErr(true) : editTask(task)}} >Изменить задачу</button>
		</div>
		</div>
	)
}