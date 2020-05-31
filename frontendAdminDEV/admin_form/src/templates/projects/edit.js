import React, { useState, useEffect } from 'react';
import { Loader  } from '../main/loader.js';

const globalData = {}

function filterById(item) {
	if(globalData.id == item._id){
		return item;
	}
};
function getItem(id , arr) {
	JSON.parse(arr).forEach( function(el , i){
		if(el._id == id){
			return el;
		}
	});
};
function Template(props) {
	return(
		<div className='edit-item'>
		    <div className='edit-item__id'>
		    	{props.data._id}
		    </div>
		    <div className='edit-item__image'>
		    	{props.data.image}
		    </div>
		    <div className='edit-item__discription'>
		    	{props.data.discription}
		    </div>
		    <div className='edit-item__imageFull'>
		    	{props.data.imageFull}
		   	</div>
		    <div className='edit-item__image'>
		    	{props.data.image}
		    </div>
		    <div className='edit-item__link'>
		    	{props.data.link}
		    </div>
		    <div className='edit-item__name'>
		    	{props.data.name}
		    </div>
		</div>
	)
};


export function EditProject(props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		 
				let resSplit = window.location.pathname.split('-');
				globalData.id = resSplit[2];
			    globalData.result = props.store.getState().projects.data.find(filterById);
		   
	})   

    if(globalData.result){
       return(
		<div className='page_popupp'>
			<Template data={globalData.result} />
		</div>
	   )
    }else{
		return(
			<Loader />
		)
    }
	
}