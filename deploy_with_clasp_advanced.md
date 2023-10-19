# DO NOT USE YET!

* clasp login
	* we assume you use multiple accounts, if you need this tool
	* so you might prefer to use separate credentials and store them locally:

```sh
clasp create

clasp_config_auth=`pwd`/.clasp_auth
export clasp_config_auth
clasp login --creds .creds.json
```

This is failing unless there is a project file in the folder already, 
and you can only ` clasp create ` a project file when you are already logged on!


See about putting auth file locally with -A https://github.com/google/clasp/blob/master/docs/config-files.md


## ~~not ignored~~

* ~~putting the localsettings in .gitignore does ignore it if its already there~~
* ~~I am trying ` git update-index --assume-unchanged _LocalSettings.gs ` to see if that is 'sticky' after more changes~~
* ~~otherwise it might have to be ` git rm --cached _LocalSettings.gs ` or maybe even without the --cached~~
* 


