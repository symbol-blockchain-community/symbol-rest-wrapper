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
import type { Node } from './Node.js';
/**
 *
 * @export
 * @interface GetNodes200Response
 */
export interface GetNodes200Response {
  /**
   *
   * @type {Array<Node>}
   * @memberof GetNodes200Response
   */
  nodes: Array<Node>;
}
/**
 * Check if a given object implements the GetNodes200Response interface.
 */
export declare function instanceOfGetNodes200Response(value: object): boolean;
export declare function GetNodes200ResponseFromJSON(json: any): GetNodes200Response;
export declare function GetNodes200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetNodes200Response;
export declare function GetNodes200ResponseToJSON(value?: GetNodes200Response | null): any;
