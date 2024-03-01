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
import type { Address } from './Address.js';
/**
 *
 * @export
 * @interface PostConvertPublicKeyToPlainAddress200Response
 */
export interface PostConvertPublicKeyToPlainAddress200Response {
  /**
   *
   * @type {Address}
   * @memberof PostConvertPublicKeyToPlainAddress200Response
   */
  result: Address;
}
/**
 * Check if a given object implements the PostConvertPublicKeyToPlainAddress200Response interface.
 */
export declare function instanceOfPostConvertPublicKeyToPlainAddress200Response(value: object): boolean;
export declare function PostConvertPublicKeyToPlainAddress200ResponseFromJSON(
  json: any
): PostConvertPublicKeyToPlainAddress200Response;
export declare function PostConvertPublicKeyToPlainAddress200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PostConvertPublicKeyToPlainAddress200Response;
export declare function PostConvertPublicKeyToPlainAddress200ResponseToJSON(
  value?: PostConvertPublicKeyToPlainAddress200Response | null
): any;
