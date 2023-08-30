/*
*=========================================
*    PRIVATE LOCAL VARIABLE SETTINGS
*=========================================
*
* This is a variant of the original project that uses 
* the function configure_local_settings() below to 
* modify the default values set in the Code.gs script
* 
* It does this because we have inserted a call to the 
* function at the start of the main functions:
*  - install()
*  - startSync() 
* to call the function below
* 
* This works because the scope of all script files
* in Google Apps Script are the same as each other, 
* so the global variables declared in the Code.gs file
* are available to the function below, therefore this
* function may override the values set when the globals
* are declared
*
* You may override the value of ANY of the variables
* in the SETTINGS section of Code.gs, but remember 
* that they have already been declared so you must 
* NOT put   var   at the beginning of the line 
* when you set the value in this function
*
* We have included sourceCalendars as an example 
* variable, because everyone will need to modify that
*/

function configure_local_settings(){
  sourceCalendars = [                // The ics/ical urls that you want to get events from along with their target calendars (list a new row for each mapping of ICS url to Google Calendar)
                                     // For instance: ["https://p24-calendars.icloud.com/holidays/us_en.ics", "US Holidays"]
                                     // Or with colors following mapping https://developers.google.com/apps-script/reference/calendar/event-color,
                                     // for instance: ["https://p24-calendars.icloud.com/holidays/us_en.ics", "US Holidays", "11"]
    ["icsUrl1", "targetCalendar1"],
    ["icsUrl2", "targetCalendar2"],
    ["icsUrl3", "targetCalendar1"]

  ];

  // Add any variables from SETTINGS that you want to override
  // but DO NOT include the `var` keyword before them!  
}

