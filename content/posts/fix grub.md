+++
title = "Fix GRUB"
description = "recover grub install."
date = 2025-02-16
+++

Sometimes I do the normal updates in my windows and it blows up the GRUB. And everytime I forget the steps I have done before to fix it, so to be a note for me I write this.

```txt
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 476.9G  0 disk
├─nvme0n1p1 259:1    0   260M  0 part <--- efi
├─nvme0n1p2 259:2    0    16M  0 part
├─nvme0n1p3 259:3    0 215.7G  0 part
├─nvme0n1p4 259:4    0  1000M  0 part
├─nvme0n1p5 259:5    0     8G  0 part <---- swap
├─nvme0n1p6 259:6    0   248G  0 part <---- root
└─nvme0n1p7 259:7    0     4G  0 part
```

This all are partitions my current install have. `nvme0n1p1` is the efi partition that have all the files needed for booting the installed os'es.

## Fixin'

First, I'll boot into the arch ISO and I will mount the `root` and `efi` partition under `/mnt` and `/mnt/efi` respectively. Ah I know some people also use `/boot/efi` as the efi mount point but I have it under `/efi`.

```bash
$ mount /dev/nvme0n1p2 /mnt
$ mount /dev/nvme0n1p6 /mnt/efi
```

I just use the default config of `grub.cfg` with no extra options.

Install the GRUB using `grub-install`

```bash
$ grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=GRUB
```

tada! if no errors reported you are good to go, reboot your system you will see the grub menu.

If your system doesn't load the grub menu instead it boots the Windows in that case just get into the UEFI/Bios(legacy) settings and update the boot priority to the GRUB to be the first. Then save and exit. You will see the GRUB menu.

Hope, I don't forget this anymore :)

