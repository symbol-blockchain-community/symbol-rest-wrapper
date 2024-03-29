# coding: utf-8

"""
    Symbol REST Wrapper

    API server that makes development more convenient

    The version of the OpenAPI document: 0.0.1
    Contact: ym.u.ichiro@gmail.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.api.convert_api import ConvertApi


class TestConvertApi(unittest.TestCase):
    """ConvertApi unit test stubs"""

    def setUp(self) -> None:
        self.api = ConvertApi()

    def tearDown(self) -> None:
        pass

    def test_post_convert_payload_to_transaction(self) -> None:
        """Test case for post_convert_payload_to_transaction

        transaction payload to json transaction object
        """
        pass

    def test_post_convert_public_key_to_plain_address(self) -> None:
        """Test case for post_convert_public_key_to_plain_address

        public-key to plain address
        """
        pass

    def test_post_convert_unresolved_address_to_plain_address(self) -> None:
        """Test case for post_convert_unresolved_address_to_plain_address

        unresolved address to plain address
        """
        pass


if __name__ == '__main__':
    unittest.main()
