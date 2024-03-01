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
import datetime

from openapi_client.models.payload import Payload

class TestPayload(unittest.TestCase):
    """Payload unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Payload:
        """Test Payload
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Payload`
        """
        model = Payload()
        if include_optional:
            return Payload(
                payload = ''
            )
        else:
            return Payload(
                payload = '',
        )
        """

    def testPayload(self):
        """Test Payload"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()