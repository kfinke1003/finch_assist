export const verified_duo_push_info = 'Verified Duo Push is a more secure authentication method that helps us become more strategic against new threats to multi-factor authentication.'

export const verified_duo_push_md = `
# Verified Duo Push
*Last updated on July 21, 2025*

## Overview

You will now need to enter a 3 digit code into your Duo mobile app instead of approving a push notification. 
This modification to our authentication method helps to strengthen our security posture.

## Motivation Behind the Change
Our previous method of authentication, push-notification-based authentication, is vulnerable to **Push Fatigue** and **Push Harassment**.
-	**Push Harassment**: Multiple successive push notifications bother someone into accepting a push for a fraudulent login attempt.
-	**Push Fatigue**: Constant MFA means people pay less attention to the details of their login, causing someone to mindlessly accept a fraudulent push login.

You may not have encountered a fraudulent push notification; however, this does not mean it cannot happen. 
This move helps us to be strategic and to take measures to mitigate these new threats.

## Solution: Verified Duo Push

This security feature makes you enter a verification code (displayed on the device that is being logged in to) into your Duo mobile app during the push login process.
With Verified Duo Push, the an attacker is immediately stopped if they do not have access to the mobile device to enter the code into.
A fraudulent login request cannot be approved unless the attacker has access to your mobile device and computer or you manually provide the malicious actor with the login code from your own mobile device. 
This is more secure than our current solution.

![An image displaying the Verified Duo Push Windows logon process.](/images/winlogon-verified-duo-prompt-final.png "An image displaying the Verified Duo Push Windows logon process.")

## References
-	[https://duo.com/blog/verified-duo-push-makes-mfa-more-secure](https://duo.com/blog/verified-duo-push-makes-mfa-more-secure)
-	[https://it.wisc.edu/security/enhancing-your-login-security-important-mfa-duo-updates-coming-in-june/](https://it.wisc.edu/security/enhancing-your-login-security-important-mfa-duo-updates-coming-in-june/)

## Support
- Contact our [IT Help Desk](https://it.bockwaterheaters.com/#/help)


`