import React, { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import FarmerProfileForm from './RegistrationForm/FarmersProfile';
import ContractorProfileForm from './RegistrationForm/ContractorProfile';
import { toast } from 'react-toastify'

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
    password:'',
    addressLine: '',
    villageCity: '',
    state: '',
    district: '',
    pincode: '',
    gender: '',
    profilePhoto: null,
    accountType: '',
    // Farmer-specific data
    farmArea: '',
    cropsGrown: [],
    annualProduction: '',
    financialServices: [],
    transportationAvailability: false,
    coldStorageAccess: false,
    // Contractor-specific data
    companyName: '',
    companyAddress: '',
    yearsOfExperience: '',
    purchaseCapacityMin: '',
    purchaseCapacityMax: '',
    logisticsCapabilities: ''
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [step]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleRegistrationSubmit = async (data) => {
    let profilePhotoURL = null;
    if (data.profilePhoto) {
       //code to store photo if uploaded
    }
    
    setFormData({ ...formData, ...data, profilePhoto: profilePhotoURL });
    nextStep();
  };

  const handleFarmerProfileSubmit = async (data) => {
    const finalData = { ...formData, ...data };
    console.log('Final Data:', finalData);
  };

  const handleContractorProfileSubmit = async (data) => {
    const finalData = { ...formData, ...data };
    console.log('Final Data:', finalData);
  };

  switch (step) {
    case 1:
      return <RegistrationForm onSubmit={handleRegistrationSubmit} />;
    case 2:
      return formData.accountType === 'farmer' 
        ? <FarmerProfileForm onSubmit={handleFarmerProfileSubmit} />
        : <ContractorProfileForm onSubmit={handleContractorProfileSubmit} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default MultiStepForm;



