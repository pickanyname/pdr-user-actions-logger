# PDR User Actions Logger

A simple service designed to log user and/or system generated events. The events of interest are:

* User signin
* User signout
* Incorrect password
* Session timeout
* Patient searches
* Patient viewing
* Patient creation
* Period closures
* Hard closures
* Inventory generation

## How To Log An Event

The service logs events by accepting HTTP POST requests. Each HTTP POST request must carry a JSON payload (body). This JSON payload contains key identifiers associated with corresponding values.

The API offers ten end-points:

1. /signin
1. /signout
1. /incorrectPassword
1. /sessionTimeout
1. /patientSearch
1. /patientViewed
1. /patientCreated
1. /periodClose
1. /hardClose
1. /invoiceGenerated

## How To Prepare JSON Payload (Request Body)

Each HTTP POST request to any of the above end-points must contain the JSON payload (request body). The payload must consist of four key identifiers:

1. userId
1. userName
1. userIp
1. parameters

Here is a fictitious example of a well formed JSON payload:

{"userId": "22345TTyuWW", "userName": "MrBookman", "userIp": "10.22.105.11", "parameters": "searchName=Janis Joplin"}