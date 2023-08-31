import React from 'react'
import "./CategoryForm.css"

function CategoryForm({handleSubmit,value,setValue}) {
    return (
        <>
        <div id="feedback-form">
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                     placeholder="Enter New Category" 
                     value={value} 
                     onChange={(e)=>setValue(e.target.value)}/>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default CategoryForm;