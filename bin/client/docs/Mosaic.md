# Mosaic


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**amount** | **float** |  | 
**divisibility** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.mosaic import Mosaic

# TODO update the JSON string below
json = "{}"
# create an instance of Mosaic from a JSON string
mosaic_instance = Mosaic.from_json(json)
# print the JSON string representation of the object
print Mosaic.to_json()

# convert the object into a dict
mosaic_dict = mosaic_instance.to_dict()
# create an instance of Mosaic from a dict
mosaic_form_dict = mosaic.from_dict(mosaic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


