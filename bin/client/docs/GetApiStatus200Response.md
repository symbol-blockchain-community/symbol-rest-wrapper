# GetApiStatus200Response


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**name** | **str** |  | 
**network_type** | [**NetworkType**](NetworkType.md) |  | 

## Example

```python
from openapi_client.models.get_api_status200_response import GetApiStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiStatus200Response from a JSON string
get_api_status200_response_instance = GetApiStatus200Response.from_json(json)
# print the JSON string representation of the object
print GetApiStatus200Response.to_json()

# convert the object into a dict
get_api_status200_response_dict = get_api_status200_response_instance.to_dict()
# create an instance of GetApiStatus200Response from a dict
get_api_status200_response_form_dict = get_api_status200_response.from_dict(get_api_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


