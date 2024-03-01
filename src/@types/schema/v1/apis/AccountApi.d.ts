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
import * as runtime from '../runtime.js';
import type { GetAccount200Response, PostAccount200Response } from '../models/index.js';
export interface AccountApiGetAccountRequest {
  accountId: string;
}
/**
 * AccountApi - interface
 *
 * @export
 * @interface AccountApiInterface
 */
export interface AccountApiInterface {
  /**
   *
   * @summary get account info
   * @param {string} accountId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountApiInterface
   */
  getAccountRaw(
    requestParameters: AccountApiGetAccountRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<GetAccount200Response>>;
  /**
   * get account info
   */
  getAccount(
    requestParameters: AccountApiGetAccountRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetAccount200Response>;
  /**
   *
   * @summary create a new private key
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountApiInterface
   */
  postAccountRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PostAccount200Response>>;
  /**
   * create a new private key
   */
  postAccount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostAccount200Response>;
}
/**
 *
 */
export declare class AccountApi extends runtime.BaseAPI implements AccountApiInterface {
  /**
   * get account info
   */
  getAccountRaw(
    requestParameters: AccountApiGetAccountRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<GetAccount200Response>>;
  /**
   * get account info
   */
  getAccount(
    requestParameters: AccountApiGetAccountRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetAccount200Response>;
  /**
   * create a new private key
   */
  postAccountRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PostAccount200Response>>;
  /**
   * create a new private key
   */
  postAccount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostAccount200Response>;
}
