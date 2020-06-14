import React, { useState, useEffect } from 'react';
import { Loader  } from '../main/loader.js';
import * as myModule from '../../lib/';
import '../../styles/body/projects/edit.scss';

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
		    	<input
		    		readOnly 
		    		className='edit-item-input' 
		    		defaultValue={props.data._id} 
		        />
		    </div>
		    <div className='edit-item__image'>
		    	<input  
		    		className='edit-item-input' 
		    		defaultValue={props.data.image} 
		        />
		    </div>
		    <div className='edit-item__discription'>
		    	<textarea  
		    		className='edit-item-input' 
		    		>
		    		{props.data.discription} 
		        </textarea>
		    </div>
		    <div className='edit-item__imageFull'>
		    	<input  
		    		className='edit-item-input' 
		    		defaultValue={props.data.imageFull} 
		        />
		   	</div>
		    <div className='edit-item__image'>
		    	<input  
		    		className='edit-item-input' 
		    		defaultValue={props.data.image}
		        />
		    </div>
		    <div className='edit-item__link'>
		    	<input  
		    		className='edit-item-input' 
		    		defaultValue={props.data.link}
		        />
		    </div>
		    <div className='edit-item__name'>
		    	<input  
		    		className='edit-item-input' 
		    		defaultValue={props.data.name}
		        />
		    </div>
		</div>
	)
};


export function EditProject(props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		 
		let resSplit = window.location.pathname.split('-');
		globalData.id = resSplit[2];

		if(localStorage['data_project']){}
		else localStorage['data_project'] = JSON.stringify(
				props.store.getState().projects.data
			)
		globalData.result = JSON.parse(
				localStorage['data_project']
			).find(filterById);
		   
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