/* 
* If you hit an error whilst debugging your config or code
* you might see the following error in the log
*
* "Another iteration is currently running! Exiting..."
* 
* even though your test 'iteration' has completed.
* Run this function to reset the LastRun so it will
* execute properly after all
*/

function reset() {
  PropertiesService.getUserProperties().deleteProperty('LastRun');
}
