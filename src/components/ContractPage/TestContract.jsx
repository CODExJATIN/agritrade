import ContractView from "./ContractPage";

const sampleContract = {
    contractId: 'C002',
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
    postedBy: 'CTR002', // Contractor ID
    bids: [
        {
            farmerName: 'Farmer A',
            bidAmount: 1200000,
            date: '2024-09-01',
            comments: 'Willing to negotiate on the price.',
            contractorOffer: '',
            accepted: false,
        },
        {
            farmerName: 'Farmer B',
            bidAmount: 1250000,
            date: '2024-09-02',
            comments: 'Offer includes transportation.',
            contractorOffer: '',
            accepted: false,
        },
    ],
};

function TestContractView() {
    return (
        <div>
            <h2>Testing as Farmer</h2>
            <ContractView contract={sampleContract} userID="Farmer A" userType="farmer" />
            
            <h2>Testing as Contractor</h2>
            <ContractView contract={sampleContract} userID="CTR002" userType="contractor" />
        </div>
    );
}

export default TestContractView;
