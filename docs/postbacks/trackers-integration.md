---
title: Connect AdGuard postbacks to your tracker
description: Ready-made postback URLs for Keitaro, Binom, Voluum, and RedTrack. See how to pass the click ID in your AdGuard links and which variables to use
sidebar_label: Postbacks for trackers
sidebar_position: 6
---

## Postback setup for Keitaro, Binom, Voluum, and RedTrack

Every tracker has its own postback URL format, so below are examples for popular trackers. In each example, replace the domain and keys with your own, and put [our variables](/postbacks/postback-parameters) where the tracker expects the values.

## Step 1. Pass the click ID in your AdGuard links

In your tracker, add the [AdGuard affiliate link](/tracking/affiliate-links) as the offer URL, with `externalid` and the tracker’s click ID token:

`https://adguard.com/?aid=YOUR_ID&externalid={clickid}`

| Tracker | Click ID token in the offer URL |
| --- | --- |
| Binom | `{clickid}` |
| Voluum | `{clickid}` |
| RedTrack | `{clickid}` |
| Keitaro | `{subid}` |

## Step 2. Add the postback URL in the Partner Portal

Copy the postback URL from your tracker, put our variables into it, and add it in *Promo tools* → *Set up postback URL*. Every postback URL must have `{aid}` and `{externalid}`: if they’re missing, we add them when you save the URL. See [Set up a postback URL](/postbacks/setup-postback-url).

### Keitaro

`https://your-keitaro-domain/your-postback-key/postback?subid={externalid}&status=sale&payout={price}&tid={eventid}&aid={aid}`

- `subid` takes the click ID, and `payout` takes your commission.
- `status` is the conversion status in Keitaro. With `status=sale`, keep only the *SALE* event type selected, so that installs aren’t counted as sales.
- You’ll find your postback URL and key in Keitaro, in *Settings* → *Postback URL*.

### Binom

`https://your-binom-domain/click.php?cnv_id={externalid}&payout={price}&cnv_status={type}&aid={aid}`

- `cnv_id` takes the click ID, and `payout` takes your commission.
- `cnv_status` takes the event type: `INSTALL`, `TRIAL`, or `SALE`.
- If your tracker is in a subfolder, add the folder before `click.php`.

### Voluum

`https://your-voluum-domain/postback?cid={externalid}&payout={price}&txid={eventid}&aid={aid}`

- `cid` takes the click ID, and `payout` takes your commission.
- `txid` takes the unique event ID.
- To track installs and sales as different conversion types, set up custom conversions in Voluum and add `&et={type}`.

### RedTrack

`https://your-redtrack-domain/postback?clickid={externalid}&sum={price}&type={type}&aid={aid}`

- `clickid` takes the click ID, and `sum` takes your commission.
- `type` takes the event type. Make sure conversion types named `INSTALL`, `TRIAL`, and `SALE` exist in RedTrack, or remove this parameter.

## Commission currency

`{price}` is always in US dollars. If your tracker uses another currency, set the currency for the conversion: for example, `&currency=USD` in Voluum or `&cnv_currency=USD` in Binom.

## Other trackers

1. Find the postback URL in your tracker’s settings.

1. Replace its click ID placeholder with `{externalid}` and its payout placeholder with `{price}`, and add `aid={aid}`.

1. Add `{type}` or `{eventid}` if your tracker supports a conversion type or a transaction ID.

1. Add the URL in the Partner Portal and click *Check connection*.

For details about your tracker’s parameters, see its documentation.

## Frequently asked questions

### My tracker uses macros like \{payout\}. Can I use them in the AdGuard postback URL?

No. In the postback URL, use only our variables in curly braces, such as `{price}`. Your tracker’s own placeholders go in the offer URL, such as `{clickid}` in `externalid`.

### Can I send installs and sales to different postback URLs?

No. You can have one postback URL. Use `{type}` to tell the events apart in your tracker.

## Related articles

- [How postbacks work](/postbacks/how-postbacks-work)
- [Postback parameters](/postbacks/postback-parameters)
- [How to test a postback](/postbacks/test-postback)
