+++
title = "The Arch Install"
description = "The Adventure of Installing Arch."
date = 2023-12-31
draft = true 

[taxonomies]
tags = ["zola"]
+++

I have been an arch user for most of the time. If I do anything related to work or jus' chillin I use the arch as my main driver 'cause it makes most of workflow very much easy. But sometimes I tend to mess my system up, So in that case I forget most of the installation steps. Even though we have the installation scripts or other helper tools. But I like to install and get my system up, on my own. To be note to me I am gonna spin this blog on.

## Essentials

-   USB Flash drive >= 8Gb
-   Ventoy (you can use other like rufus, balena etcher.)
-   Latest ISO from [archlinux.org](https://archlinux.org)

If you have all the essentials. Let's get into the system installation.

## Installation

I'm aiming for a clean installation with only Arch Linux on my system. After booting the flash drive, check whether your internet is working by

```bash
$ ping archlinux.org
PING archlinux.org (2a01:4f9:c010:6b1f::1) 56 data bytes
64 bytes from archlinux.org (2a01:4f9:c010:6b1f::1): icmp_seq=1 ttl=52 time=201 ms
64 bytes from archlinux.org (2a01:4f9:c010:6b1f::1): icmp_seq=2 ttl=52 time=196 ms
64 bytes from archlinux.org (2a01:4f9:c010:6b1f::1): icmp_seq=6 ttl=52 time=196 ms
```

If the command works then alright move onto the partition. Otherwise try to connect to internet using `iwctl`(refer arch wiki for more on this.)

For simplicity I'll use `cfdisk` for partioning the drives.

I'll create three partition for the system such as;

-   1024M for EFI (a.k.a boot partition)
-   8G for swap
-   Remaining in my case its 470G for the root(/) file system.

"then format the drives and then do pacstrap for installing system base packages."

