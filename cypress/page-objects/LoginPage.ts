export class LoginPage {
  elements = {
    loginButton: () => cy.get("#loginButton"),
    loginForm: () => cy.get(".loginFormWrap"),
    inputField: (locator: string) => cy.get(`#${locator}`),
    submitButton: () => cy.get("button[type='submit']"),
    errorMessage: (index: number) => cy.get(".help-block").eq(index),
    icon: (icon: string) => cy.get(`.fa-${icon}`),
  };

  openLoginPage() {
    this.elements.loginButton().should("be.visible").click();
  }

  submit() {
    this.elements.submitButton().should("be.visible").click();
  }

  validateLoginForm() {
    this.elements.loginForm().should("be.visible");
  }

  validateInput(locator: string, value: string) {
    this.elements
      .inputField(locator)
      .should("be.visible")
      .and("have.value", value);
  }

  validateIcon(icon: string, color: string) {
    this.elements
      .icon(icon)
      .should("be.visible")
      .and("have.css", "color", color);
  }

  validateErrorMessage(index: number, error: string) {
    this.elements
      .errorMessage(index)
      .should("be.visible")
      .and("have.text", error);
  }
}
