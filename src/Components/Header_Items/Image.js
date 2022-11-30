import React from 'react';
import { FaWindowClose } from "react-icons/fa";
import '../../css/Image.css';

export default function Image({file, obj, setObj, files, setFiles }) {
	function remImg(id){
		setObj({...obj, ...{files: files.filter(item=>item.id !== file.id)}});
		setFiles(files.filter(item=>item.id != file.id));
	}

	return (
		<div className = "img_comp_container">
		<FaWindowClose className = "close_icon" onClick = {()=>remImg(file.id)}/>
		<img src = {file.data_file} alt="компонент" className = "img_component"/>
		</div>
	)
}