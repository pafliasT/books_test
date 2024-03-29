sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                fetch('/odata/v4/my/Books')
                    .then(this.getView().setModel(this.getOwnerComponent().getModel()))
                    .finally(console.log(this.getView().getModel().oData))
            }
        });
    });
