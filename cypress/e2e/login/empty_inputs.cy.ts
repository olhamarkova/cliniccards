import { LoginPage } from "../../page-objects/LoginPage.ts";
import { error, color } from "../../support/service/test_data_service.ts";

const loginPage = new LoginPage();

describe("Login Form Spec", function () {
  beforeEach(function () {
    cy.visitCC("");
    loginPage.openLoginPage();
  });

  it("User Shall See The Error Message When Submit An Empty Login Form", function () {
    loginPage.validateLoginForm();
    loginPage.validateInput("email", "");
    loginPage.validateInput("password", "");
    loginPage.validateIcon("envelope", color.grey);
    loginPage.validateIcon("lock", color.grey);
    loginPage.submit();
    loginPage.validateErrorMessage(0, error.emailError);
    loginPage.validateErrorMessage(1, error.passwordError);
    loginPage.validateIcon("envelope", color.red);
    loginPage.validateIcon("lock", color.red);
  });
});
