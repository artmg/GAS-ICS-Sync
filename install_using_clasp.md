# Install using Clasp

Clasp is the [command line utility for Google Apps Script](https://developers.google.com/apps-script/guides/clasp). See this [quick guide to installing Clasp](https://github.com/artmg/cooking-with-GAS#installing-clasp).

* cd into your GAS-ICS-Sync repo folder

```sh
clasp login
```

* use the url to authorise Clasp to access the main account into which Calendar you want to sync others
* if you are happy to grant this Google utility the permissions displayed, then click **Allow**
	* this will create save the OAuth2.0 authentication token into the Clasp global settings: ` ~/.clasprc.json `
* If you have not already, you may need to toggle on the Apps Script API, so that Clasp can interact with your cloud-based scripts: https://script.google.com/home/usersettings

```sh
clasp create --type standalone --title "GAS-ICS-Sync" --rootDir .
```

* This will 
	* create an apps script project in https://script.google.com/home/my
		* this will be unbound (standalone), not linked to any Drive item like a sheet or doc
	* create the local project file `.clasp.json` in this folder with the ScriptId
		* that is the same id as in the url to the script project you can see in above link
* Ensure that the ` _LocalSettings.gs ` script contains any private variable settings you need in your local copy for it to work
	* these settings have been excluded using the ` .gitignore ` so they will not be pushed up to any remote git repository, and thus remain private
	* in the case where no ` _LocalSettings.gs ` file exists, create it with this template below
	* Add any variables from SETTINGS that you want to override
		* but DO NOT include the `var` keyword before them!  


```js
function configure_local_settings(){
  sourceCalendars = [
    ["icsUrl1", "targetCalendar1"],
    ["icsUrl2", "targetCalendar2"],
    ["icsUrl3", "targetCalendar1"]
  ];
}
```

* If `_LocalSettings.gs` is not properly ignored then prevent it from being pushed back up to remote repos using:

```sh
git update-index --assume-unchanged _LocalSettings.gs
```


* Once your configuration is in with the scripts, you are ready to push them all up into your remote apps script project

```sh
clasp push --force
```

* This will 
	* force the overwrite of the remote script's manifest by the Services dependencies defined appsscript.json
	* Push the .gs files in as script items
		* to see how to ignore certain files, check out https://github.com/google/clasp#push
* 

# Execute the project

## Manually is simpler

* Use your browser to open the script from [Apps Script / My Projects](https://script.google.com/home/my)
* Open `Code.gs` in the editor
* on the command ribbon at the top, drop down where it says `install` to make it say `startScript`
	* we're going to do a test run first
* click **Run** 
* When prompted for Authorisation Required click **Review permissions**
* Choose your account to continue to `GAS-ICS-Sync`:
	* pick which Google account you will use to give authorisation
* Google will warn you that you have not verified this app
	* click **Advanced**
* Continue only if you trust yourself (and, of course, the team who developed these scripts)
	* click on `Go to GAS-ICS-Sync (unsafe)`
* GAS-ICS-Sync wants to access your Google Account
	* if you are happy to cede the rights displayed, then click **Allow**

If this all looks like it runs fine, then **Run** the `install` function to set it up permanently

## Push using clasp run

Because you will be executing Apps Script code via an API, this needs a whole extra level of setup and authorisation. It's not hard, but it is quite a few more steps first time around. 

* For now use the instructions here:
	* https://github.com/google/clasp/blob/master/docs/run.md

As it uses Google Gloud to host a project, it is unclear whether the work that will be done will never run into a 'free-of-charge usage limit'.

