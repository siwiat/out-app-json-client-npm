# SiwiatOutAppJson.ValuesApi

All URIs are relative to *http://siwiat.ondics.de/playground-server/index.php/json*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getValuesResponse**](ValuesApi.md#getValuesResponse) | **GET** /getvalues | Get channel values


<a name="getValuesResponse"></a>
# **getValuesResponse**
> GetValuesResponse getValuesResponse(valueids)

Get channel values

Get channel values by the {valueid}

### Example
```javascript
var SiwiatOutAppJson = require('siwiat_out_app___json');

var apiInstance = new SiwiatOutAppJson.ValuesApi();

var valueids = "valueids_example"; // String | The value id of a channel


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getValuesResponse(valueids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **valueids** | **String**| The value id of a channel | 

### Return type

[**GetValuesResponse**](GetValuesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

