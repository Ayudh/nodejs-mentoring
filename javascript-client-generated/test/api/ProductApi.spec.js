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
    instance = new NodeJsMentoringSwagger.ProductApi();
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

  describe('ProductApi', function() {
    describe('addProduct', function() {
      it('should call addProduct successfully', function(done) {
        //uncomment below and update the code to test addProduct
        //instance.addProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProduct', function() {
      it('should call deleteProduct successfully', function(done) {
        //uncomment below and update the code to test deleteProduct
        //instance.deleteProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProduct', function() {
      it('should call getProduct successfully', function(done) {
        //uncomment below and update the code to test getProduct
        //instance.getProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProduct', function() {
      it('should call updateProduct successfully', function(done) {
        //uncomment below and update the code to test updateProduct
        //instance.updateProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));