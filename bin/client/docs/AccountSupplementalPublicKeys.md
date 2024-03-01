# AccountSupplementalPublicKeys


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked** | [**AccountSupplementalPublicKeysLinked**](AccountSupplementalPublicKeysLinked.md) |  | [optional] 
**node** | [**AccountSupplementalPublicKeysLinked**](AccountSupplementalPublicKeysLinked.md) |  | [optional] 
**vrf** | [**AccountSupplementalPublicKeysLinked**](AccountSupplementalPublicKeysLinked.md) |  | [optional] 
**voting** | [**AccountSupplementalPublicKeysVoting**](AccountSupplementalPublicKeysVoting.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_supplemental_public_keys import AccountSupplementalPublicKeys

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSupplementalPublicKeys from a JSON string
account_supplemental_public_keys_instance = AccountSupplementalPublicKeys.from_json(json)
# print the JSON string representation of the object
print AccountSupplementalPublicKeys.to_json()

# convert the object into a dict
account_supplemental_public_keys_dict = account_supplemental_public_keys_instance.to_dict()
# create an instance of AccountSupplementalPublicKeys from a dict
account_supplemental_public_keys_form_dict = account_supplemental_public_keys.from_dict(account_supplemental_public_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


