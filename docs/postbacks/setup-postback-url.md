---
title: How to set up a postback URL
description: Set up a postback URL in the AdGuard Partner Portal step by step. Choose the HTTP method and event types, add variables, check the connection, and save
sidebar_label: Set up a postback URL
sidebar_position: 2
---

## Set up your postback URL step by step

A postback URL tells us where to send information about your conversions. You set it up once in *Promo tools*, and then add the click ID to your affiliate links.

:::note

Before you start, get the postback URL of your tracker or server. For examples, see [Postbacks for popular trackers](/postbacks/trackers-integration).

:::

## How to add a postback URL

1. In the left menu of the Partner Portal, click *Promo tools*.

1. In the *Postback URL* block, click *Set up postback URL*.

1. Click *Add postback URL*.

1. In *HTTP method*, select *GET* or *POST*.

1. In *Event types*, keep the conversions you want to receive: *INSTALL*, *TRIAL*, and *SALE*. Clear the ones you don’t need. At least one must stay selected.

1. In *Postback URL*, paste the URL of your tracker or server. Put our variables in curly braces where your tracker expects the values. For example:

    `https://your-tracker.com/postback?clickid={externalid}&payout={price}&status={type}&aid={aid}`

1. Below the field, click the variables you want to add. `{aid}` and `{externalid}` are required: without them, we can’t attribute conversions to you. If they’re missing, we add them to the URL automatically. We also recommend `{eventid}`: it helps prevent counting the same conversion twice.

1. Click *Check connection* to send a test request. See [How to test a postback](/postbacks/test-postback).

1. Click *Add*.

Your postback URL appears on the *Set up postback URL* page.

If you paste a URL where parameter names match our variables, such as `aid=12345`, we replace the values with variables, like `aid={aid}`. Parameters with other names are sent as they are. If the URL doesn’t start with `https://`, we add it.

## Add the click ID to your affiliate links

For each click, your tracker creates a click ID. Pass it to us in the `externalid` parameter of your AdGuard link, and we’ll send it back in the postback.

- **Website link:** `https://adguard.com/?aid=YOUR_ID&externalid={clickid}`
- **Installation link:** `https://download.adguardcdn.com/d/YOUR_ID/adguardInstaller.exe?externalid={clickid}`

Replace `{clickid}` with your tracker’s click ID token. To add a subaccount too, use `?source=youtube&externalid={clickid}` in installation links. See [Subaccounts](/tracking/subaccounts).

## Tips for your postback URL

- Use HTTPS to protect the data in the requests.
- Use a public URL. We can’t send postbacks to localhost or to internal networks.
- Use the final URL, without redirects.
- Don’t require a login or a password. If your server needs a token, add it to the URL as a parameter.
- Make sure your server responds within five seconds.

## How to change or remove your postback URL

1. In *Promo tools*, open *Set up postback URL*.

1. Click the edit icon to change the URL, or the trash icon to remove it.

If you remove your postback URL, you’ll stop receiving postbacks.

## Frequently asked questions

### Can I add several postback URLs?

No. You can have one postback URL. It receives all the event types you selected.

### Should I use GET or POST?

Use the method your tracker expects. Most trackers accept GET. With POST, we send the parameters in the body of the request.

### Why do I need to add externalid to my links?

The click ID in `externalid` links each conversion to a click in your tracker. Without it, your tracker can’t match the conversion to a click.

## Related articles

- [How postbacks work](/postbacks/how-postbacks-work)
- [Postback parameters](/postbacks/postback-parameters)
- [How to test a postback](/postbacks/test-postback)
