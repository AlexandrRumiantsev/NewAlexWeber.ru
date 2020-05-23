import React, { Component } from 'react'

/**
 * Template item comment 
 * @function del Delete target item comment
 * @returns {html} Returns template item comment.
 */

export function ListCommentTemplate(goToMain , comments , store , ItemComment ){
  console.log(goToMain);
  return ( <div className='page-comment'>
      <div onClick={goToMain.bind()}
                    class='item__close'>
                    X
                    </div>
                    { store.getState().comments.data.map((comments, index)=> {
                      return <section id={comments._id} 
                                      className='comment-list-item' 
                                      key={comments._id}>
                                <ItemComment store={store}  data={comments} />
                            </section>
                    })}
              </div>)            
}