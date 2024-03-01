# PostConvertPayloadToTransactionRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**Payload**](Payload.md) |  | 

## Example

```python
from openapi_client.models.post_convert_payload_to_transaction_request import PostConvertPayloadToTransactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostConvertPayloadToTransactionRequest from a JSON string
post_convert_payload_to_transaction_request_instance = PostConvertPayloadToTransactionRequest.from_json(json)
# print the JSON string representation of the object
print PostConvertPayloadToTransactionRequest.to_json()

# convert the object into a dict
post_convert_payload_to_transaction_request_dict = post_convert_payload_to_transaction_request_instance.to_dict()
# create an instance of PostConvertPayloadToTransactionRequest from a dict
post_convert_payload_to_transaction_request_form_dict = post_convert_payload_to_transaction_request.from_dict(post_convert_payload_to_transaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


