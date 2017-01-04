# SiwiatOutAppJson.ChannelsApi

All URIs are relative to *http://siwiat.ondics.de/playground-server/index.php/json*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChannelsResponse**](ChannelsApi.md#getChannelsResponse) | **GET** /getchannels | Get channels


<a name="getChannelsResponse"></a>
# **getChannelsResponse**
> GetChannelsResponse getChannelsResponse()

Get channels

Get all available channels

### Example
```javascript
var SiwiatOutAppJson = require('siwiat_out_app___json');

var apiInstance = new SiwiatOutAppJson.ChannelsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelsResponse(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetChannelsResponse**](GetChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

