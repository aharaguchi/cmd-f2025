# cmd-f2025
## This repo is being locked to preserve the state it was in at the end of cmd-f 2025. I'll fork this repo for any work done after this.

## Concept 
[Write-up (google docs)](https://discord.com/channels/@me/1348033250752331916/1348033283803320376)
[Use Case Diagram](https://discord.com/channels/@me/1348033250752331916/1348049147177209940)

## Starting the backend
Note that you will need python installed to run this server.
```bash
pip3 install twilio django-apscheduler django-environ djangorestframework djangorestframework_simplejwt "pymongo[srv]"==3.12
pip3 install "pymongo[srv]"==3.12
cd backend
python3 manage.py runserver
```

## Making Twilio work
You need the environmental variables for twilio. Make a copy of backend/backend/.env.local, and rename it to ".env".
The twilio keys have been shared in our Discord and pinned! 
```
