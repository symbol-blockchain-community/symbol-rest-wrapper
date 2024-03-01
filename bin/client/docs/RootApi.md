# openapi_client.RootApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api_status**](RootApi.md#get_api_status) | **GET** / | get api status


# **get_api_status**
> GetApiStatus200Response get_api_status()

get api status

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.get_api_status200_response import GetApiStatus200Response
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
    api_instance = openapi_client.RootApi(api_client)

    try:
        # get api status
        api_response = api_instance.get_api_status()
        print("The response of RootApi->get_api_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RootApi->get_api_status: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**GetApiStatus200Response**](GetApiStatus200Response.md)

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

