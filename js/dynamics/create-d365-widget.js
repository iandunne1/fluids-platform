function createD365Widget() {
    return FluidsSdk.Dynamics365.create({
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
    });
}