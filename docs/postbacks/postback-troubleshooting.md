---
title: Postback errors and how to fix them
description: Fix AdGuard postback errors, from redirects and 4xx or 5xx responses to timeouts and SSL problems. Find out what to check if real postbacks don’t arrive
sidebar_label: Postback troubleshooting
sidebar_position: 5
---

When you send a test request in *Check connection*, we show the response from your server and a hint. Messages about the URL template appear in the *Add postback URL* window as you type. Here’s what each message means and how to fix it.

## Messages about the URL template

| Message | What to do |
| --- | --- |
| *Unrecognized variables* | Use only variables from our list. Until you fix it, you can’t add the URL or check the connection. See [Postback parameters](/postbacks/postback-parameters) |
| *Required for attribution: \{aid\}, \{externalid\}* | Add the required variables to your URL |
| *Please specify at least one URL parameter* | Add at least one parameter with a variable to the URL |
| *The URL points to a non-routable host* | Use a public URL that can be reached from the internet |
| *To protect sensitive data, use HTTPS instead of HTTP* | Change the URL to HTTPS |

## Response codes from your server

| Code | What it means | What to do |
| --- | --- | --- |
| 3xx | Your server returned a redirect | Use the final URL as your postback URL |
| 400 | Your server rejected the request | Check the URL and make sure your server accepts the HTTP method you selected |
| 401 | Your server requires authentication | We don’t send logins or passwords. Add a public token to the URL |
| 403 | A firewall or WAF blocks the request | Allow requests with the User-Agent `AdGuard-Postback/1.0` |
| 404 | The URL doesn’t exist on your server | Check the path for typos and make sure the URL points to the right server |
| 405 | Your server doesn’t accept this HTTP method | Switch between GET and POST, or update your server |
| 408 | Your server didn’t respond in time | Try again later or contact your hosting provider |
| 429 | Your server limited the request rate | Raise the rate limit for `AdGuard-Postback/1.0` |
| 500 | Your server returned an error | Check your server logs |
| 502 | Your proxy or CDN works, but your server doesn’t respond | Check your server logs and restart it if needed |
| 503 | Your server is unavailable | The server may be overloaded. Check it and try again |
| 504 | Your proxy or CDN works, but your server didn’t respond in time | Check whether your server is down or too slow |

## Connection errors

| Message | What to do |
| --- | --- |
| *The server at … rejected our connection* | Make sure a service is running on that port and your firewall allows our request |
| *Couldn’t connect within 5 seconds* | Check that the server is running and can be reached from the internet |
| *Your server didn’t respond within 5 seconds* | Make your server respond faster. If processing takes time, respond first and process the request later |
| *Couldn’t establish a secure connection* | Check your SSL certificate: it may be expired or issued for another hostname. We require TLS 1.2 or later |
| *Your URL redirects more than 5 times* | Use the final URL as your postback URL |
| *This URL points to a private or internal address* | Use a public URL. We can’t send postbacks to localhost or internal networks |
| *Your server returned more than 1 MB* | The URL most likely points to a web page, not to a postback endpoint. Check the URL |

## The test works, but real postbacks don’t arrive

Check the following:

1. **Your links have the click ID.** Each affiliate link must have `externalid` with your tracker’s click ID. See [Set up a postback URL](/postbacks/setup-postback-url).

1. **The event type is selected.** We send only the event types you selected for your postback URL.

1. **The conversion happened after the setup.** We don’t send postbacks for earlier conversions.

1. **The conversion is credited to you.** We send postbacks only for conversions credited to you. Check *Affiliate statistics*: new installs and purchases can take up to 48 hours to appear there. See also [Why a sale wasn’t credited](/tracking/missing-conversions).

1. **Your server was available.** If a postback couldn’t be delivered, we made up to five attempts, 15 minutes apart.

If everything looks right, [contact partner support](/support/contact-support). Send us your postback URL and the click IDs of the missing conversions.

## Frequently asked questions

### Can I see which postbacks you sent?

No. The Partner Portal doesn’t show a history of postbacks. Check your tracker or server logs.

### Will I get postbacks for conversions from before the setup?

No. We send postbacks only for conversions that happen after you set up your postback URL.

## Related articles

- [How to test a postback](/postbacks/test-postback)
- [Postback parameters](/postbacks/postback-parameters)
- [How postbacks work](/postbacks/how-postbacks-work)
