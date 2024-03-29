# coding: utf-8

"""
    Symbol REST Wrapper

    API server that makes development more convenient

    The version of the OpenAPI document: 0.0.1
    Contact: ym.u.ichiro@gmail.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import Any, ClassVar, Dict, List, Optional
from pydantic import BaseModel
from openapi_client.models.account_supplemental_public_keys_linked import AccountSupplementalPublicKeysLinked
from openapi_client.models.account_supplemental_public_keys_voting import AccountSupplementalPublicKeysVoting
try:
    from typing import Self
except ImportError:
    from typing_extensions import Self

class AccountSupplementalPublicKeys(BaseModel):
    """
    AccountSupplementalPublicKeys
    """ # noqa: E501
    linked: Optional[AccountSupplementalPublicKeysLinked] = None
    node: Optional[AccountSupplementalPublicKeysLinked] = None
    vrf: Optional[AccountSupplementalPublicKeysLinked] = None
    voting: Optional[AccountSupplementalPublicKeysVoting] = None
    __properties: ClassVar[List[str]] = ["linked", "node", "vrf", "voting"]

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True
    }


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of AccountSupplementalPublicKeys from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        _dict = self.model_dump(
            by_alias=True,
            exclude={
            },
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of linked
        if self.linked:
            _dict['linked'] = self.linked.to_dict()
        # override the default output from pydantic by calling `to_dict()` of node
        if self.node:
            _dict['node'] = self.node.to_dict()
        # override the default output from pydantic by calling `to_dict()` of vrf
        if self.vrf:
            _dict['vrf'] = self.vrf.to_dict()
        # override the default output from pydantic by calling `to_dict()` of voting
        if self.voting:
            _dict['voting'] = self.voting.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Dict) -> Self:
        """Create an instance of AccountSupplementalPublicKeys from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "linked": AccountSupplementalPublicKeysLinked.from_dict(obj.get("linked")) if obj.get("linked") is not None else None,
            "node": AccountSupplementalPublicKeysLinked.from_dict(obj.get("node")) if obj.get("node") is not None else None,
            "vrf": AccountSupplementalPublicKeysLinked.from_dict(obj.get("vrf")) if obj.get("vrf") is not None else None,
            "voting": AccountSupplementalPublicKeysVoting.from_dict(obj.get("voting")) if obj.get("voting") is not None else None
        })
        return _obj


