# AccountSupplementalPublicKeysVoting


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_keys** | [**List[AccountSupplementalPublicKeysVotingPublicKeysInner]**](AccountSupplementalPublicKeysVotingPublicKeysInner.md) |  | 

## Example

```python
from openapi_client.models.account_supplemental_public_keys_voting import AccountSupplementalPublicKeysVoting

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSupplementalPublicKeysVoting from a JSON string
account_supplemental_public_keys_voting_instance = AccountSupplementalPublicKeysVoting.from_json(json)
# print the JSON string representation of the object
print AccountSupplementalPublicKeysVoting.to_json()

# convert the object into a dict
account_supplemental_public_keys_voting_dict = account_supplemental_public_keys_voting_instance.to_dict()
# create an instance of AccountSupplementalPublicKeysVoting from a dict
account_supplemental_public_keys_voting_form_dict = account_supplemental_public_keys_voting.from_dict(account_supplemental_public_keys_voting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


