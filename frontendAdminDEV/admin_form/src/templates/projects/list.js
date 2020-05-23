import React, {
  Component
} from 'react'

export function ListProjectTemplate(props){
	const editProject = props.editProject;
	const ItemProjectTemplate = props.item;
	const itemDel = props.itemDel;
	return (<div>
		<div class='list-projects'>
		<div class='edit-container'></div>
		<div onClick={props.goToMain.bind()}
	          className='item__close'>
	        X
	      </div>
	      {props.data.map((project, index)=> {
	        console.log(project.imageFull);
	            const pStyle = {
	              background: "url('http://alexweber.ru/img/"+project.image+"')",
	              backgroundSize: 'cover' 
	            };
	            return <div style={pStyle} 
	            			class='projects__item' 
	                        key={index}>
		                        <ItemProjectTemplate 
		                        data={project}
		                        editProject={editProject}
		                        itemDel={itemDel}
		                        />
	                   </div>     
                
	       })}
		</div>
	</div>)
}

