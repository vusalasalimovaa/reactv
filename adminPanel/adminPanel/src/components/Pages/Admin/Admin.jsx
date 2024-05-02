import React, { useEffect } from 'react'
import { getAllDatas } from '../../../services'
import { BASE_URL } from '../../../services/api'

const Admin = () => {
  
  useEffect(() => {

    getAllDatas(BASE_URL).then(data => {
      console.log(data)
    })
   
  }, [])
  
}

export default Admin