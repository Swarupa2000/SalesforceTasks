import { LightningElement, api,wire} from 'lwc';

import getRecords from '@salesforce/apex/loanController.getRecords'

export default class StageMovement extends LightningElement {
    @api Id;
    loanRecord;

    handleLoan(event){
        this.Id=event.target.value;
    }

    handleSearch(){
        getRecords({Id: this.Id})
        .then((result) => {
            if(result && result.length>0){
                this.loanRecord=result[0];
            }else{
                this.loanRecord=null;
            }
        })
        .catch((error) =>{
            console.error(error);
            this.loanRecord=null;
        });
    }
    
}