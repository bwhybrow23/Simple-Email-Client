# Simple Email Client &middot; [![GitHub license](https://img.shields.io/badge/license-GPL--v3-blue)](https://github.com/bwhybrow23/Simple-Email-Client/blob/master/LICENSE)
A simple email client that works with most SMTP email providers like Gmail or Outlook. 
Check below for information on how to set up the client. 
# Config
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
# SMTP Information
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
# Support
If you need support, I have a public Discord and a Twitter you can contact me on. 
- Discord: https://discord.benwhybrow.com
- Twitter: https://twitter.com/stentorianyt
