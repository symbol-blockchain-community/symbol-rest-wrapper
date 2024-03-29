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
import type { CreatedAccount } from './CreatedAccount.js';
/**
 *
 * @export
 * @interface PostAccount200Response
 */
export interface PostAccount200Response {
  /**
   *
   * @type {CreatedAccount}
   * @memberof PostAccount200Response
   */
  account: CreatedAccount;
}
/**
 * Check if a given object implements the PostAccount200Response interface.
 */
export declare function instanceOfPostAccount200Response(value: object): boolean;
export declare function PostAccount200ResponseFromJSON(json: any): PostAccount200Response;
export declare function PostAccount200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PostAccount200Response;
export declare function PostAccount200ResponseToJSON(value?: PostAccount200Response | null): any;
