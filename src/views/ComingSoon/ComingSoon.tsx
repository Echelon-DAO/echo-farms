import React from 'react'

import styled from 'styled-components'


function ComingSoon() {
 
    return (
        <img src={`${localStorage.getItem("IS_DARK")?"/images/comingsoondark.png":"/images/comingsoonlight.jpg"}`} width="50%" style={{display:"block",margin:"auto"}} alt="hii" />
    )
}

export default ComingSoon;
