
export const windows10EOL_info = 'Microsoft has confirmed that Windows 10 will reach its official end of free support on October 14, 2025. After that date, users will no longer receive security patches, feature updates, or technical support from Microsoft'

export const windows10EOL_md = `
# Windows 10 Sunsets on October 2025
*Last updated on July 21, 2025*

## Overview

Microsoft has confirmed that Windows 10 will reach its official end of free support on **October 14, 2025**. 
After that date, users will no longer receive security patches, feature updates, or technical support from Microsoft unless they opt in to a paid Extended Support Program (ESU).

Although your PC will still boot and basic apps may continue to work, staying on Windows 10 means heading into increasingly unsecured territory, similar to what happened after Windows 7's retirement.

## Requirements
- **Processor**: a supported processor
    - [Supported Intel Processors](https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-intel-processors)
    - [Supported AMD Processors](https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-amd-processors)
- **Memory**: at least 4 GB of RAM
- **Storage**: at least 64 GB on a GUID Partition Table formatted boot drive
- **Graphics**: DirectX 12 or later
- **System Firmware**: UEFI, Secure Boot capable
- **TPM**: Trusted Platform Module (TPM) 2.0
- **Internet**: an internet connection is required to update Windows 11
- Please see [Windows 11 requirements](https://learn.microsoft.com/en-us/windows/whats-new/windows-11-requirements) for more information.

## Getting Started
- If you would like to get your work computer updated, please contact our [IT Help Desk](https://it.bockwaterheaters.com/#/help)
    - Please note the the process usually takes about 3 hours, but you may use your computer for most of that time.
    - A reboot is required after the installation finishes.
- If you would like to update your personal computer:
    - Please use the [PC Health Check](https://support.microsoft.com/en-us/windows/how-to-use-the-pc-health-check-app-9c8abd9b-03ba-4e67-81ef-36f37caa7844) app by Microsoft to see if your computer currently meet the requirements.
    - If your computer meets the requirements:
        - Download and run the [Windows 11 Installation Assistant](https://www.microsoft.com/en-us/software-download/windows11)
    - If your computer does not meet the requirement:
        - [Find out what processor you have](https://www.dell.com/support/kbdoc/en-us/000204117/how-to-identify-the-intel-core-processor-generation) then make sure it appears on either of the 2 supported processor lists above.
        - [Check if you have at least 4GB of RAM](https://www.crucial.com/articles/about-memory/how-to-check-ram-windows-10)
        - [Check if you have at least 64 GB of storage](https://www.wikihow.com/Check-Your-Hard-Disk-Space)
        - Caution! The steps below are more involved. Please make sure you understand them before proceeding.
        - [Find out if your boot drive is MBR](https://www.ninjaone.com/blog/check-if-a-disk-is-mbr-or-gpt/) and [convert it from MBR to GPT](https://learn.microsoft.com/en-us/windows/deployment/mbr-to-gpt) if it is.
        - [Enable TPM](https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c)


## Support
- Contact our [IT Help Desk](https://it.bockwaterheaters.com/#/help)

`