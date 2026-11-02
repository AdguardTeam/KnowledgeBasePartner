---
title: How to test your postback URL
description: Send a test postback from the AdGuard Partner Portal before real conversions arrive. Learn how Check connection works and how to read the response
sidebar_label: Test a postback
sidebar_position: 4
---

## Test your postback before real conversions arrive

Before you [save your postback URL](/postbacks/setup-postback-url), send a test request. We fill your [variables](/postbacks/postback-parameters) with test values, send the request to your server, and show you the response.

## How to send a test request

1. In *Promo tools*, open *Set up postback URL* and click *Add postback URL*, or click the edit icon to change your URL.

1. Enter your postback URL and select the event types.

1. Click *Check connection*.

1. In *Simulate event*, select the event type to test: *INSTALL*, *TRIAL*, or *SALE*. Only the event types you selected for your URL are available.

1. Check *Template with test values*: it shows how the request will look.

1. Click *Send test request*.

You’ll see the response code from your server. If everything works, you’ll see *URL is working*.

## How to check the result

1. Open your tracker or your server logs.

1. Find the test request. It has test values, not real data.

1. Check that your tracker read each value correctly: the click ID, the event type, and the commission.

Test requests aren’t real conversions. Your tracker may show them as conversions, so delete them from your tracker’s reports if needed.

## If the test fails

With the response code, you’ll see what went wrong and how to fix it. The most common reasons:

- The URL has a typo or points to a page that doesn’t exist.
- Your server redirects the request. Use the final URL.
- A firewall blocks our requests.
- Your server takes longer than five seconds to respond.

For all errors, see [Postback troubleshooting](/postbacks/postback-troubleshooting).

## Frequently asked questions

### Does a test request count as a conversion?

Not for us. It doesn’t change your statistics or earnings. Your tracker may record it, so check its reports.

### The test works, but I don’t get real postbacks. Why?

Check that your links have the `externalid` parameter, and that the conversions happened after you saved your postback URL. See [Postback troubleshooting](/postbacks/postback-troubleshooting).

## Related articles

- [Set up a postback URL](/postbacks/setup-postback-url)
- [Postback troubleshooting](/postbacks/postback-troubleshooting)
- [Postback parameters](/postbacks/postback-parameters)
