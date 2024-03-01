# openapi_client.NodeApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_nodes**](NodeApi.md#get_nodes) | **GET** /nodes | get living node


# **get_nodes**
> GetNodes200Response get_nodes(network_type=network_type)

get living node

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.get_nodes200_response import GetNodes200Response
from openapi_client.models.network_type import NetworkType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NodeApi(api_client)
    network_type = openapi_client.NetworkType() # NetworkType | default value is mainnet (optional)

    try:
        # get living node
        api_response = api_instance.get_nodes(network_type=network_type)
        print("The response of NodeApi->get_nodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeApi->get_nodes: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_type** | [**NetworkType**](.md)| default value is mainnet | [optional] 

### Return type

[**GetNodes200Response**](GetNodes200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

