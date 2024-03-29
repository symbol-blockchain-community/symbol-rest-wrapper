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
 * @interface AccountSupplementalPublicKeysVotingPublicKeysInner
 */
export interface AccountSupplementalPublicKeysVotingPublicKeysInner {
  /**
   *
   * @type {string}
   * @memberof AccountSupplementalPublicKeysVotingPublicKeysInner
   */
  publicKey: string;
  /**
   *
   * @type {number}
   * @memberof AccountSupplementalPublicKeysVotingPublicKeysInner
   */
  startEpoch: number;
  /**
   *
   * @type {number}
   * @memberof AccountSupplementalPublicKeysVotingPublicKeysInner
   */
  endEpoc?: number;
}
/**
 * Check if a given object implements the AccountSupplementalPublicKeysVotingPublicKeysInner interface.
 */
export declare function instanceOfAccountSupplementalPublicKeysVotingPublicKeysInner(value: object): boolean;
export declare function AccountSupplementalPublicKeysVotingPublicKeysInnerFromJSON(
  json: any
): AccountSupplementalPublicKeysVotingPublicKeysInner;
export declare function AccountSupplementalPublicKeysVotingPublicKeysInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountSupplementalPublicKeysVotingPublicKeysInner;
export declare function AccountSupplementalPublicKeysVotingPublicKeysInnerToJSON(
  value?: AccountSupplementalPublicKeysVotingPublicKeysInner | null
): any;
