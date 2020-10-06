//This is an extension entity.
FluidsSdk.EntityConfiguration.setComponent("account", {
    IconCss: "fluids--icons-inc",
    IconCssLarge: "fluids--icons-inc-l",
    PageRendererConfig: {
        details: [{
            label: "Account Number",
            name: "accountnumber",
            labelCss: "govuk-label--s",
        }, {
            label: "Description",
            name: "description",
            labelCss: "govuk-label--s",
            valueCss: "fluids--utils-prewrap",
        }, {
            label: "Created Date",
            name: "createdon",
            display: "createdon.DisplayValue",
            labelCss: "govuk-label--s",
        }, {
            label: "Status",
            name: "statecode",
            display: "statecode.DisplayValue",
            labelCss: "govuk-label--s",
        }, {
            label: "Status Reason",
            name: "statuscode",
            display: "statuscode.DisplayValue",
            labelCss: "govuk-label--s",
        }, {
            label: "Activities",
            name: "Account_ActivityPointers",
            type: "list",
            labelCss: "govuk-heading-l mb-1",
            orderBy: "modifiedon desc",
        }],
    }
})