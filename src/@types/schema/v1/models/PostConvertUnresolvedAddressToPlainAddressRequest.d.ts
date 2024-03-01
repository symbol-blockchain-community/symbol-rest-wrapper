/**
 * Symbol REST Wrapper
 * API server that makes development more convenient
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: ym.u.ichiro@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UnresolvedAddress } from './UnresolvedAddress.js';
/**
 *
 * @export
 * @interface PostConvertUnresolvedAddressToPlainAddressRequest
 */
export interface PostConvertUnresolvedAddressToPlainAddressRequest {
  /**
   *
   * @type {UnresolvedAddress}
   * @memberof PostConvertUnresolvedAddressToPlainAddressRequest
   */
  from: UnresolvedAddress;
}
/**
 * Check if a given object implements the PostConvertUnresolvedAddressToPlainAddressRequest interface.
 */
export declare function instanceOfPostConvertUnresolvedAddressToPlainAddressRequest(value: object): boolean;
export declare function PostConvertUnresolvedAddressToPlainAddressRequestFromJSON(
  json: any
): PostConvertUnresolvedAddressToPlainAddressRequest;
export declare function PostConvertUnresolvedAddressToPlainAddressRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PostConvertUnresolvedAddressToPlainAddressRequest;
export declare function PostConvertUnresolvedAddressToPlainAddressRequestToJSON(
  value?: PostConvertUnresolvedAddressToPlainAddressRequest | null
): any;
