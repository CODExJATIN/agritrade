import React from 'react'
import './Box-card.css'
import MultiStepForm from './Forms/MultiStepForm'
import ContractorProfileForm from './Forms/RegistrationForm/ContractorProfile'

const Boxcard = ({children}) => {
  return (
    <div className='form-card'>
      {children}
    </div>
  )
}

export default Boxcard
