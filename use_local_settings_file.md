# Use local settings file

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

