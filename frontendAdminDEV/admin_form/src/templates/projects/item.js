import React, {
  Component
} from 'react'

export function ItemProjectTemplate(props) {
    const editProject = props.editProject;
    const store = props.store;
    const itemDel = props.itemDel;
    return <div className='item'>
              <div className='item__title'>
                  <div className='title__content'>
                    {props.data.name}
                  </div>
              </div>
              <div className='container-btn'>
                <a target='_blank' href={props.data.link}>
                  <i class="fal fa-tv"></i>
                </a>  
                <span onClick={(e)=>{
                  editProject(props.data , props.store ,e.target );
                }}>
                  <i class="fas fa-edit"></i>
                </span>
                <span onClick={itemDel.bind()}>
                  <i class="fas fa-trash-alt"></i>
                </span>
              </div>
            </div>
}