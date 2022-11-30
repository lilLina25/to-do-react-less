import React from 'react';

import Image from './Image.js';
import ErrorItem from './Error.js';
import "../../css/SetTaskForm.css";
import { FaWindowClose } from "react-icons/fa";
import {useState, useRef} from 'react';
import uuid from 'react-uuid';

function id(){
  return uuid();
}
	
export default function SetTaskForm({setShow, tasks, setTask, obj, setObj, createForm, err, setShowErr}) {
	
	const [objFile, setObjFile] = useState(createObj());
	const [files, setFiles] = useState(obj.files);
	const fileComponent = useRef();
	const fileReader = new FileReader();
	fileReader.onloadend = () => {
		setObjFile({...objFile, ['data_file']: fileReader.result}); 
	}
	
	const handlerSubmit = (event) => {
	 	event.preventDefault();
	 	const file = fileReader.readAsDataURL(fileComponent.current.files[0]);
	 }

	function createImgArr(){
		if(objFile.data_file !== ''){ 
		setObj({...obj,['files']: [...files,objFile]});
		setObjFile(createObj()); 
		setFiles([...files,objFile]);
			}		
	}
	createImgArr();
	function createObj(){ 
		return {
			id: id(),
			data_file:''
		}
	}
	
	function createProp(prop,event){
		setObj({...obj, [prop]: event.target.value});
	}

	function createTask() {
		setTask([...tasks, obj]); 
		setShow(false);
		createForm();
		setFiles([]);
	}

let res;
if(files.length > 0){
 res = files.map(file=>{
	return <Image key = {file.id} file = {file}  files = {files} obj = {obj} setObj = {setObj} setFiles = {setFiles}/>
})
}

	return (
		<div className = "task_wrapper">
		<form className = "task_form" onSubmit = {handlerSubmit}>
			<FaWindowClose className = "close_btn" onClick = {()=>setShow(false)}/>
			{err && <ErrorItem setShowErr = {setShowErr}/>}
			<p>Название задачи</p>
			<input onChange = {event => createProp('title',event)}/>
			<p>Описание задачи</p>
			<input onChange = {event => createProp('desc',event)}/>
			<p>Дата завершения</p>
			<input type="date" onChange = {event => createProp('data',event)}/>
			
			<input 
			id = "file_input"
			type = "file"
			ref = {fileComponent}
			onChange = {handlerSubmit}
			className = "hidden"
			/> <label htmlFor="file_input" className = "file_input">Выберите файл</label>
			<div className = "img_container">{res}</div>
			<button className = "create_task" onClick = {()=>{obj.title === '' ? setShowErr(true) : createTask()}}>Создать задачу</button>
		</form>
		</div>
	)
}
