import type { NodeErrorResponse } from '../@types/response.js';
import { NODE_URL } from './config.js';
import { NodeFetchError } from './errors.js';
import { logger } from './logger.js';

type Query = { [key: string]: string | number | boolean };

/** Node への fetch request */
export default class FetchNode {
  private node: string;

  public constructor(node = NODE_URL) {
    this.node = node;
  }

  private getBaseHeaders(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  public async get<T = { [key: string]: any }>(path: string, query?: Query, timeout = 3000): Promise<T | Error> {
    const url = new URL(path, this.node);
    const headers = this.getBaseHeaders();
    Object.entries(query || {}).forEach(([key, value]) => {
      url.searchParams.append(key, encodeURIComponent(value));
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const json = await response.json();

      if (response.ok) {
        return json;
      } else {
        const nodeErrorJson = json as NodeErrorResponse;
        return new NodeFetchError(`node fetch error: code ${nodeErrorJson.code} message: ${nodeErrorJson.message}`);
      }
    } catch (err) {
      // 500 扱いとしてユーザー向けには未知のエラーとして送信
      if (err instanceof Error || err instanceof NodeFetchError) {
        if (err.name === 'AbortError') {
          logger.error(err, `fetch timeout: ${path}`);
          return new NodeFetchError(`fetch timeout: ${path}`);
        } else {
          logger.error(err, `fetch error: ${path} ${err.message}`);
          return new NodeFetchError(`fetch error: ${path} ${err.message}`);
        }
      } else {
        logger.error(err, `fetch unknown error ${path}`);
        return new NodeFetchError(`fetch unknown error ${path}`);
      }
    }
  }

  public async post<T = { [key: string]: any }>(path: string, body: object, timeout = 3000): Promise<T | Error> {
    const url = new URL(path, this.node);
    const headers = this.getBaseHeaders();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const json = await response.json();

      if (response.ok) {
        return json;
      } else {
        const nodeErrorJson = json as NodeErrorResponse;
        return new NodeFetchError(`node fetch error: code ${nodeErrorJson.code} message: ${nodeErrorJson.message}`);
      }
    } catch (err) {
      // 500 扱いとしてユーザー向けには未知のエラーとして送信
      if (err instanceof Error || err instanceof NodeFetchError) {
        if (err.name === 'AbortError') {
          logger.error(err, `fetch timeout: ${path}`);
          return new NodeFetchError(`fetch timeout: ${path}`);
        } else {
          logger.error(err, `fetch error: ${path} ${err.message}`);
          return new NodeFetchError(`fetch timeout: ${path} ${err.message}`);
        }
      } else {
        logger.error(err, `fetch unknown error ${path}`);
        return new NodeFetchError(`fetch unknown error ${path}`);
      }
    }
  }
}
