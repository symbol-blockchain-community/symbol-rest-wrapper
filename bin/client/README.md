# openapi-client
API server that makes development more convenient

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.1
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    account_id = 'account_id_example' # str | 

    try:
        # get account info
        api_response = api_instance.get_account(account_id)
        print("The response of AccountApi->get_account:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AccountApi->get_account: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**get_account**](docs/AccountApi.md#get_account) | **GET** /accounts/{accountId} | get account info
*AccountApi* | [**post_account**](docs/AccountApi.md#post_account) | **POST** /accounts | create a new private key
*ConvertApi* | [**post_convert_payload_to_transaction**](docs/ConvertApi.md#post_convert_payload_to_transaction) | **POST** /convert/transaction/payload | transaction payload to json transaction object
*ConvertApi* | [**post_convert_public_key_to_plain_address**](docs/ConvertApi.md#post_convert_public_key_to_plain_address) | **POST** /convert/address/public-key | public-key to plain address
*ConvertApi* | [**post_convert_unresolved_address_to_plain_address**](docs/ConvertApi.md#post_convert_unresolved_address_to_plain_address) | **POST** /convert/address/unresolved-address | unresolved address to plain address
*NodeApi* | [**get_nodes**](docs/NodeApi.md#get_nodes) | **GET** /nodes | get living node
*QrcodeApi* | [**get_qr_code_for_address**](docs/QrcodeApi.md#get_qr_code_for_address) | **GET** /qrcode/address/{address} | Get QR Code for Address
*RootApi* | [**get_api_status**](docs/RootApi.md#get_api_status) | **GET** / | get api status


## Documentation For Models

 - [Account](docs/Account.md)
 - [AccountActivityBucketsInner](docs/AccountActivityBucketsInner.md)
 - [AccountSupplementalPublicKeys](docs/AccountSupplementalPublicKeys.md)
 - [AccountSupplementalPublicKeysLinked](docs/AccountSupplementalPublicKeysLinked.md)
 - [AccountSupplementalPublicKeysVoting](docs/AccountSupplementalPublicKeysVoting.md)
 - [AccountSupplementalPublicKeysVotingPublicKeysInner](docs/AccountSupplementalPublicKeysVotingPublicKeysInner.md)
 - [Address](docs/Address.md)
 - [CreatedAccount](docs/CreatedAccount.md)
 - [GetAccount200Response](docs/GetAccount200Response.md)
 - [GetApiStatus200Response](docs/GetApiStatus200Response.md)
 - [GetNodes200Response](docs/GetNodes200Response.md)
 - [Mosaic](docs/Mosaic.md)
 - [NetworkType](docs/NetworkType.md)
 - [Node](docs/Node.md)
 - [Payload](docs/Payload.md)
 - [PostAccount200Response](docs/PostAccount200Response.md)
 - [PostConvertPayloadToTransaction200Response](docs/PostConvertPayloadToTransaction200Response.md)
 - [PostConvertPayloadToTransactionRequest](docs/PostConvertPayloadToTransactionRequest.md)
 - [PostConvertPublicKeyToPlainAddress200Response](docs/PostConvertPublicKeyToPlainAddress200Response.md)
 - [PostConvertPublicKeyToPlainAddressRequest](docs/PostConvertPublicKeyToPlainAddressRequest.md)
 - [PostConvertUnresolvedAddressToPlainAddress200Response](docs/PostConvertUnresolvedAddressToPlainAddress200Response.md)
 - [PostConvertUnresolvedAddressToPlainAddressRequest](docs/PostConvertUnresolvedAddressToPlainAddressRequest.md)
 - [PublicKey](docs/PublicKey.md)
 - [Transaction](docs/Transaction.md)
 - [UnresolvedAddress](docs/UnresolvedAddress.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="Bearer"></a>
### Bearer

- **Type**: Bearer authentication


## Author

ym.u.ichiro@gmail.com

