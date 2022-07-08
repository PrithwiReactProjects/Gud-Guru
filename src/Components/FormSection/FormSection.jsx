import React from 'react'
import "../FormSection/FormSection.css"
import {  InputLabel, Button } from '@mui/material';
import{fontStyleOfLetter,buttonStyle} from "../FormSection/Styel.jsx"
import InputField from './InputField';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';
import SideDivs from '../SideDivs';




const initialForm = {
  mike: "",
  year: "",
  model: "",
  milesDriven: "",
  contact: "",
  title: "",
  
}

export default function FormSection() {
  const [form, setForm] = useState({ ...initialForm })
  const [file, setFile] = useState(null)
  const [mike, setMike] = useState(false)
  const[year,setYear]=useState(false)
   const[model,setModel]=useState(false) 
   const[milesDriven,setMilesDriven]=useState(false) 
  const [title, setTitle] = useState(false) 
  const[charecters,setCharecters]=useState(0)
  const[yearcharecters,setYearCharecters]=useState(0)
  const[modelcharecters,setModelCharecters]=useState(0)
  const[milesDrivencharecters,setMilesDrivenCharecters]=useState(0)
  const[titlecharecters,setTitleCharecters]=useState(0)

  
    const handleInput = (event) => {
    const target = event.target
      const { name, value } = target
      console.log(value.length, name)
      if( name === "mike"){
        if (value.length > 10) {
          setMike(true)
        } else {
          setMike(false)
        }
        setCharecters(value.length)
      } 
      
      if( name === "year"){
        if (value.length > 6) {
          setYear(true) 
        }
        setYearCharecters(value.length)
       }
    if (name === "model") {
      if (value.length > 10) {
        setModel(true)
      }
      setModelCharecters(value.length)
    }
    if (name === "milesDriven") {
      if (value.length > 6) {
        setMilesDriven(true)
      }
      setMilesDrivenCharecters(value.length)
    }
    if (name === "title") {
      if (value.length > 70) {
        setTitle(true)
      }
      setTitleCharecters(value.length)
    }
   setForm({ ...form, [name]: value })
  }
   
  const fileUpload = (event) => {
    setFile(event.target.files[0])
  } 
  
  const nullFunction = () => {
    setMike(false)
    setMilesDriven(false)
    setModel(false)
    setTitle(false)
    setYear(false)
  }

  const onSubmission = (event) => {
    console.log(file)
    console.log(form)
    setFile("")
    setForm({ ...initialForm })
    nullFunction()
    event.preventDefault()
  }
   


  return (
    <div className='container'>
      <InputLabel style={{ left: "290px", top: "30px", fontSize: "37px",fontWeight: "700",lineHeight: "43px",color: "#222222"}}>Trucks</InputLabel> 
      <div className='form-section'>
  <form onSubmit={onSubmission}>
         <InputLabel style={{ ...fontStyleOfLetter }}>Make</InputLabel>
          <InputField
            placeholder="Mike*"
            sign={`${charecters}/10`}
            name="mike"
            value={form.mike}
            onChange={handleInput}
            helperText={mike === true ? "Your entry should not exceed 10 charecters" : ""}
            />
      <InputLabel style={{...fontStyleOfLetter}}>Year</InputLabel>  
          <InputField
            placeholder="Year*"
            sign={`${yearcharecters}/6`}
            name="year"
            value={form.year}
            onChange={handleInput}
            helperText={year === true ? "Your entry should not exceed 6 charecters" : ""}
          />
      <InputLabel style={{ ...fontStyleOfLetter }}>Model</InputLabel>  
          <InputField
            placeholder="Model*"
            sign={`${modelcharecters}/10`}
            name="model"
            value={form.model}
            onChange={handleInput}
            helperText={model === true ? "Your entry should not exceed 10 charecters" : ""}
          />
      <InputLabel style={{...fontStyleOfLetter}}>Miles Driven</InputLabel>  
          <InputField
            placeholder="Miles Driven*"
            sign={`${milesDrivencharecters}/6`}
            name="milesDriven"
            value={form.milesDriven}
            onChange={handleInput}
            helperText={milesDriven === true ? "Your entry should not exceed 6 charecters" : ""}
          />
      <InputLabel style={{...fontStyleOfLetter}} >Contact No.</InputLabel>  
          <InputField
            placeholder="Contact No.*"
            name="contact"
            value={form.contact}
            onChange={handleInput}
            />
      <InputLabel style={{...fontStyleOfLetter}}>Ad Title</InputLabel>  
          <InputField
            placeholder="Ad Title*"
            name="title"
            sign={`${titlecharecters}/70`}
            value={form.title}
            onChange={handleInput}
            helperText={title === true ? "Your entry should not exceed 70 charecters" : ""}
          />
      <InputLabel style={{...fontStyleOfLetter}}>Add Photo</InputLabel>  
          <InputField
            type="file"
            placeholder="Add Photo*"
            onChange={fileUpload}
            sign={<PhotoCameraIcon/>}
          />
      <Button style={{...buttonStyle }} onClick={onSubmission}>Continue</Button>
      </form>
      </div>
      <SideDivs/>
    </div>
  )
}
