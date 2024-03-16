# Email Microservice

This repositore contains a microservice to allow you to send email to everybody you want!
## How to run this project

1. Clone repository

```
  git clone git@github.com:franad23/email-microservice.git
```

2. Install dependencies 

```
  npm install
```

3. Create your and account and follow all steps to get APIKEY in https://sendgrid.com that allow you to send email.


4. Create a .env file at the root directory, Here is an example, if you want change the names of theses you're free to do so, don't forget to change them in the code as well! 

```
  LOCAL_PORT=<HERE YOUR PORT>
  SENDGRID_API_KEY=<HERE YOUR SENDGRID APIKEY >
  EMAIL_SENDER=<HERE YOUR EMAIL WHICH YOU REGISTE AT SENDGRID>
```

5. Run project!
```
  npm run dev
```

6. Test Email

  To test sending an email, send a POST request to your localhost or deploy with the following body to: `http://localhost:XXXX/api`.
  ```json
    {
      "email": <EMAIL RECIPIENT>,
      "subject": <EMAIL SUBJECT>,  
      "text": <EMAIL TEXT>,
      "html": <EMAIL HTML>
    }
  ```
  ALL PROPERTIES ARE REQUIRED

If you'd like to contribute, fork this repository and submit a pull request. 

Thanks!

Made by [Franco Andrés Díaz](https://www.linkedin.com/in/franco-andres-diaz/)