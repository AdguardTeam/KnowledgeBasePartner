---
title: Postback variables and request format
description: AdGuard postbacks have seven variables, from aid and externalid to type and price. See what each variable means and examples of GET and POST requests
sidebar_label: Postback parameters
sidebar_position: 3
---

In your postback URL, you use variables in curly braces, such as `{externalid}`. When a conversion happens, we replace each variable with a real value and send the request to your server.

## Variables

| Variable | Type | What it contains | Example |
| --- | --- | --- | --- |
| `{eventid}` | string | Unique ID of the event. Recommended: it helps prevent counting the same conversion twice | `evt_4f8b3c2d` |
| `{type}` | string | Type of the conversion: `INSTALL`, `TRIAL`, or `SALE` | `SALE` |
| `{aid}` | int | Your partner ID. Required | `12345` |
| `{source}` | string | The subaccount from your link | `youtube` |
| `{externalid}` | string | The click ID from your link. Required | `4mfknyh4z76` |
| `{country}` | string | The user’s country, as a two-letter code | `US` |
| `{price}` | string | Your commission for this conversion, in US dollars, with a period for cents | `9.99` |

`{aid}` and `{externalid}` are required for attribution. Add them to your tracking link too: `aid` is already in your affiliate link, and `externalid` is the click ID that you add. See [Set up a postback URL](/postbacks/setup-postback-url).

`{source}` contains the subaccount from the `source` parameter of your link. See [Subaccounts](/tracking/subaccounts).

## Your own parameters

You can add your own parameters with fixed values, such as `&network=adguard` or a token for your server. We send them without changes.

Use only the variables from the table. If your URL has other names in curly braces, you’ll see an error. See [Postback troubleshooting](/postbacks/postback-troubleshooting).

## Request examples

### GET

```http
GET /postback?eventid={eventid}&type={type}&aid={aid}&externalid={externalid}&price={price} HTTP/1.1
Host: yourserver.com
User-Agent: AdGuard-Postback/1.0 (+https://adguardpartner.com/docs/postback)
Accept: */*
```

### POST

With POST, we send the parameters in the body of the request, as form data:

```http
POST /postback HTTP/1.1
Host: yourserver.com
User-Agent: AdGuard-Postback/1.0 (+https://adguardpartner.com/docs/postback)
Content-Type: application/x-www-form-urlencoded
Accept: */*

eventid={eventid}&type={type}&aid={aid}&externalid={externalid}&price={price}
```

In real requests, the variables are replaced with values.

## Values to keep in mind

- `{price}` is always in US dollars, even if your account is in euros. If your tracker uses another currency, set the currency in the tracker.
- `{country}` uses two-letter country codes, such as `US` or `DE`.
- `{eventid}` is unique for each event. Use it to ignore repeated requests for the same conversion.

## Frequently asked questions

### Which variables are required?

`{aid}` and `{externalid}`. Without them, we can’t attribute conversions to you.

### Can I rename the parameters in my URL?

Yes. Parameter names can be anything your tracker expects, for example, `clickid={externalid}` or `payout={price}`. Only the variables in curly braces must be from our list.

### In which currency is the commission in \{price\}?

In US dollars.

## Related articles

- [How postbacks work](/postbacks/how-postbacks-work)
- [Set up a postback URL](/postbacks/setup-postback-url)
- [Postbacks for popular trackers](/postbacks/trackers-integration)
