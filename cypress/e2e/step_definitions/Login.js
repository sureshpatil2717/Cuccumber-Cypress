import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

import login from "../Pageobjects/Login";
let ln =new login();


Given("launch application",()=>{

    cy.visit('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login')
      // cy.title().should('eq','OrangeHRM')
      // cy.xpath("//*[@name='txtUsername']").type(datauser.name)
      // cy.xpath("//*[@name='txtPassword']").type(datauser.email)
      // cy.get('[type="submit"]').click()

})


When("login application",()=>{
  
 
  ln.setusername('Admin')
  ln.setPassword('admin')
  
  
  // cy.xpath("//*[@name='txtUsername']").type('Admin')
  // cy.xpath("//*[@name='txtPassword']").type('Admin')
 // cy.get('[type="submit"]').click()

}
)

Then("verify details",()=>{
  ln.clicksubmit()
   // cy.get('[type="submit"]').click() 
}
)