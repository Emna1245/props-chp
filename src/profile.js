import React from 'react'

const Profile = ({fullName,bio,profession}) => {
    const handleName = e => {
        e.preventDefault()
        alert(fullName)
    }
    const Image = props => {
        return <img src={props.children} style={{marginLeft : "600px"}}></img>
    }
    const style = {color :"#c0392b" , textAlign :"center"}
    return(
        <div>
          
           <h1 onClick={handleName} style={style}>Click Me! </h1>
          
            <h2 style={style}> {bio}  </h2>

            <h2 style={style}> {profession}</h2>
            <Image>download.png</Image>
        </div>
    )
}

export default Profile