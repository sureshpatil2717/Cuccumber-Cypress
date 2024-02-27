class login 
{
    txtUsername="//*[@name='txtUsername']"
    txtPassword="//*[@name='txtPassword']"
    submitbutton="//*[@type='submit']"


    setusername(username)
    {
        cy.xpath(this.txtUsername).type(username)
    }
    setPassword(Password)
    {
        cy.xpath(this.txtPassword).type(Password)
    }
    clicksubmit()
    {
        cy.xpath(this.submitbutton).click()
    }
}export default login;