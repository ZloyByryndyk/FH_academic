const {Login, CheckProfile} = require("./mainHelper")

const email = "mikayel@flowhealth.com";
const password = "Miqo123456"

Feature('authorization and check profile');

Scenario('authorization', ({ I }) => {
    Login(I, email, password);
});

Scenario('Check profile', ({ I }) => {
    Login(I, email, password);
    CheckProfile(I);
});

