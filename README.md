# [Django Volt PRO](https://appseed.us/product/volt-dashboard-pro/django/)

**Django** starter styled with **[Volt Dashboard PRO](https://appseed.us/product/volt-dashboard-pro/django/)**, a premium `Bootstrap 5` KIT from `Themesberg`.
The product is designed to deliver the best possible user experience with highly customizable feature-rich pages. 

> **NOTE**: This product `requires a License` in order to access the theme. During the purchase, a `GitHub Access TOKEN` is provided. 

- 🛒 [Django Volt PRO](https://appseed.us/product/volt-dashboard-pro/django/) - product page
- 👉 [Django Volt PRO](https://django-volt-pro.appseed-srv1.com/) - LIVE deployment
- 🚀 [Support](https://appseed.us/support/) via `Email` & `Discord`

<br /> 

## Features: 

- ✅ `Up-to-date Dependencies`
- ✅ `Design`: [Django Theme Volt](https://github.com/app-generator/django-admin-volt-pro) - `PRO Version`
- ✅ `Sections` covered by the design:
  - ✅ **Admin section** (reserved for superusers)
  - ✅ **Authentication**: `Django.contrib.AUTH`, Registration
  - ✅ **All Pages** available in for ordinary users 
- ✅ `Docker`
- 🚀 `Deployment` 
  - `CI/CD` flow via `Render`

<br />

![Volt Bootstrap 5 + Plotly.](https://user-images.githubusercontent.com/51070104/168483330-bbb694d5-6efb-4185-8e51-3dab5e8fa5eb.jpg) 

<br />

## Manual Build 

> 👉 Download the code  

```bash
$ git clone https://github.com/app-generator/django-volt-dashboard-pro.git
$ cd django-volt-dashboard-pro
```

<br />

> Export `GITHUB_TOKEN` in the environment. The value is provided by AppSeed during purchase. 

This is required because the project has a private REPO dependency: `github.com/app-generator/priv-django-admin-volt-pro`

```bash
$ export GITHUB_TOKEN='TOKEN_HERE'  # for Linux, Mac
$ set GITHUB_TOKEN='TOKEN_HERE'     # Windows CMD
$ $env:GITHUB_TOKEN = 'TOKEN_HERE'  # Windows powerShell 
```

<br />

> 👉 Install modules via `VENV`.


```bash
$ virtualenv env
$ source env/bin/activate
$ pip install -r requirements.txt
```

<br />

> 👉 Edit the `.env` using the template `.env.sample`. 

```env

# True for development, False for production
DEBUG=True

```

<br />

> 👉 Set Up Database

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

<br />

> 👉 Create the Superuser

```bash
$ python manage.py createsuperuser
```

<br />

> 👉 Start the app

```bash
$ python manage.py runserver
```

At this point, the app runs at `http://127.0.0.1:8000/`. 

<br />

---
[Django Volt PRO](https://appseed.us/product/volt-dashboard-pro/django/) - **Django** starter provided by **[AppSeed](https://appseed.us/)**
