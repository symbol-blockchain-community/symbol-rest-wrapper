# openapi_client.QrcodeApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_qr_code_for_address**](QrcodeApi.md#get_qr_code_for_address) | **GET** /qrcode/address/{address} | Get QR Code for Address


# **get_qr_code_for_address**
> bytearray get_qr_code_for_address(address, name=name)

Get QR Code for Address

### Example

```python
import time
import os
import openapi_client
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
    api_instance = openapi_client.QrcodeApi(api_client)
    address = 'address_example' # str | 
    name = 'name_example' # str |  (optional)

    try:
        # Get QR Code for Address
        api_response = api_instance.get_qr_code_for_address(address, name=name)
        print("The response of QrcodeApi->get_qr_code_for_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QrcodeApi->get_qr_code_for_address: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**|  | 
 **name** | **str**|  | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

