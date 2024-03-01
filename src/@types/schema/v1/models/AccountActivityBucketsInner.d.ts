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
 * @interface AccountActivityBucketsInner
 */
export interface AccountActivityBucketsInner {
  /**
   *
   * @type {string}
   * @memberof AccountActivityBucketsInner
   */
  startHeight: string;
  /**
   *
   * @type {string}
   * @memberof AccountActivityBucketsInner
   */
  totalFeesPaid: string;
  /**
   *
   * @type {number}
   * @memberof AccountActivityBucketsInner
   */
  beneficiaryCount: number;
  /**
   *
   * @type {string}
   * @memberof AccountActivityBucketsInner
   */
  rawScore: string;
}
/**
 * Check if a given object implements the AccountActivityBucketsInner interface.
 */
export declare function instanceOfAccountActivityBucketsInner(value: object): boolean;
export declare function AccountActivityBucketsInnerFromJSON(json: any): AccountActivityBucketsInner;
export declare function AccountActivityBucketsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountActivityBucketsInner;
export declare function AccountActivityBucketsInnerToJSON(value?: AccountActivityBucketsInner | null): any;