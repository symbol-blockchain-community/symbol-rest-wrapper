# Account

mosaic 数量等を変換したアカウントオブジェクト

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **float** |  | 
**address** | **str** |  | 
**address_height** | **float** |  | 
**public_key** | **str** |  | 
**public_key_height** | **float** |  | 
**account_type** | **float** |  | 
**supplemental_public_keys** | [**AccountSupplementalPublicKeys**](AccountSupplementalPublicKeys.md) |  | 
**activity_buckets** | [**List[AccountActivityBucketsInner]**](AccountActivityBucketsInner.md) |  | 
**mosaics** | [**List[Mosaic]**](Mosaic.md) |  | 
**importance** | **float** |  | 
**importance_height** | **float** |  | 

## Example

```python
from openapi_client.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print Account.to_json()

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_form_dict = account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


