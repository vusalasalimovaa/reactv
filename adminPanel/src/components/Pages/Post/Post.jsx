import React, {useState} from 'react'
import axios from 'axios' 


const Post = () => {

  const [inputValues, setInputValues] = useState({
    companyName: "",
    contactName:"",
    address: {
      city:"",
      region:""
    }
  })
  return (
    <>
  {/* component */}
  <div className="flex items-center justify-center p-12">
    {/* Author: FormBold Team */}
    {/* Learn More: https://formbold.com */}
    <div className="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Company Name

          </label>
          <input

          value={inputValues.companyName}
          onChange={(e) => {
            setInputValues({...inputValues, companyName: e.target.value})
          }}
            type="text"
            name="name"
            id="name"
            placeholder="Company Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Contact Name
          </label>
          <input
onChange={(e) => {
  setInputValues({...inputValues, contactName: e.target.value})
}}
            value={inputValues.contactName}
            type="text"
            name="name"
            id="name"
            placeholder="Contact Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            City
          </label>
          <input

value={inputValues.address.city}
onChange={(e) => {
  setInputValues({...inputValues, address: {city: e.target.value} })
}}
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter city"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Region
          </label>
          <input
      
      value={inputValues.address.region}
      onChange={(e) => {
        setInputValues({...inputValues, address: {region: e.target.value} })
      }}
            name="message"
            id="message"
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          
          />
        </div>
        <div>
          <button onClick={(e) => {
            e.preventDefault()
            axios.post("https://northwind.vercel.app/api/suppliers", inputValues)
          }} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</>

  )
}

export default Post