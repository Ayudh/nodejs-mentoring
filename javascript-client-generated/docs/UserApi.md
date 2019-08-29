# NodeJsMentoringSwagger.UserApi

All URIs are relative to _https://virtserver.swaggerhub.com/aaa879/NodeJS/1.0.0_

| Method                                  | HTTP request   | Description |
| --------------------------------------- | -------------- | ----------- |
| [**createUser**](UserApi.md#createUser) | **POST** /user | Create user |
| [**getUsers**](UserApi.md#getUsers)     | **GET** /user  | Get Users   |

<a name="createUser"></a>

# **createUser**

> createUser(body)

Create user

This can only be done by the logged in user.

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.UserApi();

var body = new NodeJsMentoringSwagger.User(); // User | Created user object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

| Name     | Type                | Description         | Notes |
| -------- | ------------------- | ------------------- | ----- |
| **body** | [**User**](User.md) | Created user object |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUsers"></a>

# **getUsers**

> getUsers()

Get Users

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getUsers(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
