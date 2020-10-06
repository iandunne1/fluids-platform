FluidsSdk.Fluids365.connectorConfig = {
  //  domain: "https://weneg.azure-api.net",
   // key: "5fc26f83086a4503855d396b48f0d782",
    // domain: "https://wenegqa.azure-api.net",
    // key: "6a5dd013aab442409b17d8adeefa41a7",
    // domain: "https://wenegdemo.azure-api.net",
    // key: "25eb3794481a4caab3509e4bc8ccdfb0",
    domain: "https://csd-p-eun-f365-1-apm.azure-api.net",
     key: "58543330a0a74e04839f180bdf25635f",
    captchaKey: "6Lfk0tMZAAAAALCG5PM_suA34PCcUZ2f7hDOzlLM",
    connect: function (res) {
        //let token = ClientScripts.getAccessToken();
        res.send({
            status: "success",//token == null ? "failed" : "success",
            data: "",//token
        });
    }
};
FluidsSdk.Fluids365.apis.SearchFull = "/servicecatalogSearch/basic/v1/FullSearch";
FluidsSdk.Fluids365.apis.SearchPrediction = "/servicecatalogSearch/basic/v1/PredictiveSearch";
FluidsSdk.Fluids365.apis.RequestOfferingQuery = "/requestoffering/basic/v1/RequestOffering/${RequestOfferingId}";

FluidsSdk.Dynamics365.connectorConfig = {
    OrganizationUri: "https://caseddev3.crm11.dynamics.com",
    connect: function (res) {
        $.post("/api/crm/token").then(response => {
            res.send({
                status: "success",
                data: {
                    access_token: response.access_token,
                    expires_at: response.expires_on,
                    token_type: response.token_type,
                }
            });
        }).catch(error => {
            console.error("A problem occured when acquiring authentication.", error);
            res.send({
                status: "failed",
                error
            });
        });
    }
};

FluidsSdk.ServiceManagement.connectorConfig = {
    domain: "https://csddeunf3ks2apm.azure-api.net",
    key: "08e18271713b475d99e497a08df2a987",
    connect: function (res) {
        //let token = ClientScripts.getAccessToken();
        res.send({
            status: "success",
            data: ""
        });
    }
};