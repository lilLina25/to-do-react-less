import React from 'react';
import '../../css/Image.css';
export default function ImageShow({file}) {

	return (
		<div className = "img_comp_container">
		<img src = {file.data_file} alt="компонент" className = "img_component"/>
		</div>
	)
}