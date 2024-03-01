# AccountActivityBucketsInner


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_height** | **str** |  | 
**total_fees_paid** | **str** |  | 
**beneficiary_count** | **float** |  | 
**raw_score** | **str** |  | 

## Example

```python
from openapi_client.models.account_activity_buckets_inner import AccountActivityBucketsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccountActivityBucketsInner from a JSON string
account_activity_buckets_inner_instance = AccountActivityBucketsInner.from_json(json)
# print the JSON string representation of the object
print AccountActivityBucketsInner.to_json()

# convert the object into a dict
account_activity_buckets_inner_dict = account_activity_buckets_inner_instance.to_dict()
# create an instance of AccountActivityBucketsInner from a dict
account_activity_buckets_inner_form_dict = account_activity_buckets_inner.from_dict(account_activity_buckets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


