/**
* @api {get} /api/persons Retrieve All Persons Data
* @apiVersion 0.1.0
* @apiName getPersons
* @apiGroup Persons
* @apiPermission private
* @apiExample
* http://yourdomain.com/api/persons
* @apiParam {string} api subfolder name inside controllers folder
* @apiParam {string} persons route name to get all persons data
* @apiSuccess {string} success consist true or false
* @apiSuccess {object} data the response data object
* @apiSuccess {number} data.user_id auto increment value
* @apiSuccess {string} data.status describe status of person ACTIVE/INACTIVE
* @apiSuccess {string} data.position describe person position
* @apiSuccess {string} message description of response 
* @apiSuccessExample {json} Success Example
* HTTP/1.1 200 OK
* "success": true,
* "data": [
*        {
*            "user_id": 1,
*            "status": "INACTIVE",
*            "position": "TOP BOD"
*        },
*        {
*            "user_id": 2,
*            "status": "ACTIVE",
*            "position": "HR Manager"
*        },
*        {
*            "user_id": 3,
*            "status": "ACTIVE",
*            "position": "IT Manager"
*        },
*        {
*            "user_id": 4,
*            "status": "ACTIVE",
*            "position": "IT Staff"
*        },
*        {
*            "user_id": 5,
*            "status": "ACTIVE",
*            "position": "Accounting Staff"
*        },
*        {
*            "user_id": 7,
*            "status": "ACTIVE",
*            "position": "Finance Staff"
*        }
*    ],
* "message": "Persons retrieved successfully."
* @apiSampleRequest off
*/

/**
* @api {get} /api/persons/{id} Get Single Person Data
* @apiVersion 0.1.0
* @apiName getSinglePerson
* @apiGroup Persons
* @apiPermission private
* @apiExample
* http://yourdomain.com/api/persons/1
* @apiParam {string} api subfolder name inside controllers folder
* @apiParam {string} persons route name to get all persons data
* @apiParam {number} id value of user_id column at persons table
* @apiSuccess {string} success consist true or false
* @apiSuccess {object} data the response data object
* @apiSuccess {number} data.user_id auto increment value
* @apiSuccess {string} data.status describe status of person ACTIVE/INACTIVE
* @apiSuccess {string} data.position describe person position
* @apiSuccess {string} message description of response 
* @apiSuccessExample {json} Success Example
* HTTP/1.1 200 OK
*  "success": true,
*  "data": {
*      "user_id": 1,
*      "status": "ACTIVE",
*      "position": "BOD"
*   },
*  "message": "Person retrieved successfully."
* @apiError Unauthorized only authenticated users can access the data.
* @apiError PersonNotFound the <code>user_id</code> of the user was not found
* @apiErrorExample {json} Error Example
* HTTP/1.1 404 Not Found
* "success": false,
* "message": "Person not found."
* @apiSampleRequest off
*/

/**
* @api {post} /api/persons Insert New Person Data
* @apiVersion 0.1.0
* @apiName insertPerson
* @apiGroup Persons
* @apiPermission private
* @apiExample
* http://yourdomain.com/api/persons
* @apiParam {string} api subfolder name inside controllers folder
* @apiParam {string} persons route name to get all persons data
* @apiSuccess {string} success consist true or false
* @apiSuccess {object} data the response data object
* @apiSuccess {number} data.user_id auto increment value
* @apiSuccess {string} data.status describe inserted status of person
* @apiSuccess {string} data.position describe inserted person position
* @apiSuccess {string} message description of response 
* @apiSuccessExample {json} Success Example
* HTTP/1.1 200 OK
* "success": true,
* "data": {
*     "user_id": 7,
*     "status": "ACTIVE",
*     "position": "Finance Staff"
* },
* "message": "Person created successfully."
* @apiSampleRequest http://yourdomain.com/api/persons
*/

/**
* @api {put} /api/persons/{id} Update Person Data
* @apiVersion 0.1.0
* @apiName updatePerson
* @apiGroup Persons
* @apiPermission private
* @apiExample
* http://yourdomain.com/api/persons/1
* @apiParam {string} api subfolder name inside controllers folder
* @apiParam {string} persons route name to get all persons data
* @apiParam {number} id value of user_id column at persons table
* @apiSuccess {string} success consist true or false
* @apiSuccess {object} data the response data object
* @apiSuccess {number} data.user_id auto increment value
* @apiSuccess {string} data.status describe inserted status of person
* @apiSuccess {string} data.position describe inserted person position
* @apiSuccess {string} message description of response 
* @apiSuccessExample {json} Success Example
* HTTP/1.1 200 OK
* "success": true,
* "data": {
*     "user_id": 7,
*     "status": "ACTIVE",
*     "position": "Finance Staff"
* },
* "message": "Person updated successfully."
* @apiSampleRequest http://yourdomain.com/api/persons/1
*/

/**
* @api {delete} /api/persons/{id} Delete Person Data
* @apiVersion 0.1.0
* @apiName deletePerson
* @apiGroup Persons
* @apiPermission private
* @apiExample
* http://yourdomain.com/api/persons/1
* @apiParam {string} api subfolder name inside controllers folder
* @apiParam {string} persons route name to get all persons data
* @apiParam {number} id value of user_id column at persons table
* @apiSuccess {string} success consist true or false
* @apiSuccess {object} data always null
* @apiSuccess {string} message description of response 
* @apiSuccessExample {json} Success Example
* HTTP/1.1 200 OK
* "success": true,
* "data": [],
* "message": "Person deleted successfully."
* @apiSampleRequest http://yourdomain.com/api/persons/1
*/