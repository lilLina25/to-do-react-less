import React from 'react';
import { FaWindowClose } from "react-icons/fa";
import '../../css/Error.css';

export default function Error({setShowErr}) {
	return (
		<div className = "error_container">
		<div className = "error">
		<FaWindowClose className = "close_btn" onClick = {()=>setShowErr(false)}/>
			<p>Введите название задачи!</p>
		</div>
		</div>
	)
}