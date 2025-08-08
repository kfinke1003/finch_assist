export const safeBrowsing_info = 'Web browsers are a prime attack vector for threat actors to collect your sensitive information and to infect your computer with malware. It is increasingly important for you to take extra precautions to avoid becoming a victim.'

export const safeBrowsing_md = `
# Safe Browsing
*Last updated August 5, 2025*

## Overview

Web browsers are one of the most commonly used apps which makes them prime attack vectors for threat actors to collect your sensitive information and to infect your computer with malware. 
It is increasingly important for you to take extra precautions to avoid becoming a victim. 
A lot of web browsers take steps to help mitigate attacks, but they can't stop everything. 
It is up to you to take the proper security precautions to protect yourself.

## Bottom Line
1) Enable MFA—or 2FA if MFA is not available—for every one of your accounts.
2) Start using a password manager secured behind MFA so that you can consistently use strong and complex passwords.
3) Adhere to the Principle of Least Privilege (POLP)—only grant websites the minimum necessary rights and permissions. 

## Strengthen the security of your accounts

Single-factor authentication with just a password is one of the greatest risks to your account.
Take a moment to imagine an account as a house and a password as a key. If someone gets a hold of the key, they can enter into the house without a second thought.
A key can become compromised in many different ways. It may be left in an unsafe location, it may be given to a trusted individual who then loses it, or it may be fraudulently copied.
This goes to show that a singular key is not enough.

Consider enabling **Two-Factor Authentication (2FA)** or **Multi-Factor Authentication (MFA)** for every one of your accounts if it is available.
2FA requires you to provide two pieces of evidence to verify that your login attempt is legitimate.
Logging into an account with 2FA enabled typically involves a password and a second factor such as a code sent to your phone via SMS or an authenticator app.
This instantly makes logging into your account more secure because an attacker will also need access to your phone in order to log into you account.
MFA is like 2FA but it is even more secure because it may involve a combination of two or more factors such as password, codes, biometrics, and security keys.

Keep in mind that if an attacker gets a hold of your SIM card, you may be vulnerable to an account breach if your MFA methods rely solely on your phone number.
To prevent this, I recommend using an authenticator app like Google Authenticator—available on both Google Play and the Apple App Store.
Setting up a 2FA code for every one of your accounts is a breeze, it can be used across a wide range of online accounts, and it is more secure than SMS-based authentication.

## Use a password manager

Now that you know how to safely set up an account with MFA, you can set up an account with MFA enabled for a password manager so that you will only ever need to remember one password—the one you use to log into the password manager itself.
A password manager acts as a digital vault for your login credentials. 
Whenever you create an account or log into one, your password manager will ask you if you would like to store your credentials for it.
Additionally, whenever you go to log into an account that is saved within your password manager, it will show a popup box to automatically fill in your saved credentials for you.

> Please note: you should never sign into your password manager on an untrusted, public device. If you accidentally stay logged in to your password manager, anyone will be able to access your credentials. This becomes slightly less of a problem if all of your accounts are behind MFA however.

When creating a new account, your password manager will automatically generate a complex password for you to use such as: xhm3gzx5fkg!VAF3thq.
Using a complex and unique password for every one of your accounts will significantly reduce the risk of you password being cracked.
Because your password manager will remember all your complex passwords for you, you do have to worry about making them memorable any more.
In the event of a massive password breech, some password managers will actually notify you to update a password if it detects that the credential has been compromised.

Our IT department uses [1Password](https://1password.com/) as our dedicated password manager.
It allows you to create separate vaults so that the login credentials for shared accounts can be available to whoever you share the vault with.
1Password is a paid service, but the password manager that comes with your web browser of mobile phone will typically work just fine.

> If you are going to use a password manager, make sure you **enable MFA or 2FA**. Don't take the risk of someone being able to steal all of your login information.

## Be aware of phishing attacks and scams

A phishing attack is when a malicious actor attempts to trick you into giving them your login credentials. 
Many phishing attacks attempt to spoof common services like Google, Microsoft, and PayPal all the while creating some sense of urgency to rush you into making a hasty decision.
I have already written two solid articles relating to phishing.
1) I would highly recommend reading this article. It links to a phenomenal interactive quiz and shows some examples of real phishing attacks. [https://it.bockwaterheaters.com/#/cybersecurity/phishing_examples](https://it.bockwaterheaters.com/#/cybersecurity/phishing_examples)  
2) This one goes into detail about the common signs of a phishing attack. [https://it.bockwaterheaters.com/#/cybersecurity/phishing](https://it.bockwaterheaters.com/#/cybersecurity/phishing)

## Safely interact with websites

You can strengthen your internet security posture by adhering to the Principle of Least Privilege (POLP).
POLP dictates that a website should only be granted the minimum necessary access rights and permissions required to perform its designated tasks or functions.
If you minimize the amount of your data that can collected, not only will malicious websites have less data to steal, but you will also become a less appealing target. 
The 3 main categories of ways that your browser tries to collect data are site permissions, third-party cookies, and stored data.

Whenever you access a website or one of its services, you may see a pop up from your browser itself (not the website) asking whether or not its okay for the site to use the specified device or data.
If the website is asking you to allow notification, I would recommend always rejecting this.
Attackers have gotten really crafty about making the browser notifications appear as genuine Windows notifications.
If you allow a suspicious website to send you notifications you may begin to see an alarming number of fraudulent notifications telling you that your antivirus software is expired.
Bottom line: if you do not need the website to use your camera, microphone, or send you notifications, always block the site from using it. 

Many modern websites will prompt you to allow them to save cookies on your computer. 
Cookies are small bites of information that a browser stores about you.
First party cookies store essential data for a website like the special token that gets generated whenever you log in to that website, the items in your shopping cart, and data that you have entered into an in-progress form.

Third party cookies typically belong to a different domain (website) than the one being visited. 
They are used to track browsing habits, including your website history, search history, the links you click on, the content you interact with on social media.
If a malicious actor sets up their own third part cookie, then they can collect valuable information about your browsing habits.
Having this information will allow them to carry out a more strategic attack against you.

All that said, if you're just simply anonymously browsing a website, you should typically choose to reject all cookies for that site. 
If this isn't an option, choose to only opt in to using essential cookies. 
Additionally, most browsers have a setting that you can enable which blocks third party cookies.

Most browsers will typically accumulate some sorted data as you use them. This may include browsing history, saved form data, location data, bookmarks, credentials, download history, and more.
Some browsers allow you to opt out of the collection of some of this data, however most of it is typically mandatory.
That being said, always keep your browser up to date and ensure that you trust every browser extension that you try to install.
Taking these precautions will minimize the risk of someone being able to exploit a vulnerability in your browser or extensions.

## References
- [https://www.cisa.gov/resources-tools/training/tips-stay-safe-while-surfing-web-part-1-web-browser-settings](https://www.cisa.gov/resources-tools/training/tips-stay-safe-while-surfing-web-part-1-web-browser-settings)
- [https://safety.google/security/security-tips/](https://safety.google/security/security-tips/)
- [https://www.paloaltonetworks.com/cyberpedia/what-is-the-principle-of-least-privilege](https://www.paloaltonetworks.com/cyberpedia/what-is-the-principle-of-least-privilege)

`