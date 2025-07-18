import React from "react";
import UserServises from "../Servises/UserServises";

class UserComponents extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disbursement_info:[]
        }
    }
    componentDidMount(){
        UserServises.getAllUsers().then((response) => {
            this.setState({disbursement_info: response.data})
        });
    }
    
    render(){
        return(
            <div>
                <h1 className="text-center">Bank Table of Client</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Account Name</th>
                            <th>Loan Account Number</th>
                            <th>Disbursement Date</th>
                            <th>Amount</th>
                            <th>Rate of Interest</th>
                            <th>Tenure</th>
                            <th>Type of Loan</th>
                            <th>Eligible Security Value</th>
                            <th>Security Coverage</th>
                            <th>Security Details As Per Sanction</th>
                            <th>Client Identification Done With Verification</th>
                            <th>Guarantor Identification Done With Verification</th>
                            <th>Fund Utilization Ensured</th>
                            <th>Single Borrower Exposure Limit</th>
                            <th>Compliance With Credit Policy</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.disbursement_info.map((info, index) => (
                                <tr key={index}>
                                <td>{info.accountName}</td>
                                <td>{info.loanAccountNumber}</td>
                                <td>{info.disbursementDate}</td>
                                <td>{info.amount}</td>
                                <td>{info.rateOfInterest}</td>
                                <td>{info.tenure}</td>
                                <td>{info.typeOfLoan}</td>
                                <td>{info.eligibleSecurityValue}</td>
                                <td>{info.securityCoverage}</td>
                                <td>{info.securityDetailsAsPerSanction}</td>
                                <td>{info.clientIdentificationDoneWithVerification}</td>
                                <td>{info.guarantorIdentificationDoneWithVerification}</td>
                                <td>{info.fundUtilizationEnsured}</td>
                                <td>{info.singleBorrowerExposureLimit}</td>
                                <td>{info.complianceWithCreditPolicy}</td>
                                <td>{info.comment}</td>
                                </tr>
                            ))}
                            </tbody>


                </table>



            </div>
        );
    }
}

export default new UserComponents();