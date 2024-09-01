
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select,Checkbox,FormControlLabel , Radio, RadioGroup, FormLabel, Typography, Box} from '@mui/material';
import Boxcard from '../../Box-card';

const ContractForm = () => {

  
  
  const crops = [
    'Wheat',
    'Rice',
    'Maize',
    'Millets',
    'Barley',
    'Pulses',
    'Sugarcane',
    'Cotton',
    'Jute',
    'Groundnut',
    'Mustard',
    'Soybean',
    'Sunflower',
    'Tea',
    'Coffee',
    'Rubber',
    'Coconut',
    'Tobacco',
    'Banana',
    'Mango',
    'Papaya',
    'Grapes',
    'Orange',
    'Apple',
    'Potato',
    'Tomato',
    'Onion',
    'Garlic',
    'Ginger',
    'Turmeric',
    'Pepper',
    'Cardamom',
    'Coriander',
    'Cumin',
    'Chili',
    'Clove',
    'Cinnamon',
    'Bay Leaf',
    'Fennel',
    'Peas',
    'Lentils',
    'Chickpeas',
    'Pigeon Pea (Tur)',
    'Black Gram (Urad)',
    'Green Gram (Moong)',
    'Sesame',
    'Linseed',
    'Safflower',
    'Ragi (Finger Millet)',
    'Jowar (Sorghum)',
    'Bajra (Pearl Millet)',
    'Foxtail Millet',
    'Little Millet',
    'Barnyard Millet',
    'Kodo Millet',
    'Watermelon',
    'Pineapple',
    'Guava',
    'Lychee',
    'Custard Apple (Sitaphal)',
    'Pomegranate',
    'Jackfruit',
    'Sapodilla (Chikoo)',
    'Strawberry',
    'Pear',
    'Plum',
    'Peach',
    'Lemon',
    'Lime',
    'Tangerine',
    'Dragon Fruit',
    'Zucchini',
    'Cabbage',
    'Cauliflower',
    'Broccoli',
    'Spinach',
    'Lettuce',
    'Brinjal (Eggplant)',
    'Okra (Ladyfinger)',
    'Bitter Gourd',
    'Bottle Gourd',
    'Snake Gourd',
    'Ash Gourd',
    'Cucumber',
    'Pumpkin',
    'Carrot',
    'Beetroot',
    'Radish',
    'Turnip',
    'Sweet Potato',
    'Yam',
    'Colocasia (Arbi)',
    'Amaranth',
    'Fenugreek (Methi)',
    'Mint',
    'Basil',
    'Parsley',
    'Drumstick (Moringa)',
    'Aloe Vera',
    'Bamboo',
    'Rosemary',
    'Thyme',
    'Lavender',
    'Oregano',
    'Sage',
    'Curry Leaf',
    'Neem',
    'Eucalyptus',
    'Lemongrass',
    'Citronella',
    'Chamomile',
    'Hibiscus',
    'Jasmine',
    'Marigold',
    'Rose',
    'Lotus',
    'Sunflower (for seeds)',
    'Poppy (for seeds)',
    'Saffron',
    'Tamarind',
    'Amla (Indian Gooseberry)',
    'Neem',
    'Sandalwood',
    'Mahua',
    'Kesar (Saffron)',
    'Betel Leaf',
    'Arecanut',
    'Palmyra Palm',
    'Date Palm',
  ];
  
  
  const ContractSchema = Yup.object().shape({
    contractorName: Yup.string().required('Contractor Name is required'),
    contractorAddress: Yup.string().required('Contractor Address is required'),
    cropType: Yup.string()
      .required('Crop Type is required')
      .test('valid-crop', 'Invalid Crop Type', value => 
        crops.includes(value) || value !== ''
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
    transportationCost: Yup.string().required('Transportation cost must be specified'),
    additionalTerms: Yup.array().of(
      Yup.object().shape({
        term: Yup.string().required('Additional Term is required'),
      })
    ),
    advancePayment: Yup.number()
      .required('Advance Amount is required')
      .min(1000, 'Advance Amount must be at least 1000'), 
    paymentPreferences: Yup.string().required('Payment Preference is required'),
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
    transportationCost: '',
    additionalTerms: [],
    includeAdditionalTerms: false,
    advancePayment: '',
    paymentPreferences: '',
  }}
  validationSchema={ContractSchema}
  onSubmit={(values) => {
    const startDate = new Date(values.startDate);
    const endDate = new Date(values.endDate);
    const durationInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
    const remainingAmount = values.pricePerUnit * values.quantity - values.advancePayment;
    

    let installmentAmount = 0;
    if (values.paymentPreferences === 'installments') {
      const numberOfInstallments = durationInMonths-1;
      installmentAmount = remainingAmount / numberOfInstallments;
    }
    console.log(values);
    console.log('Remaining Amount:', remainingAmount);
    console.log('Installment Amount:', installmentAmount);

    
  }}
>
  {({ values, setFieldValue, errors, touched }) => {
    const startDate = new Date(values.startDate);
    const endDate = new Date(values.endDate);
    const durationInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();    
    const remainingAmount = values.pricePerUnit * values.quantity - values.advancePayment;

    return (
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

        <Field
          as={TextField}
          name="cropType"
          label="Crop Type"
          select
          fullWidth
          onChange={(e) => setFieldValue('cropType', e.target.value)}
          error={touched.cropType && !!errors.cropType}
          helperText={touched.cropType && errors.cropType}
        >
          <MenuItem value="">Select Crop Type</MenuItem>
          {crops.map((crop, index) => (
            <MenuItem key={index} value={crop}>
              {crop}
            </MenuItem>
          ))}
          <MenuItem value="Other">Other</MenuItem>
        </Field>
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
          name="advancePayment"
          label="Advance Payment Amount"
          type="number"
          fullWidth
          error={touched.advancePayment && !!errors.advancePayment}
          helperText={touched.advancePayment && errors.advancePayment}
        />
        <br /><br />

        <Field
          as={FormControl}
          fullWidth
          name="paymentPreferences"
        >
          <FormLabel component="legend">Payment Preferences</FormLabel>
          
            <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 2, 
    }}
  >
    <Field
      as={RadioGroup}
      name="paymentPreferences"
      value={values.paymentPreferences}
      onChange={(e) => setFieldValue('paymentPreferences', e.target.value)}
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} 
    >
      <FormControlLabel
        value="installments"
        control={<Radio />}
        label="Monthly Installments"
      />
      <FormControlLabel
        value="full"
        control={<Radio />}
        label="Full Payment after Delivery"
      />
    </Field>
  </Box>
          {touched.paymentPreferences && errors.paymentPreferences && (
            <div style={{ color: 'red' }}>{errors.paymentPreferences}</div>
          )}
        </Field>
        <br /><br />

        {values.paymentPreferences === 'installments' && (
          <div>
            <Typography variant="body1">
              Total Contract Duration: {durationInMonths} months
            </Typography>
            <Typography variant="body1">
              Monthly Installment: ₹
              {((remainingAmount) / (durationInMonths-1)).toFixed(2)}/Month
            </Typography>
          </div>
        )}
        {values.paymentPreferences === 'full' && (
          <div>
            <Typography variant="body1">
              Amount to be paid after delivery: ₹
              {remainingAmount.toFixed(2)}
            </Typography>
          </div>
        )}
        <br /><br />

        <Field
          as={FormControl}
          fullWidth
          name="transportationCost"
        >
          <InputLabel id="transportationCost-label">Transportation Cost</InputLabel>
          <Field
            as={Select}
            labelId="transportationCost-label"
            value={values.transportationCost}
            onChange={(e) => setFieldValue('transportationCost', e.target.value)}
            error={touched.transportationCost && !!errors.transportationCost}
          >
            <MenuItem value="Farmer">Transportation cost borne by Farmer</MenuItem>
            <MenuItem value="Contractor">Transportation cost borne by Contractor</MenuItem>
            <MenuItem value="Both">Transportation cost shared by both parties</MenuItem>
          </Field>
          {touched.transportationCost && errors.transportationCost && (
            <div style={{ color: 'red' }}>{errors.transportationCost}</div>
          )}
        </Field>
        <br /><br />

        <Field
          as={FormControlLabel}
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



        <br/><br/>

        <Button type="submit" variant="contained" color="primary">
          Create Contract
        </Button>
      </Form>
    )}}
  </Formik>
    </Boxcard>
  );
};

export default ContractForm;
