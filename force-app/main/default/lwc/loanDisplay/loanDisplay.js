import { LightningElement, wire,api,track} from 'lwc';

import getLoanDetails from '@salesforce/apex/loanController.getLoanDetails'
import makeAPICallout from '@salesforce/apex/loanController.makeAPICallout'

export default class LoanDisplay extends LightningElement {
    searchResult;

    @track apiResponse;

    
    handleSearch({}){
        getLoanDetails()
        .then(result=>{
            console.log('result is:',result);
            this.searchResult=result;
        })
        .catch(error=>{
            console.log('Error happened',error);
        })
    }
   
    handleEmp(){
        makeAPICallout()
        .then(data => {
            this.apiResponse = data; 
            }).catch(error =>{
                console.error("Error:",error);
            });
    }

}