Backend REST API to that serves Models to AngularJS front-end UI. 

Currently, an authentication library (django-rest-auth) is used for login/registration/etc. 

Plan is to add more Django modules to handle status updates/reads/etc.

# INSTALLATION
cd backend/
pip install -r requirements.pip
python manage.py syncdb --noinput
python manage.py runserver



