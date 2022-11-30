import React from 'react';
import {useState} from 'react';
import Header from "./Header_Items/Header.js";
import Main from "./Main_Items/Main.js";
import Footer from "./Footer_Items/Footer.js";
import '../css/Wrapper.css';

const tasks_list = [];
const fullItem = {};

export default function Wrapper() {
	const [tasks, setTask] = useState(tasks_list);
    const [showItem, setShowItems] = useState(false);
    const [fullItems, setFullItems] = useState(fullItem);
    const [editId, setEditId] = useState(null);
    const [obj, setObj] = useState({});
    const [err, setShowErr] = useState(false);


	function onShow(item){
    setShowItems(!showItem);
    setFullItems(item);
    }

	function getDate(item){
	const nowData = new Date();
	const newData = new Date(item.data);
	let diff = nowData - newData;
		if(Number(diff)>0){
			return false;
		}else{
			return true;
		}
	}

    function createEdit(item){
    	setEditId(item.id);
    }

	return (
		<div className = "wrapper">
			<Header 
			tasks = {tasks}
			setTask = {setTask}
			obj = {obj}
			setObj={setObj}
			err = {err}
			setShowErr = {setShowErr}
			/>

			<Main tasks = {tasks} 
			setTask = {setTask} 
			onShow = {onShow}  
			item = {fullItems}  
			showItem = {showItem}
			createEdit = {createEdit} 
			editId = {editId}
			setEditId = {setEditId}
			obj = {obj}
			setObj={setObj}
			err = {err}
			setShowErr = {setShowErr}
			getDate = {getDate}
			/>

			<Footer/>
		</div>
	)
}