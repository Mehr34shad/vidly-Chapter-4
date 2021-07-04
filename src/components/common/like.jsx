import React from 'react'



const Like=({liked,handleToggle})=>{
        let classes="fa fa-heart"
        if(!liked) classes+="-o"

        return(
            <i className={classes} 
            aria-hidden="true"
            onClick={handleToggle}
            style={{cursor:'pointer'}}
            />
        )
    }
export default Like