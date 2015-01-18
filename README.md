# hauxi.is

Personal web front for www.hauxi.is. 

# Getting up and running
Start by installing dependencies:
```
npm install
```

Configure settings:
* local/connections.js, for configuring database access for the ORM.
* local/mailgun.js, for configuring api access to Mailgun email services.


Lift the express server:
```
sails lift
```