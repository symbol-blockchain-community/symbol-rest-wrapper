# openapi_client.ConvertApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_convert_payload_to_transaction**](ConvertApi.md#post_convert_payload_to_transaction) | **POST** /convert/transaction/payload | transaction payload to json transaction object
[**post_convert_public_key_to_plain_address**](ConvertApi.md#post_convert_public_key_to_plain_address) | **POST** /convert/address/public-key | public-key to plain address
[**post_convert_unresolved_address_to_plain_address**](ConvertApi.md#post_convert_unresolved_address_to_plain_address) | **POST** /convert/address/unresolved-address | unresolved address to plain address


# **post_convert_payload_to_transaction**
> PostConvertPayloadToTransaction200Response post_convert_payload_to_transaction(post_convert_payload_to_transaction_request)

transaction payload to json transaction object

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.post_convert_payload_to_transaction200_response import PostConvertPayloadToTransaction200Response
from openapi_client.models.post_convert_payload_to_transaction_request import PostConvertPayloadToTransactionRequest
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
    api_instance = openapi_client.ConvertApi(api_client)
    post_convert_payload_to_transaction_request = openapi_client.PostConvertPayloadToTransactionRequest() # PostConvertPayloadToTransactionRequest | 

    try:
        # transaction payload to json transaction object
        api_response = api_instance.post_convert_payload_to_transaction(post_convert_payload_to_transaction_request)
        print("The response of ConvertApi->post_convert_payload_to_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConvertApi->post_convert_payload_to_transaction: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_convert_payload_to_transaction_request** | [**PostConvertPayloadToTransactionRequest**](PostConvertPayloadToTransactionRequest.md)|  | 

### Return type

[**PostConvertPayloadToTransaction200Response**](PostConvertPayloadToTransaction200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_convert_public_key_to_plain_address**
> PostConvertPublicKeyToPlainAddress200Response post_convert_public_key_to_plain_address(post_convert_public_key_to_plain_address_request)

public-key to plain address

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.post_convert_public_key_to_plain_address200_response import PostConvertPublicKeyToPlainAddress200Response
from openapi_client.models.post_convert_public_key_to_plain_address_request import PostConvertPublicKeyToPlainAddressRequest
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
    api_instance = openapi_client.ConvertApi(api_client)
    post_convert_public_key_to_plain_address_request = openapi_client.PostConvertPublicKeyToPlainAddressRequest() # PostConvertPublicKeyToPlainAddressRequest | 

    try:
        # public-key to plain address
        api_response = api_instance.post_convert_public_key_to_plain_address(post_convert_public_key_to_plain_address_request)
        print("The response of ConvertApi->post_convert_public_key_to_plain_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConvertApi->post_convert_public_key_to_plain_address: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_convert_public_key_to_plain_address_request** | [**PostConvertPublicKeyToPlainAddressRequest**](PostConvertPublicKeyToPlainAddressRequest.md)|  | 

### Return type

[**PostConvertPublicKeyToPlainAddress200Response**](PostConvertPublicKeyToPlainAddress200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_convert_unresolved_address_to_plain_address**
> PostConvertUnresolvedAddressToPlainAddress200Response post_convert_unresolved_address_to_plain_address(post_convert_unresolved_address_to_plain_address_request)

unresolved address to plain address

### Example

```python
import time
import os
import openapi_client
from openapi_client.models.post_convert_unresolved_address_to_plain_address200_response import PostConvertUnresolvedAddressToPlainAddress200Response
from openapi_client.models.post_convert_unresolved_address_to_plain_address_request import PostConvertUnresolvedAddressToPlainAddressRequest
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
    api_instance = openapi_client.ConvertApi(api_client)
    post_convert_unresolved_address_to_plain_address_request = openapi_client.PostConvertUnresolvedAddressToPlainAddressRequest() # PostConvertUnresolvedAddressToPlainAddressRequest | 

    try:
        # unresolved address to plain address
        api_response = api_instance.post_convert_unresolved_address_to_plain_address(post_convert_unresolved_address_to_plain_address_request)
        print("The response of ConvertApi->post_convert_unresolved_address_to_plain_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConvertApi->post_convert_unresolved_address_to_plain_address: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_convert_unresolved_address_to_plain_address_request** | [**PostConvertUnresolvedAddressToPlainAddressRequest**](PostConvertUnresolvedAddressToPlainAddressRequest.md)|  | 

### Return type

[**PostConvertUnresolvedAddressToPlainAddress200Response**](PostConvertUnresolvedAddressToPlainAddress200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

