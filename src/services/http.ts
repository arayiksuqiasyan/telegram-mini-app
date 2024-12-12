import axios, { Axios, AxiosRequestConfig } from 'axios'
import { Api, Endpoint, Host } from '@/enums/api'
import { ApiError } from './errors'

export class HttpService {
  private static axios: Axios

  public static init(): void {
    HttpService.axios = axios.create({
      baseURL: Host.Development + Api.V1,
    })

    HttpService.axios.interceptors.request.use(config => {
      // const isAuthUrl = [Endpoint.Login, Endpoint.Refresh].some(endpoint => config.url?.includes(endpoint))
      // if (!isAuthUrl) {
      //   const user = CookieService.get<AuthTokens>(CookiesKeys.User)
      //   if (user?.accessToken) {
      //     config.headers["Authorization"] = `Bearer ${user.accessToken}`
      //   }
      // }

      return config
    })

    HttpService.axios.interceptors.response.use(
      response => response.data,
      // async (error: AxiosError) => {
      async () => {
        // const originalRequest = error.config
        // const user = CookieService.get<AuthTokens>(CookiesKeys.User)
        // if (user?.refreshToken) {
        //   const newTokens = await AuthService.refresh(user.refreshToken)
        //   originalRequest.headers["Authorization"] = `Bearer ${newTokens.accessToken}`
        //   return axios(originalRequest)
        // }
      },
    )
  }

  public static handleError(error: unknown): string {
    return error instanceof ApiError ? error.message : 'Неизвестная ошибка'
  }

  public static async get<R>(path: Endpoint | string, config: AxiosRequestConfig = {}): Promise<R> {
    return await HttpService.axios.get<R, R>(<string>path, config)
  }

  public static async post<R, Q = object>(path: Endpoint | string, request?: Q): Promise<R> {
    return await HttpService.axios.post<R, R>(<string>path, request)
  }

  public static async delete<R>(path: Endpoint | string, config: AxiosRequestConfig = {}): Promise<R> {
    return await HttpService.axios.delete<R, R>(<string>path, config)
  }
}
