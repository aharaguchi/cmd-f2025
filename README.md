# cmd-f2025
## Concept 
[Write-up (google docs)](https://discord.com/channels/@me/1348033250752331916/1348033283803320376)
[Use Case Diagram](https://discord.com/channels/@me/1348033250752331916/1348049147177209940)

## Starting the backend
Note that you will need python installed to run this server.
```bash
cd backend
python3 manage.py runserver
```

## Making Twilio work
You need the environmental variables for twilio. Make a copy of backend/backend/.env.local, and rename it to ".env".
The twilio keys have been shared in our Discord and pinned! 
```