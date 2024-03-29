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
/**
 *
 * @export
 * @interface PublicKey
 */
export interface PublicKey {
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  publicKey: string;
}
/**
 * Check if a given object implements the PublicKey interface.
 */
export declare function instanceOfPublicKey(value: object): boolean;
export declare function PublicKeyFromJSON(json: any): PublicKey;
export declare function PublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicKey;
export declare function PublicKeyToJSON(value?: PublicKey | null): any;
