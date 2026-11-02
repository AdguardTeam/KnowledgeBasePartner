---
title: "Postback tracking: how it works"
description: Learn how AdGuard affiliate postbacks send installs, trials, and sales to your tracker. See how the click ID travels from your link to your postback URL
sidebar_label: How postbacks work
sidebar_position: 1
---

A postback is a request that our server sends to your server when a conversion happens: an install, a trial, or a sale. If you use a tracker, such as Keitaro, Binom, Voluum, or RedTrack, postbacks bring your AdGuard conversions into it automatically.

You don’t need postbacks to earn commissions. They’re useful if you buy traffic and want to see which campaigns and ads bring sales.

## How a postback works

1. Your tracker creates a [click ID](/support/glossary#click-id) for each visitor and adds it to your AdGuard affiliate link, in the `externalid` parameter.

1. The visitor clicks the link, installs the app, or buys a product.

1. Our server sends a request to your postback URL. The request includes the same click ID, the type of the conversion, and your commission.

1. Your tracker finds the click by its ID and records the conversion.

For example, your tracker sends a visitor to this link:

`https://adguard.com/?aid=YOUR_ID&externalid=4mfknyh4z76`

When this visitor buys a license, we send a request like this to your server:

`https://your-tracker.com/postback?aid=YOUR_ID&externalid=4mfknyh4z76&type=SALE&price=9.99`

## Which conversions we send

You choose the event types when you [set up your postback URL](/postbacks/setup-postback-url):

- `INSTALL`: an app was installed through your link
- `TRIAL`: a user started a trial
- `SALE`: a purchase was credited to you

We send postbacks only for conversions that are credited to you. See [How sales are credited](/tracking/cookie-window).

## What you need

- A server or a tracker that can receive requests at a public URL
- A postback URL with our variables, such as `{aid}`, `{externalid}`, and `{price}`. `{aid}` and `{externalid}` are required. See [Postback parameters](/postbacks/postback-parameters)
- The click ID in your AdGuard links: add `&externalid=` with your tracker’s click ID to each link

## Good to know

- We send postbacks only for conversions that happen after you set up your postback URL. Earlier conversions aren’t sent.
- The Partner Portal doesn’t show a history of sent postbacks. Check them in your tracker.
- If a postback can’t be delivered, we make up to five attempts, 15 minutes apart.
- You can have one postback URL. It receives all the event types you selected.

## Frequently asked questions

### Do I need postbacks to get paid?

No. Postbacks only send conversion data to your tracker. Your commissions and payouts don’t depend on them.

### What is a click ID?

A unique ID that your tracker gives to each click. You pass it to us in the `externalid` parameter of your link, and we send it back in the postback.

### Will I get postbacks for sales from before I set up my postback URL?

No. We send postbacks only for conversions that happen after the setup.

## Related articles

- [Set up a postback URL](/postbacks/setup-postback-url)
- [Postback parameters](/postbacks/postback-parameters)
- [Postbacks for popular trackers](/postbacks/trackers-integration)
