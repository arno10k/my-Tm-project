import profileIcon from '../assets/profileIcon.svg'
import { useState } from 'react'
import getPhotoUrl from 'get-photo-url'

const Bio = () => { 
    const [userDetails, setUserDetails] = useState({
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

    const updateProfilePhoto = (event) => {
        const file = event.target.files[0]
        if (!file) return

        const imageUrl = URL.createObjectURL(file)
        setProfilePhoto(imageUrl)

        event.target.value = ''
    }

    const editButton = (
        <button onClick={() => setEditFormIsOpen(true)}>
            Edit
        </button>
    )

    const editForm = (
        <form className="edit-bio-form" onSubmit={updateUserDetails}>
            <input
                type="text"
                name="nameOfUser"
                placeholder="Your name"
                defaultValue={userDetails.name}
            />

            <input
                type="text"
                name="aboutUser"
                placeholder="About you"
                defaultValue={userDetails.about}
            />

            <br />

            <button
                type="button"
                className="cancel-button"
                onClick={() => setEditFormIsOpen(false)}
            >
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
                <div
                    className="profile-photo"
                    role="button"
                    title="Click to edit photo"
                >
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