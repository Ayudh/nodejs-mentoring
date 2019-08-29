# NodeJsMentoringSwagger.ProductApi

All URIs are relative to _https://virtserver.swaggerhub.com/aaa879/NodeJS/1.0.0_

| Method                                           | HTTP request        | Description             |
| ------------------------------------------------ | ------------------- | ----------------------- |
| [**addProduct**](ProductApi.md#addProduct)       | **POST** /product   | Add a new city          |
| [**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /product | Delete specified city   |
| [**getProduct**](ProductApi.md#getProduct)       | **GET** /product    | Get Cities              |
| [**updateProduct**](ProductApi.md#updateProduct) | **PUT** /product    | Update an existing city |

<a name="addProduct"></a>

# **addProduct**

> addProduct(body)

Add a new city

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.ProductApi();

var body = new NodeJsMentoringSwagger.Product(); // Product | City object that needs to be added

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProduct(body, callback);
```

### Parameters

| Name     | Type                      | Description                        | Notes |
| -------- | ------------------------- | ---------------------------------- | ----- |
| **body** | [**Product**](Product.md) | City object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProduct"></a>

# **deleteProduct**

> deleteProduct(body)

Delete specified city

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.ProductApi();

var body = new NodeJsMentoringSwagger.Product(); // Product | City object that needs to be added

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(body, callback);
```

### Parameters

| Name     | Type                      | Description                        | Notes |
| -------- | ------------------------- | ---------------------------------- | ----- |
| **body** | [**Product**](Product.md) | City object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getProduct"></a>

# **getProduct**

> getProduct()

Get Cities

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.ProductApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProduct(callback);
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

<a name="updateProduct"></a>

# **updateProduct**

> updateProduct(body)

Update an existing city

### Example

```javascript
var NodeJsMentoringSwagger = require('node_js_mentoring_swagger');

var apiInstance = new NodeJsMentoringSwagger.ProductApi();

var body = new NodeJsMentoringSwagger.Product(); // Product | City object

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProduct(body, callback);
```

### Parameters

| Name     | Type                      | Description | Notes |
| -------- | ------------------------- | ----------- | ----- |
| **body** | [**Product**](Product.md) | City object |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
