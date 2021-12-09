import React from 'react'

function EditProfile({changetoFalse}) {
  return (
    <div>
      <div className="save" onClick={() => changetoFalse}>Save Changes</div>
      <input value="First Name"/>
      <input value="Last Name" />
      <input type="submit" />
    </div>
  )
}

export default EditProfile
