/**
 * SIWIAT Out App - JSON
 * This is a description for the [Out App \"JSON\"](http://siwiat.com/app/view/?appname=json) for the SIWIAT App-Box.  This specification complies with the JSON App version 1.0.3 (Oct 2016)  [Learn more about SIWIAT](http://siwiat.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetChannelsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetChannelsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SiwiatOutAppJson) {
      root.SiwiatOutAppJson = {};
    }
    root.SiwiatOutAppJson.ChannelsApi = factory(root.SiwiatOutAppJson.ApiClient, root.SiwiatOutAppJson.GetChannelsResponse);
  }
}(this, function(ApiClient, GetChannelsResponse) {
  'use strict';

  /**
   * Channels service.
   * @module api/ChannelsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ChannelsApi. 
   * @alias module:api/ChannelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getChannelsResponse operation.
     * @callback module:api/ChannelsApi~getChannelsResponseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetChannelsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get channels
     * Get all available channels
     * @param {module:api/ChannelsApi~getChannelsResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetChannelsResponse}
     */
    this.getChannelsResponse = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetChannelsResponse;

      return this.apiClient.callApi(
        '/getchannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));