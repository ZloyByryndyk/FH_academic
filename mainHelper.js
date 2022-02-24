const minWaitLimit = 10;

const Login = (I, email, password, expectText = "Events") => {
    I.amOnPage("/login");
    I.fillField("#login", email);
    I.fillField("#password", password);
    I.click("[data-tid='undefined-action-button']")
    I.waitForText(expectText, minWaitLimit);
}

const CheckProfile = (I) => {
    I.click("[data-tid='userHeaderMenu']")
    I.click("//span[contains(text(), 'Profile')]");
    I.waitForText("First Name",minWaitLimit);
    I.waitForText("Last Name",minWaitLimit);
    I.waitForText("Email",minWaitLimit);
    I.waitForText("Mobile",minWaitLimit);
    I.waitForText("Profile",minWaitLimit);
    I.waitForText("Password",minWaitLimit);
    I.waitForText("Roles",minWaitLimit);
}
module.exports = {Login, CheckProfile}