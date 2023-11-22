export class BankForward {
    encData: string|undefined;
    merchantCode: number|undefined;
}
export class BankResponse {
    encData: string|undefined;
    Resp: string|undefined;
}
export class FinalBankResp {
BANK_CODE: string|undefined;
BankReferenceNo: string|undefined;
CIN:string|undefined;
GRN: string|undefined;
PAID_AMT: string|undefined;
PAID_DATE: string|undefined;
TRANS_STATUS: string|undefined;
}