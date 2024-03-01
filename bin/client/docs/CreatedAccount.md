# CreatedAccount

when create a acount object

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | 
**public_key** | **str** |  | 
**private_key** | **str** |  | 

## Example

```python
from openapi_client.models.created_account import CreatedAccount

# TODO update the JSON string below
json = "{}"
# create an instance of CreatedAccount from a JSON string
created_account_instance = CreatedAccount.from_json(json)
# print the JSON string representation of the object
print CreatedAccount.to_json()

# convert the object into a dict
created_account_dict = created_account_instance.to_dict()
# create an instance of CreatedAccount from a dict
created_account_form_dict = created_account.from_dict(created_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


