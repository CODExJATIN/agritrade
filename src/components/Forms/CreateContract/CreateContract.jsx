
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select,Checkbox,FormControlLabel } from '@mui/material';
import Boxcard from '../../Box-card';

const ContractForm = ({ onSubmit }) => {
  const predefinedCrops = ["Wheat", "Rice", "Corn", "Soybean", "Sugarcane"];
  
  const ContractSchema = Yup.object().shape({
    contractorName: Yup.string().required('Contractor Name is required'),
    contractorAddress: Yup.string().required('Contractor Address is required'),
    cropType: Yup.string()
      .required('Crop Type is required')
      .test('valid-crop', 'Invalid Crop Type', value => 
        predefinedCrops.includes(value) || value !== ''
      ),
    quantity: Yup.number().required('Quantity is required').positive('Must be a positive number'),
    pricePerUnit: Yup.number().required('Price per Unit is required').positive('Must be a positive number'),
    startDate: Yup.date()
      .required('Start Date is required')
      .typeError('Invalid Start Date'),
    endDate: Yup.date()
      .required('End Date is required')
      .typeError('Invalid End Date')
      .when('startDate', (startDate, schema) => 
        startDate ? schema.min(startDate, 'End Date cannot be before Start Date') : schema
      ),
    terms: Yup.string().required('Terms are required'),
    transportationCost: Yup.string().required('Transportation cost must be specified'),
    additionalTerms: Yup.array().of(
      Yup.object().shape({
        term: Yup.string().required('Additional Term is required'),
      })
    ),
  });

  return (
    <Boxcard>
      <Formik
        initialValues={{
          contractorName: '',
          contractorAddress: '',
          cropType: '',
          quantity: '',
          pricePerUnit: '',
          startDate: new Date().toISOString().split('T')[0],
          endDate: new Date().toISOString().split('T')[0],
          terms: '',
          transportationCost: '',
          additionalTerms: [],
          includeAdditionalTerms: false,
        }}
        validationSchema={ContractSchema}
        onSubmit={(values) => {
          onSubmit({ ...values });
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <h1>Create Crop Contract</h1>

            <Field
              as={TextField}
              name="contractorName"
              label="Contractor Name"
              fullWidth
              error={touched.contractorName && !!errors.contractorName}
              helperText={touched.contractorName && errors.contractorName}
            />
            <br /><br />

            <Field
              as={TextField}
              name="contractorAddress"
              label="Contractor Address"
              fullWidth
              error={touched.contractorAddress && !!errors.contractorAddress}
              helperText={touched.contractorAddress && errors.contractorAddress}
            />
            <br /><br />

            <FormControl fullWidth>
              <InputLabel id="cropType-label">Crop Type</InputLabel>
              <Select
                labelId="cropType-label"
                name="cropType"
                value={values.cropType}
                onChange={(e) => setFieldValue('cropType', e.target.value)}
                renderValue={(selected) => {
                  // Display the selected value or the custom input
                  if (predefinedCrops.includes(selected)) {
                    return selected;
                  }
                  return selected; // Display custom value if it's not in the predefined list
                }}
                error={touched.cropType && !!errors.cropType}
              >
                {predefinedCrops.map(crop => (
                  <MenuItem key={crop} value={crop}>
                    {crop}
                  </MenuItem>
                ))}
                <MenuItem value={values.cropType} disabled>
                  {values.cropType}
                </MenuItem>
              </Select>
              {touched.cropType && errors.cropType && (
                <div style={{ color: 'red' }}>{errors.cropType}</div>
              )}
            </FormControl>
            <br /><br />

            <Field
              as={TextField}
              name="quantity"
              label="Quantity (in tons)"
              type="number"
              fullWidth
              error={touched.quantity && !!errors.quantity}
              helperText={touched.quantity && errors.quantity}
            />
            <br /><br />

            <Field
              as={TextField}
              name="pricePerUnit"
              label="Price per Unit (per ton)"
              type="number"
              fullWidth
              error={touched.pricePerUnit && !!errors.pricePerUnit}
              helperText={touched.pricePerUnit && errors.pricePerUnit}
            />
            <br /><br />

            <Field
              as={TextField}
              name="startDate"
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              error={touched.startDate && !!errors.startDate}
              helperText={touched.startDate && errors.startDate}
            />
            <br /><br />

            <Field
              as={TextField}
              name="endDate"
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              error={touched.endDate && !!errors.endDate}
              helperText={touched.endDate && errors.endDate}
            />
            <br /><br />

            <Field
              as={TextField}
              name="terms"
              label="Terms"
              multiline
              rows={4}
              fullWidth
              error={touched.terms && !!errors.terms}
              helperText={touched.terms && errors.terms}
            />
            <br /><br />

            <FormControl fullWidth>
              <InputLabel id="transportationCost-label">Transportation Cost</InputLabel>
              <Select
                labelId="transportationCost-label"
                name="transportationCost"
                value={values.transportationCost}
                onChange={(e) => setFieldValue('transportationCost', e.target.value)}
                error={touched.transportationCost && !!errors.transportationCost}
              >
                <MenuItem value="Farmer">Transportation cost borne by Farmer</MenuItem>
                <MenuItem value="Contractor">Transportation cost borne by Contractor</MenuItem>
                <MenuItem value="Both">Transportation cost shared by both parties</MenuItem>
              </Select>
              {touched.transportationCost && errors.transportationCost && (
                <div style={{ color: 'red' }}>{errors.transportationCost}</div>
              )}
            </FormControl>
            <br /><br />

            <FormControlLabel
              control={
                <Field
                  as={Checkbox}
                  name="includeAdditionalTerms"
                  type="checkbox"
                  checked={values.includeAdditionalTerms}
                />
              }
              label="Include Additional Terms"
            />
            <br /><br />

            {values.includeAdditionalTerms && (
              <FieldArray name="additionalTerms">
                {({ push, remove }) => (
                  <>
                    {values.additionalTerms.map((term, index) => (
                      <div key={index}>
                        <Field
                          as={TextField}
                          name={`additionalTerms.${index}.term`}
                          label={`Additional Term ${index + 1}`}
                          fullWidth
                          error={
                            touched.additionalTerms?.[index]?.term &&
                            !!errors.additionalTerms?.[index]?.term
                          }
                          helperText={
                            touched.additionalTerms?.[index]?.term &&
                            errors.additionalTerms?.[index]?.term
                          }
                        />
                        <Button type="button" onClick={() => remove(index)}>
                          Remove
                        </Button>
                        <br /><br />
                      </div>
                    ))}
                    <Button type="button" onClick={() => push({ term: '' })}>
                      Add Term
                    </Button>
                    <br /><br />
                  </>
                )}
              </FieldArray>
            )}

            <Button type="submit" variant="contained" color="primary">
              Create Contract
            </Button>
          </Form>
        )}
      </Formik>
    </Boxcard>
  );
};

export default ContractForm;
