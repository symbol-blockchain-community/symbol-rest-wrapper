# PostConvertPayloadToTransaction200Response


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Transaction**](Transaction.md) |  | 

## Example

```python
from openapi_client.models.post_convert_payload_to_transaction200_response import PostConvertPayloadToTransaction200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostConvertPayloadToTransaction200Response from a JSON string
post_convert_payload_to_transaction200_response_instance = PostConvertPayloadToTransaction200Response.from_json(json)
# print the JSON string representation of the object
print PostConvertPayloadToTransaction200Response.to_json()

# convert the object into a dict
post_convert_payload_to_transaction200_response_dict = post_convert_payload_to_transaction200_response_instance.to_dict()
# create an instance of PostConvertPayloadToTransaction200Response from a dict
post_convert_payload_to_transaction200_response_form_dict = post_convert_payload_to_transaction200_response.from_dict(post_convert_payload_to_transaction200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


