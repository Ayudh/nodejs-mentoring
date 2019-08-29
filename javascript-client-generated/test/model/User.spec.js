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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeJsMentoringSwagger);
  }
})(this, function(expect, NodeJsMentoringSwagger) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeJsMentoringSwagger.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  };

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be.a(NodeJsMentoringSwagger.User);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

    it('should have the property userStatus (base name: "userStatus")', function() {
      // uncomment below and update the code to test the property userStatus
      //var instance = new NodeJsMentoringSwagger.User();
      //expect(instance).to.be();
    });

  });

}));
