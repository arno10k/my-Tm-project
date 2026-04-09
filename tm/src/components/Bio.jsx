import profileIcon from '../assets/profileIcon.svg'
import { useState } from 'react'
import getPhotoUrl from 'get-photo-url'

const Bio = () => { 
    const[userDetails, setUserDetails] = useState({
        name: 'Name Surname',
        about: 'Bio',
    })
    const [editFormIsOpen, setEditFormIsOpen] = useState(false) 
    const [profilePhoto, setProfilePhoto] = useState(profileIcon)    
    const updateUserDetails = (event) => {
        event.preventDefault()
        setUserDetails({
        name: event.target.nameOfUser.value,
        about: event.target.aboutUser.value,
        })
        setEditFormIsOpen(false)
    }
  
    const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>
   
    const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
    setProfilePhoto(newProfilePhoto)
   }
    
   const editForm = (
       <form className ="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
            <input type="text" name="nameOfUser" id ='' placeholder='Your name' />
            <input type="text" name="aboutUser" id ='' placeholder='About you' />
            <br />
            <button type="button" className="cancel-button" onClick={() => setEditFormIsOpen(false)}>
                Cancel
            </button>
            <button type="submit">Save</button>
        </form>
    )
   return (
        <section className="bio">
            <input
                type="file"
                accept="image/*"
                name="photo"
                id="profilePhotoInput"
                onChange={updateProfilePhoto}
            />

<label htmlFor="profilePhotoInput">
                 <div className="profile-photo" role="button" title="Click to edit photo" >
                <img src={profilePhoto} alt="profile" /> 
             </div>
            </label>
           
             <div className="profile-info">
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
                {editFormIsOpen ? editForm : editButton}
             </div>
        </section>
    )
}

export default Bio