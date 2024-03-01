# PostAccountRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_type** | [**NetworkType**](NetworkType.md) |  | 

## Example

```python
from openapi_client.models.post_account_request import PostAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostAccountRequest from a JSON string
post_account_request_instance = PostAccountRequest.from_json(json)
# print the JSON string representation of the object
print PostAccountRequest.to_json()

# convert the object into a dict
post_account_request_dict = post_account_request_instance.to_dict()
# create an instance of PostAccountRequest from a dict
post_account_request_form_dict = post_account_request.from_dict(post_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


