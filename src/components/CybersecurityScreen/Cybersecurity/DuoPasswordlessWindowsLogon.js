export const duo_passwordless_info = 'Duo Windows Logon Passwordless allows you to sign into Windows without typing a password.'

export const duo_passwordless_md = `
# Passwordless Operating System (OS) Logon for Windows Logon
*Last updated on August 12, 2026*

## Overview

When logging into Windows, you will see a log in without a password option. If you continue with the setup, then you won't need to provide a password again when you log in to or unlock your Windows system.

## Requirements
- Bluetooth v4.0 or later enabled on both the Windows and mobile devices.
- Duo Mobile installed and activated for Duo Push.
    - Android 12 and Duo Mobile version 4.64.0 or later.
    - iOS 16 and Duo Mobile version 4.62.0 or later.

## Enroll in Passwordless OS Logon

> Before you begin, please verify that Bluetooth is enabled on your Windows computer and desired mobile device.

1) Enter your Windows username and password. The *Log in without a password* screen appears.

![Duo Log in without a password screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon](/images/duo_passwordless/enroll1.png "Duo Log in without a password screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon")

2) Click Continue. The *Set up a mobile device for logging in to this computer* screen will display a list of the phones associated with your Duo account.

![Duo Set up a mobile device for logging in to this computer screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon](/images/duo_passwordless/enroll2.png "Set up a mobile device for logging in to this computer screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon")

3) Click to select the mobile device you want to use. The *Set up in just two steps* screen displays.

![Duo Set up in just two steps screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon](/images/duo_passwordless/enroll3.png "Set up in just two steps screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon")

4) Click Continue. The *Check for a Duo Push* screen appears.

![Duo Check for a Duo Push screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon](/images/duo_passwordless/enroll4.png "Check for a Duo Push screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon")

5) Duo Mobile receives a Bluetooth-enabled Duo Push if your computer and mobile device are in proximity with Bluetooth enabled on both devices.

6) Complete biometric or PIN verification after approving the Duo Push.

7) The *Success! Logging you in...* screen confirms Windows access.

![Duo Success! Logging you in... screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon](/images/duo_passwordless/enroll5.png "Success! Logging you in... screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon")

Once you've enrolled in Passwordless OS Logon, you will no longer need to enter a password to log in to that Windows system. If you log in to multiple Windows systems you'll need to repeat the setup steps on each one to log in without a password.

## Log in with Passwordless
1) Have your phone available with Bluetooth enabled.
2) Enter your Windows username at the sign-in screen. If you have completed passwordless enrollment, then the password field disappears.
3) Click Sign in on the Windows OS sign-on screen. The *Check for a Duo Push* screen appears.

![Duo Check for a Duo Push screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon-login](/images/duo_passwordless/login1.png "Duo Check for a Duo Push screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon-login")

4) Duo Mobile receives a Bluetooth-enabled Duo Push if your computer and mobile device are in proximity with Bluetooth enabled on both devices.
5) Complete a biometric or PIN challenge on your mobile device after accepting the Duo Push.
6) The *Success! Logging you in...* screen confirms Windows access.

![Duo Success! Logging you in... screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon-login](/images/duo_passwordless/login2.png "Duo Success! Logging you in... screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon-login")

### Other Options
On the Log in without a password screen, you may choose to click **Skip for now**. This will bring you to the normal Duo authentication screen.

If your login attempt fails, or you don't have the Bluetooth-enabled phone with Duo Mobile that you used to enroll in Passwordless OS Logon, click **Other options** in the Duo Push window.

You can choose to retry the Bluetooth login or to log in with a password instead, which sends a regular Duo Push request.

![Duo Other Options screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon-login](/images/duo_passwordless/otheroptions1.png "Duo Other Options screen image. Credit: CISCO DUO @ https://guide.duo.com/rdp#passwordless-os-logon-login")

If you no longer have that mobile device, or if you do not want to keep using passwordless on that computer, click Stop using Bluetooth to log in. This removes enrollment for that Bluetooth device and lets you log in with your password.

## References:
- [Duo MFA for Windows Logon](https://guide.duo.com/rdp#passwordless-os-logon)

`
