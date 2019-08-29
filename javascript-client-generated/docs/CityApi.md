# NodeJsMentoringSwagger.CityApi

All URIs are relative to _https://virtserver.swaggerhub.com/aaa879/NodeJS/1.0.0_

| Method                                        | HTTP request         | Description             |
| --------------------------------------------- | -------------------- | ----------------------- |
| [**addCity**](CityApi.md#addCity)             | **POST** /city       | Add a new city          |
| [**deleteCity**](CityApi.md#deleteCity)       | **DELETE** /city     | Delete specified city   |
| [**getCity**](CityApi.md#getCity)             | **GET** /city        | Get Cities              |
| [**getRandomCity**](CityApi.md#getRandomCity) | **GET** /city/random | Get Random City         |
| [**updateCity**](CityApi.md#updateCity)       | **PUT** /city        | Update an existing city |

<a name="addCity"></a>

# **addCity**

> addCity(body)

Add a new city

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.CityApi();

var body = new NodeJsMentoringSwagger.City(); // City | City object that needs to be added

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCity(body, callback);
```

### Parameters

| Name     | Type                | Description                        | Notes |
| -------- | ------------------- | ---------------------------------- | ----- |
| **body** | [**City**](City.md) | City object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteCity"></a>

# **deleteCity**

> deleteCity(body)

Delete specified city

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.CityApi();

var body = new NodeJsMentoringSwagger.City(); // City | City object that needs to be added

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCity(body, callback);
```

### Parameters

| Name     | Type                | Description                        | Notes |
| -------- | ------------------- | ---------------------------------- | ----- |
| **body** | [**City**](City.md) | City object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getCity"></a>

# **getCity**

> getCity()

Get Cities

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.CityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCity(callback);
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

<a name="getRandomCity"></a>

# **getRandomCity**

> getRandomCity()

Get Random City

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.CityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRandomCity(callback);
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

<a name="updateCity"></a>

# **updateCity**

> updateCity(body)

Update an existing city

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.CityApi();

var body = new NodeJsMentoringSwagger.City(); // City | City object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCity(body, callback);
```

### Parameters

| Name     | Type                | Description | Notes |
| -------- | ------------------- | ----------- | ----- |
| **body** | [**City**](City.md) | City object |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
