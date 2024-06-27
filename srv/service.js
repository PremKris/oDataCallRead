const cds = require('@sap/cds');
const { insert } = require('@sap/cds/libx/_runtime/hana/execute');
const axios = require('axios');
const { timeStamp } = require('console');
const { workerData } = require('worker_threads');

module.exports = cds.service.impl(async function () {
    let {PODetails} = this.entities;
    // var BPA = await cds.connect.to('oDataCall');
    this.on('READ', 'PODetails' , async (req) => {
        // var BPA = await cds.connect.to('oDataCall');
        // let getCall = await BPA.get(`/sap/opu/odata/sap/ZMM_PO_DISPLAY_SRV/supplierPOsSet?$filter=(orderNumber eq '' and supplierNo eq '0000001060')`);
        // console.log('GETCALL',getCall);
        const res = await axios.get(("http://virtualprem:9090/sap/opu/odata/sap/ZMM_PO_DISPLAY_SRV/supplierPOsSet?$filter=(orderNumber eq '' and supplierNo eq '0000001060')"), 
        {
            headers: 
            {
                //converting username and password into BASE64
                "Authorization": 'Basic REVWRUxPUEVSMDk6cGVvbEAxMjM0NQ=='
            }

        })
        console.log(res);
    
    })

})