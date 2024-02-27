# Change Log

## [1.0.20] 2024-02-27
### Changes

- Update DOCS (readme)
  - Added `Celery` Section 

## [1.0.19] 2024-02-08
### Changes

- Update README (docs)
- Update Docker
- New Apps:
  - charts
  - api
  - celery
  - file manager
  - dark mode 
  - i18n (internationalization) 

## [1.0.18] 2023-11-01
### Changes

- Added `.env` 
- Set `DEBUG=True` as default

## [1.0.17] 2023-08-13
### Changes

- Fix #7, collectstatic bumps errors
- Remove `ASSETS_ROOT` variable
- Added `Render` Support (CI/CD)

## [1.0.16] 2023-03-23 
### Changes

- Fix SCSS compilation

## [1.0.15] 2023-03-23 
### Changes

- Added Migration Folders
- Update DOCS

## [1.0.14] 2023-02-08 
### Changes

- Dependencies, remove duplicates
- `Tests`:
  - `Windows 11` -> ok
  - `Ubuntu 18 LTS` -> ok

## [1.0.13] 2023-02-08 
### Changes

- Added Missing Modules: 
  - `django-phone_field`
  - `django-import_export`
  - `django-pandas`
  - `django-matplotlib`

## [1.0.12] 2022-08-21 
### Fixes & Improvements

- Login possible with USER or EMAIL
- Warn user on self-deletion 
  - if the account has linked tasks or transactions
- Minor JS warnings & Fixes
- Code CleanUP (minor) 

## [1.0.11] 2022-08-13 
### Fixes

- Update for Production Deploy
  - Use `ASSETS_ROOT` instead of `{% 'static' tag %}`

## [1.0.10] 2022-08-13 
### Improvements

- Authentication:
  - Social Login Via Github & Twitter
  - Self Deletion, Update Password
  - Tasks Module
  - Transactions Module
- Improved Docker Scripts  

## [1.0.9] 2022-06-17 
### New features: 

- Extended User Profile
- Users Management for `Superusers`
- Tasks: `add`, `remove`, `assign`
  - filtered view per user
  - full management for `Superusers` 
- Transactions: `add`, `remove`, `assign`
  - filtered view per user
  - full management for `Superusers` 

## [1.0.8] 2022-05-15 
### Custom Code

- Integrate `PlotLy`
  - New app `charts`
  - Hello World: http://localhost:8000/charts/index
  - Plotly (no Volt Integration): http://localhost:8000/charts/index2
  - Plotly + Volt: http://localhost:8000/charts/index3 

## [1.0.7] 2022-02-17 
### Fixes

- Patch SCSS Compilation for:
  - Nodejs `12.x`, `14.x`
- Update CSS Assets:
  - Compiled with `Node v14.15.0`, `Gulp CLI version: 2.3.0`   

## [1.0.6] 2021-09-15 
### Improvements

- Bump Django Codebase to [v2.0.4](https://github.com/app-generator/boilerplate-code-django-dashboard/releases)
  - Codebase update
    - `assets` & `templates` moved to `apps` folder
    - `apps/base` renamed to `apps/home`

## [1.0.5] 2021-09-07
### Improvements & Fixes

- Bump Django Codebase to [v2.0.2](https://github.com/app-generator/boilerplate-code-django-dashboard/releases)
  - Dependencies update (all packages)
    - Use Django==3.2.6 (latest stable version)
  - Better Code formatting
  - Improved Files organization
  - Optimize imports
  - Docker Scripts Update 
- Fixes: 
  - Patch 500 Error when authenticated users access `admin` path (no slash at the end)
  - Patch [#16](https://github.com/app-generator/boilerplate-code-django-dashboard/issues/16): Minor issue in Docker 

## [1.0.4] 2021-06-30

- Update UI - Volt PRO v1.4.1
- Added scripts to recompile the SCSS files
    - `core/static/assets/` - gulpfile.js
    - `core/static/assets/` - package.json

## [1.0.3] 2021-06-15

- Correct 404 Links - UI Docs 

## [1.0.2] 2021-04-25
### Improvements

- Bump UI: Volt PRO v1.3.1
- UI: [Jinja Volt PRO](https://github.com/app-generator/jinja-template-volt-pro/releases) v1.0.3

## [1.0.1] 2021-01-20

- UI: [Jinja Volt PRO](https://github.com/app-generator/jinja-template-volt-pro/releases) v1.0.2
- Volt PRO v1.2.0
- Codebase - [Django Dashboard](https://github.com/app-generator/boilerplate-code-django-dashboard/releases) v1.0.4

## [1.0.0] 2020-02-07
### Initial Release
