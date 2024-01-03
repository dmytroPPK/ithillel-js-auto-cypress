describe("stepper page", ()=>{
    beforeEach(()=>{
        cy.visit("/themes", {failOnStatusCode: false})
        cy.get("img[alt=\"Material Light Theme\"]").click()
        cy.visit("/pages/layout/stepper", {failOnStatusCode: false})
    })
    it("check component's text", ()=>{
        cy.get("nb-stepper[orientation=\"horizontal\"]").find("h3").as("checkedText")
        cy.get("nb-stepper[orientation=\"horizontal\"]").contains("next").as("nextButton")

        cy.get("@checkedText").should("have.text", "Step content #1")
        cy.get("@nextButton").click()

        cy.get("@checkedText").should("have.text", "Step content #2")
        cy.get("@nextButton").click()

        cy.get("@checkedText").should("have.text", "Step content #3")
        cy.get("@nextButton").click()

        cy.get("@checkedText").should("have.text", "Step content #4")



    })
})