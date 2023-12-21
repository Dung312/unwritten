import { test } from '../fixtures/MyProfileTest';

const _email = 'P1@yopmail.com';
const _password = '11111111';

test.beforeEach(async ({ page, loginPage, homePage }) => {
    await loginPage.login(_email, _password);
    await homePage.visitMyProfile();
});


test.describe('Profile Edit', () => {
    test('upload image success', async ({ myProfilePage }) => {
        await myProfilePage.uploadImage('/Users/admin/Documents/coding/unwritten/avt.png');
    });
    test('upload image failed', async ({myProfilePage,}) => {
        await myProfilePage.uploadImage('/Users/admin/Documents/coding/unwritten/20mb.png');
    });
});

test.describe('Verify email value', () => {
    test('email is shown exactly', async ({ myProfilePage, page }) => {
        await myProfilePage.isEmailValueEqualWith('s1@yopmail.com');
    });
});
