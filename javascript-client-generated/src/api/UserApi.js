/**
 * NodeJS Mentoring Swagger
 * NodeJS Mentoring Program API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ghari81189@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.NodeJsMentoringSwagger) {
      root.NodeJsMentoringSwagger = {};
    }
    root.NodeJsMentoringSwagger.UserApi = factory(
      root.NodeJsMentoringSwagger.ApiClient,
      root.NodeJsMentoringSwagger.User
    );
  }
})(this, function(ApiClient, User) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi.
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param {module:model/User} body Created user object
     * @param {module:api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createUser = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error(
          "Missing the required parameter 'body' when calling createUser"
        );
      }

      var pathParams = {};
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user',
        'POST',
        pathParams,
        queryParams,
        collectionQueryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      );
    };

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UserApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Users
     * @param {module:api/UserApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getUsers = function(callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user',
        'GET',
        pathParams,
        queryParams,
        collectionQueryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      );
    };
  };

  return exports;
});
