import React from "react";

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
                    {<tbody>
                            {this.state.disbursement_info.map((info, index) => (
                                <tr key={index}>
                                <td>{info.account_name}</td>
                                <td>{info.loan_account_number}</td>
                                <td>{info.disbursment_date}</td>
                                <td>{info.amount}</td>
                                <td>{info.rate_of_interest}</td>
                                <td>{info.tenure}</td>
                                <td>{info.type_of_loan}</td>
                                <td>{info.eligible_security_value}</td>
                                <td>{info.security_coverage}</td>
                                <td>{info.security_details_as_per_sanction}</td>
                                <td>{info.client_identification_done_with_varification}</td>
                                <td>{info.guarantor_identification_done_with_varification}</td>
                                <td>{info.fund_utilization_ensured}</td>
                                <td>{info.single_borrower_exposure_limit}</td>
                                <td>{info.compliance_with_credit_policy}</td>
                                <td>{info.comments}</td>
                                </tr>
                            ))}
                            </tbody>}


                </table>



            </div>
        );
    }
}

export default new UserComponent();