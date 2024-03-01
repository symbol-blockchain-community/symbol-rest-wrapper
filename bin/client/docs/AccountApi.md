# openapi_client.AccountApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_account**](AccountApi.md#get_account) | **GET** /accounts/{accountId} | get account info
[**post_account**](AccountApi.md#post_account) | **POST** /accounts | create a new private key


# **get_account**
> GetAccount200Response get_account(account_id)

get account info

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.get_account200_response import GetAccount200Response
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
    api_instance = openapi_client.AccountApi(api_client)
    account_id = 'account_id_example' # str | 

    try:
        # get account info
        api_response = api_instance.get_account(account_id)
        print("The response of AccountApi->get_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 

### Return type

[**GetAccount200Response**](GetAccount200Response.md)

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

# **post_account**
> PostAccount200Response post_account()

create a new private key

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.post_account200_response import PostAccount200Response
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
    api_instance = openapi_client.AccountApi(api_client)

    try:
        # create a new private key
        api_response = api_instance.post_account()
        print("The response of AccountApi->post_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->post_account: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**PostAccount200Response**](PostAccount200Response.md)

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

