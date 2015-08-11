Backend REST API to that serves Models to AngularJS front-end UI. 

Currently, an authentication library (django-rest-auth) is used for login/registration/etc. 

Plan is to add more Django modules to handle status updates/reads/etc.

# Installation
cd backend/ <br />
pip install -r requirements.pip <br />
python manage.py syncdb --noinput <br />
python manage.py runserver <br />



