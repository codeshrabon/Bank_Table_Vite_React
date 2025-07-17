import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
  accountName: '',
  loanAccountNumber: '',
  disbursementDate: '',
  amount: '',
  rateOfInterest: '',
  tenure: '',
  TypeOfLoan: '',
  EligibleSecurityValue: '',
  securityCoverage: '',
  securityDetailsAsPerSanction: '',
  ClientIdentificationDoneWithVerification: '',
  guarantorIdentificationDoneWithVerification: '',
  fundUtilizationEnsured:'',
  singleBorrowerExposureLimit:'',
  complianceWithCreditPolicy:'',
  comment:'',

});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic here to send data to a backend or perform other actions
  };

  return (
    <div className="App">
      <h1>Bank Table</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountName">Account name:
          <input
            type="text"
            id="accountName"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
          />
          </label>
        </div> <br />
        <div>
          <label htmlFor="loanAccountNumber">Loan account number:
          <input
            type="number"
            id="loanAccountNumber"
            name="loanAccountNumber"
            value={formData.loanAccountNumber}
            onChange={handleChange}
          />
          </label>
        </div> <br />
        <div>
          <label htmlFor="disbursementDate">Disbursment date:
          <input
            id="disbursementDate"
            type='date'
            name="disbursementDate"
            value={formData.disbursementDate}
            onChange={handleChange}
          />
          </label>
        </div> <br />
        <div>
          <label htmlFor="amount">Amount:
          <input 
          id = "amount"
          type='number'
          name = "amount"
          value={formData.amount}
          onChange={handleChange}
          />
          </label>
        </div> <br />
        <div>
          <label htmlFor="rateOfInterest"> Rate of interest:
          <input
          id ="rateOfInterest"
          type='number'
          name='rateOfInterest'
          onChange={handleChange}
          /></label>
        </div> <br />

        <div>
          <label htmlFor="tenure">Tenure(Year):
            <input 
            type="month"
            id='tenure' 
            name='address'
            onChange={handleChange}
            />
          </label>
        </div> <br />

        <div>
          <label htmlFor="TypeOfLoan">Type of loan:
            <input type="text"
            id='TypeOfLoan'
            name='TypeOfLoan'
            onChange={handleChange}
            />
          </label>
        </div> <br />
        
        <div>
          <label htmlFor="EligibleSecurityValue">Eligible Security value:
            <input type="number"
            id='EligibleSecurityValue'
            name='EligibleSecurityValue'
            onChange={handleChange}
            />
          </label>
        </div> <br />
        
        <div>
          <label htmlFor="securityCoverage">Security Coverage(%):
            <input type="number"
            id='securityCoverage'
            name='securityCoverage'
            onChange={handleChange}
            />
          </label>
        </div> <br />
        
        <div>
          <label htmlFor="securityDetailsAsPerSanction">Security details as per sanction:
            <input type="text"
            id='securityDetailsAsPerSanction'
            name='securityDetailsAsPerSanction'
            onChange={handleChange}
            />
          </label>
        </div> <br />

        <div>
          <label htmlFor="ClientIdentificationDoneWithVerification">Client identification Done with verification?:
            <input type="checkbox" 
            id='ClientIdentificationDoneWithVerification'
            name='ClientIdentificationDoneWithVerification'
            onChange={handleChange}
            />Yes 
            <input type="checkbox" />No 
          </label>
        </div> <br />

        <div>
          <label htmlFor="guarantorIdentificationDoneWithVerification">Guarantor identification Done with verification?:
            <input type="checkbox"
            id='guarantorIdentificationDoneWithVerification'
            name='guarantorIdentificationDoneWithVerification'
            onChange={handleChange}
            />Yes
            <input type="checkbox" /> No
          </label>
        </div> <br />

        <div>
          <label htmlFor="fundUtilizationEnsured">Fund Utilization Ensured:
            <input type="checkbox"
            id='fundUtilizationEnsured'
            name='fundUtilizationEnsured'
            onChange={handleChange}
            />Yes
            <input type="checkbox" /> No
          </label>
        </div> <br />

        <div>
          <label htmlFor="singleBorrowerExposureLimit">Single Borrower Exposure Limit(%) :
            <input type="number"
            id='singleBorrowerExposureLimit'
            name='singleBorrowerExposureLimit'
            onChange={handleChange}
            />
          </label>
        </div> <br />

        <div>
          <label htmlFor="complianceWithCreditPolicy">Compliance with credit policy?:
            <input type="checkbox"
            id='complianceWithCreditPolicy'
            name='complianceWithCreditPolicy'
            onChange={handleChange}
            />Yes
            <input type="checkbox" /> No
          </label>
        </div> <br />

        <div>
          <label htmlFor="comment">Comment (if any):
            <input type="text"
            id='comment'
            name='comment'
            onChange={handleChange}
            />
            
          </label>
        </div> <br />
        


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;