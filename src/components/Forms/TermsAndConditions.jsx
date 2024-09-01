import React from 'react';
import { Button, Checkbox, FormControlLabel, Typography, Box, Paper } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// Validation schema for Formik
const validationSchema = Yup.object().shape({
  agreed: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions'),
});

const TermsAndConditions = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ agreed: false }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        toast.success('You have agreed to the Terms and Conditions.');
        if (onSubmit) {
          onSubmit();
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <Box sx={{ p: 4 }}>
              <Typography  variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Terms and Conditions for AgriTrade
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 1: Introduction
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● AgriTrade is an online platform that facilitates contract farming agreements between farmers and buyers, with the involvement of APMCs for contract verification and dispute resolution.
                <br />
                ● By using AgriTrade, you agree to be bound by these terms and conditions.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 2: User Accounts
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● To use AgriTrade, you must create an account.
                <br />
                ● You are responsible for maintaining the confidentiality of your account information.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 3: Contract Farming Agreements
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● AgriTrade acts as a platform to connect farmers and buyers for contract farming agreements.
                <br />
                ● All contract farming agreements must be verified by an APMC before being published on the platform.
                <br />
                ● AgriTrade is not a party to any contract farming agreement.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 4: Transportation
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● The transportation of agricultural produce from the farmer's field to the buyer's designated location shall be managed by either or both parties involved in the contract farming agreement.
                <br />
                ● AgriTrade is not responsible for the transportation of agricultural produce.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 5: Dispute Resolution
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● Any disputes arising from contract farming agreements shall be resolved through the APMC's dispute resolution mechanism.
                <br />
                ● AgriTrade will facilitate the dispute resolution process.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 6: Payments
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● Payments for contract farming agreements are made directly between the farmer and buyer.
                <br />
                ● AgriTrade may facilitate payments but is not responsible for any payment disputes.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 7: Intellectual Property
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● All intellectual property rights related to AgriTrade, including the platform, logo, and content, are owned by AgriTrade.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 8: Limitation of Liability
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● AgriTrade is not liable for any damages arising from the use of the platform or any contract farming agreements, including damages related to transportation.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                Section 9: Governing Law
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                ● These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat, India.
                <br />
                ● Specific Applicable Laws:
                <br />
                ○ Contract Act, 1872
                <br />
                ○ Agricultural Produce Market Committee Act, 1937 (or relevant state-specific legislation)
                <br />
                ○ Indian Arbitration and Conciliation Act, 1996
                <br />
                ○ Consumer Protection Act, 2019
              </Typography>

              <FormControlLabel
                control={<Field as={Checkbox} name="agreed" color="primary" />}
                label="I agree to the Terms and Conditions"
                fullWidth
              />
              {touched.agreed && errors.agreed && (
                <Typography variant="body2" color="error">
                  {errors.agreed}
                </Typography>
              )}
              <br/>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Enter
              </Button>
            </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TermsAndConditions;
