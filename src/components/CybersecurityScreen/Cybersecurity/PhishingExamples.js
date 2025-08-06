export const phishingExamples_info = 'Click on this article to see some real phishing examples that I\'ve gathered over the years. Additionally, you can take an interactive phishing quiz by Google and Jigsaw. '

export const phishingExamples_md = `
# Phishing Examples
*Last updated on August 5, 2025*

## Overview

This article contains examples of real phishing attempts. Some are more crafty and cunning than others. Please take a moment to learn from these so that you help prevent yourself from becoming a victim.

## The Quiz

Before I go into the detail about some past phishing attempts, please consider taking this interactive phishing quiz developed by Jigsaw and Google: [https://phishingquiz.withgoogle.com/](https://phishingquiz.withgoogle.com/).
It is a high quality, thorough, and informative experience. When it asks you to enter in a name and email, you can provide completely made up entries if you would like.
Here are some of the topics it goes over: 
- Hovering over links to identify where the link will take you.
- How to recognize mismatches between alleged senders and their email domain.
- Techniques used by attackers to bypass automatic detection.
- How attackers can scam you through trusted services.
- Text message (SMS) phishing attacks.
- How to recognize when an attacker has hidden a malicious domain behind a subdomain.

Once again, here is the link: [https://phishingquiz.withgoogle.com/](https://phishingquiz.withgoogle.com/)

---

## Example 1 - Trusted Sender Gets Hacked

The following example has been anonymized to protect those involved in the incident. This seemingly innocuous email was received by one of our colleagues, Carl. 
Carl has done business with Dexter Moon, Inc. before and he recognized that dmoon@dextermoon.com is a trusted email address.
What made this phishing attack even more convincing to Carl was that he was actually working on a project with Dexter's brother, Lexer Moon, the previous night.  

![TODO](/images/phishing_example_1_p1.png "TODO")

Because Carl was recently working with someone from Dexter Moon, Inc. and the email was sent by a trusted address, Carl was immediately less suspicious of it. 
The only indicator that this is a phishing attack is the misspelling of Dexter Moon's name as ***Dexer Moon*** on the shared document. 
Additionally, in this scenario, Carl could have questioned why Dexter sent him a document and not his brother Lexer — the person Carl was working with.

Upon clicking the link, Carl was met with this page:

![TODO](/images/phishing_example_1_p2.png "TODO")

This page is where the major red flags show themselves. Right off the bat, you can see countless misspellings of Dexter Moon's name. 
Upon hovering over the VIEW DOCUMENT link, you can see that the link in the grey box at the bottom left corner does not belong to a dextermoon.com domain or any sort of microsoft.com domain as would be expected.
This link is an immediate indicator that this is a phishing attack. 

Having already flagged the email as trustworthy in his mind, Carl entered his credentials to access to the "secure files," thus becoming a victim of a phishing attack. 
It turns out that Dexter Moon's account was hacked and the attacker made and distributed this credential harvest to Dexter's contact list through Dexter's own email.

> Even if you trust the sender, never automatically trust the secondary location that they're trying to send you to.

---

## References:
- [https://phishingquiz.withgoogle.com/](https://phishingquiz.withgoogle.com/).

`
