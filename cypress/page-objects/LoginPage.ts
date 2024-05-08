export class LoginPage {
  //elements
  loginButton() {
    return cy.get("#loginButton");
  }
  loginForm() {
    return cy.get(".loginFormWrap");
  }
  submitButton() {
    return cy.get("button[type='submit']");
  }

  inputField(locator: string) {
    return cy.get(`#${locator}`);
  }

  errorMessage(index: number) {
    return cy.get(".help-block").eq(index);
  }
  icon(icon: string) {
    return cy.get(`.fa-${icon}`);
  }

  //actions
  openLoginPage() {
    this.loginButton().should("be.visible").click();
  }

  submit() {
    this.submitButton().should("be.visible").click();
  }

  //validations
  validateLoginForm() {
    this.loginForm().should("be.visible");
  }

  validateInput(locator: string, value: string) {
    this.inputField(locator).should("be.visible").and("have.value", value);
  }

  validateIcon(icon: string, color: string) {
    this.icon(icon).should("be.visible").and("have.css", "color", color);
  }

  validateErrorMessage(index: number, error: string) {
    this.errorMessage(index).should("be.visible").and("have.text", error);
  }
}
