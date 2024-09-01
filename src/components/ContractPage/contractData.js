export const sampleContracts = [
    {
        contractID: 'C001',
        title: 'Wheat Contract',
        contractorName: 'Jatin Parmar',
        contractorAddress: 'Ahmedabad, Gujarat',
        cropType: 'Wheat',
        quantity: 100,
        pricePerUnit: 5000,
        startDate: '2024-09-01',
        endDate: '2025-03-01',
        transportationCost: 'Contractor',
        additionalTerms: ['Delivery in sacks', 'Payment within 30 days of delivery'],
        includeAdditionalTerms: true,
        advancePayment: 50000,
        paymentPreferences: 'installments',
        remainingAmount: 450000,
        installmentAmount: 50000,
        contractStatus: 'Open', // Open for negotiation
        assignedTo: null, // Not assigned yet
        postedBy: 'CTR001' // Contractor ID
    },
    {
        contractID: 'C002',
        title: 'Rice Contract',
        contractorName: 'Amit Shah',
        contractorAddress: 'Surat, Gujarat',
        cropType: 'Rice',
        quantity: 200,
        pricePerUnit: 7000,
        startDate: '2024-08-01',
        endDate: '2025-02-01',
        transportationCost: 'Farmer',
        additionalTerms: ['High-quality seeds only', 'Monthly progress report'],
        includeAdditionalTerms: true,
        advancePayment: 100000,
        paymentPreferences: 'full',
        remainingAmount: 1300000,
        installmentAmount: null,
        contractStatus: 'Open', // Open for negotiation
        assignedTo: null, // Not assigned yet
        postedBy: 'CTR002' // Contractor ID
    },
    {
        contractID: 'C003',
        title: 'Maize Contract',
        contractorName: 'Ramesh Patel',
        contractorAddress: 'Vadodara, Gujarat',
        cropType: 'Maize',
        quantity: 150,
        pricePerUnit: 6000,
        startDate: '2024-10-01',
        endDate: '2025-04-01',
        transportationCost: 'Shared',
        additionalTerms: ['No chemical pesticides', 'Organic fertilizers only'],
        includeAdditionalTerms: true,
        advancePayment: 75000,
        paymentPreferences: 'installments',
        remainingAmount: 825000,
        installmentAmount: 75000,
        contractStatus: 'Assigned', // Not open for negotiation
        assignedTo: 'F002', // Farmer ID
        postedBy: 'CTR003' // Contractor ID
    },
    {
        contractID: 'C004',
        title: 'Soybean Contract',
        contractorName: 'Sunil Mehta',
        contractorAddress: 'Rajkot, Gujarat',
        cropType: 'Soybean',
        quantity: 120,
        pricePerUnit: 8000,
        startDate: '2024-09-15',
        endDate: '2025-03-15',
        transportationCost: 'Contractor',
        additionalTerms: [],
        includeAdditionalTerms: false,
        advancePayment: 60000,
        paymentPreferences: 'full',
        remainingAmount: 900000,
        installmentAmount: null,
        contractStatus: 'Open', // Open for negotiation
        assignedTo: null, // Not assigned yet
        postedBy: 'CTR004' // Contractor ID
    },
    {
        contractID: 'C005',
        title: 'Cotton Contract',
        contractorName: 'Nikhil Soni',
        contractorAddress: 'Bhavnagar, Gujarat',
        cropType: 'Cotton',
        quantity: 50,
        pricePerUnit: 10000,
        startDate: '2024-07-01',
        endDate: '2025-01-01',
        transportationCost: 'Farmer',
        additionalTerms: ['Use certified seeds', 'Follow drip irrigation'],
        includeAdditionalTerms: true,
        advancePayment: 50000,
        paymentPreferences: 'installments',
        remainingAmount: 450000,
        installmentAmount: 50000,
        contractStatus: 'Assigned', // Not open for negotiation
        assignedTo: 'F003', // Farmer ID
        postedBy: 'CTR005' // Contractor ID
    },
    {
        contractID: 'C006',
        title: 'Barley Contract',
        contractorName: 'Vijay Desai',
        contractorAddress: 'Junagadh, Gujarat',
        cropType: 'Barley',
        quantity: 80,
        pricePerUnit: 5500,
        startDate: '2024-08-10',
        endDate: '2025-02-10',
        transportationCost: 'Contractor',
        additionalTerms: [],
        includeAdditionalTerms: false,
        advancePayment: 40000,
        paymentPreferences: 'full',
        remainingAmount: 400000,
        installmentAmount: null,
        contractStatus: 'Assigned', // Not open for negotiation
        assignedTo: 'F004', // Farmer ID
        postedBy: 'CTR006' // Contractor ID
    },
    {
        contractID: 'C007',
        title: 'Sugarcane Contract',
        contractorName: 'Manish Shah',
        contractorAddress: 'Anand, Gujarat',
        cropType: 'Sugarcane',
        quantity: 300,
        pricePerUnit: 4000,
        startDate: '2024-09-20',
        endDate: '2025-09-20',
        transportationCost: 'Shared',
        additionalTerms: ['Regular monitoring', 'No burning of crop residues'],
        includeAdditionalTerms: true,
        advancePayment: 120000,
        paymentPreferences: 'installments',
        remainingAmount: 1080000,
        installmentAmount: 120000,
        contractStatus: 'Open', // Open for negotiation
        assignedTo: null, // Not assigned yet
        postedBy: 'CTR007' // Contractor ID
    },
    {
        contractID: 'C008',
        title: 'Groundnut Contract',
        contractorName: 'Kiran Shah',
        contractorAddress: 'Patan, Gujarat',
        cropType: 'Groundnut',
        quantity: 70,
        pricePerUnit: 9000,
        startDate: '2024-10-05',
        endDate: '2025-04-05',
        transportationCost: 'Farmer',
        additionalTerms: ['Only organic fertilizers', 'No GM seeds'],
        includeAdditionalTerms: true,
        advancePayment: 63000,
        paymentPreferences: 'installments',
        remainingAmount: 567000,
        installmentAmount: 63000,
        contractStatus: 'Assigned', // Not open for negotiation
        assignedTo: 'F005', // Farmer ID
        postedBy: 'CTR008' // Contractor ID
    },
    {
        contractID: 'C009',
        title: 'Peas Contract',
        contractorName: 'Ravi Patel',
        contractorAddress: 'Mehsana, Gujarat',
        cropType: 'Peas',
        quantity: 60,
        pricePerUnit: 7000,
        startDate: '2024-11-01',
        endDate: '2025-05-01',
        transportationCost: 'Contractor',
        additionalTerms: [],
        includeAdditionalTerms: false,
        advancePayment: 42000,
        paymentPreferences: 'full',
        remainingAmount: 420000,
        installmentAmount: null,
        contractStatus: 'Open', // Open for negotiation
        assignedTo: null, // Not assigned yet
        postedBy: 'CTR009' // Contractor ID
    },
    {
        contractID: 'C010',
        title: 'Pulses Contract',
        contractorName: 'Dhruv Mehta',
        contractorAddress: 'Gandhinagar, Gujarat',
        cropType: 'Pulses',
        quantity: 40,
        pricePerUnit: 8500,
        startDate: '2024-12-15',
        endDate: '2025-06-15',
        transportationCost: 'Farmer',
        additionalTerms: ['Regular soil testing', 'Use of bio-fertilizers'],
        includeAdditionalTerms: true,
        advancePayment: 34000,
        paymentPreferences: 'installments',
        remainingAmount: 306000,
        installmentAmount: 34000,
        contractStatus: 'Assigned', // Not open for negotiation
        assignedTo: 'F006', // Farmer ID
        postedBy: 'CTR010' // Contractor ID
    }
];
