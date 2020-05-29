
<!-- Tag line -->
<h3 align="center">Simple Email Client</h3>

<!-- Badges -->
<p align="center">
    <a href="https://shields.io/" target="_blank">
        <img src="https://img.shields.io/github/languages/top/bwhybrow23/Template?color=brightgreenn" alt="Main Lang"/>
    </a>
     <a href="https://github.com/users/bwhybrow23" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-bwhybrow23-blue.svg?logo=github&logoColor=FFF" alt="GitHub"/>
  </a>
    <a href="http://discord.benwhybrow.com/" target="_blank">
    <img src="https://img.shields.io/discord/455782308293771264?color=blueviolet&label=Discord" alt="Discord" />
    </a>
</p>

<!-- Content -->
## Hello

A simple email client that works with most SMTP email providers like Gmail or Outlook. 
Check below for information on how to set up the client. 

## Configuring the Sender
Be sure to change **config.json.sample** to **config.json** so it works. 

    {
    "port": "3000", //PORT FOR THE SERVER TO RUN OFF
    "server": {
           "host": "EMAIL SERVER", //SMTP SERVER (see below)
           "secure": false, //SECURE SMTP (as per email)
           "port": 25 //SMTP PORT (see below)
    },
       "auth": {
           "user": "EMAIL", //YOUR EMAIL
           "password": "PASSWORD", //YOUR EMAIL PASSWORD
           "name": "NAME" //THE NAME YOU WANT TO SHOW UP AS A SENDER
    }

## SMTP Information
**Gmail Users**:
Make sure that you have SMTP enabled in Gmail otherwise this will not work. 
-   **Server:**  smtp.gmail.com
-   **Port:** 587
-   **Secure:**  No (*false* in config)

**Outlook/Hotmail Users**:
- **Server:** smtp-mail.outlook.com
- **Port:** 25
- **Secure:** No (*false* in config)

**Other Email Providers**:
Check with your email providers or just search on Google your email provider with "SMTP credentials" at the end.

### Donating

You can also help me and the project out by sponsoring me through [GitHub Sponsors](https://github.com/users/bwhybrow23/sponsorship) (preferred) or contributing through a [donation on PayPal](http://paypal.benwhybrow.com/).
<p>
    <a href="https://github.com/users/bwhybrow23/sponsorship" target="_blank">
        <img src="https://img.shields.io/badge/GitHub%20Sponsors-bwhybrow23-blue.svg?logo=github&logoColor=FFF" alt="GitHub Sponsors"/>
    <a href="http://paypal.benwhybrow.com/" target="_blank">
        <img src="https://img.shields.io/badge/PayPal-Ben%20Whybrow-blue.svg?logo=paypal&logoColor=00457C" alt="PayPal"/>
    </a>
</p>

<!-- Discussion & Support -->
## Discussion, Support and Issues

Need support with this project, have found an issue or want to chat with others about contributing to the project?
> Please check the project's issues page first for support & bugs!

Not found what you need here?

* If you have an issue, please create a GitHub issue here to report the situation, include as much detail as you can!
* _or,_ You can join my Discord server and talk to one of the support team (or me) in order to get help with this project and other projects on my GitHub. 

<a href="http://discord.benwhybrow.com/" target="_blank">
    <img src="https://img.shields.io/discord/455782308293771264?color=blueviolet&label=Discord" alt="Discord" height="25">
</a>
