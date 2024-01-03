describe("dialog page", ()=>{
    beforeEach(()=>{
        cy.visit("/themes", {failOnStatusCode: false})
        cy.get("img[alt=\"Material Light Theme\"]").click()
        cy.visit("/pages/modal-overlays/dialog", {failOnStatusCode: false})
        cy.get("nb-card-body > button").last().click()
    })
    it("check elements of modal window", ()=>{
        cy.get("nb-dialog-container").should("be.visible").as("modalWindow")
        cy.get("@modalWindow").find("nb-card-header").should("have.text", "Enter your name")
        cy.get("@modalWindow").find("input").should("be.visible")
        cy.get("@modalWindow").contains("Cancel").should("be.visible")
        cy.get("@modalWindow").contains("Submit").should("be.visible")
    })
})