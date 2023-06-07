import React, { useState } from 'react'

const Input = (props) => {
  const {
    name,
    type,
    formData,
    setFormData
  } = props

  console.log(name)

  const inputHandler = (e,name) => {
    // formData[name] = e.target.value
    setFormData({name : e.target.value})
  }
  return (
    <div>
      <label className="form-label">{name}</label>
        <input type={type} name={name} onChange={(e) => inputHandler(e,name)} className="form-control" />
    </div>
  )
}

export default Input