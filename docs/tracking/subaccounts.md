---
title: "Subaccounts: track your traffic sources"
description: Add a subaccount to your AdGuard affiliate links to see which channel brings visits, installs, and sales. See name rules, examples, and the By subaccount report
sidebar_label: Subaccounts
sidebar_position: 3
---

A subaccount is a label you add to your [affiliate link](/tracking/affiliate-links) to see which of your channels brings visits, installs, and sales. For example, you can use one subaccount for your YouTube channel and another one for your blog.

## How subaccounts work

You don’t need to create a subaccount anywhere or tell us about it. Add it to your link and use the link in your posts. The subaccount appears in your statistics after someone clicks the link.

You can also use subaccounts to compare different places on the same page, such as a button at the top and a link at the bottom.

## How to add a subaccount

The way you add a subaccount depends on the type of link.

### Installation link

Add `?source=` and the name of the subaccount to the end of the link:

`https://download.adguardcdn.com/d/YOUR_ID/adguardInstaller.exe?source=youtube`

### Website link

Add `&source=` and the name of the subaccount to the end of the link:

`https://adguard.com/?aid=YOUR_ID&source=blog`

## Rules for subaccount names

- Use only numbers and lowercase English letters. Other characters are replaced with an underscore.
- A name can be up to 50 characters long.

For example, use `youtube`, `blog`, or `review2026`.

## Where to see subaccount statistics

1. In the left menu of the Partner Portal, click *Affiliate statistics*.

1. In *Report by*, select *By subaccount*.

    ![Affiliate statistics report by subaccount with visits, installations, purchases, and revenue](https://cdn.adtidy.org/content/kb/partner/tracking/tracking-subaccounts-report.png)

For each subaccount, you’ll see *Visits*, *Installations*, *Downloads*, *Registrations*, *Purchases*, *Renewals*, and *Revenue*. See [Affiliate statistics](/earnings/earnings-reports).

Sales with [promo codes](/tracking/promo-codes) aren’t tied to a subaccount. You’ll find them under *No subaccount*.

## Subaccount and source are different things

*Affiliate statistics* also has a *By source* report. It shows the websites and platforms where your visitors came from, such as a social network. You don’t add sources to your links: we detect them ourselves. Subaccounts are labels that you add.

## Subaccounts in postbacks

If you use postbacks, you can get the subaccount in your tracker with the `{source}` variable. See [Postback parameters](/postbacks/postback-parameters).

## Frequently asked questions

### Do I need to create a subaccount in the Partner Portal first?

No. Add it to your link, and it appears in your statistics after the first click.

### Can I delete a subaccount?

No. If you don’t need a subaccount anymore, stop using it in your links.

### Why don’t I see my subaccount in the statistics?

It appears after someone clicks the link. Visits show up right away, while installs and purchases can take up to 48 hours. Also check that the name has only numbers and lowercase English letters.

### Can I add a subaccount to a link with a promo code?

You can, but sales with promo codes always appear under *No subaccount*.

## Related articles

- [Affiliate links](/tracking/affiliate-links)
- [Affiliate statistics](/earnings/earnings-reports)
- [Postback parameters](/postbacks/postback-parameters)
