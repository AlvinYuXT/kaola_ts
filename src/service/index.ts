interface Response {
    status: number
    statusText: string
    json: () => Promise<any>
}
const HOST: string = 'http://54.250.17.191:7001'
/* 封装get，post，delete请求 */
function checkStatus(response: Response): PromiseLike<any> {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        const error: any = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
    }
}

function parseJSON(response: Response): Promise<any> {
    return response.json().catch(err => {
        return Promise.reject('JSON PArse Error')
    })
}

export default {
    get(url: string, param: any = {}, headers?: Headers, host?: string) {
        /* host区分测试环境以及生产环境 */
        host = host || HOST
        headers = new Headers(headers)
        const query: string[] = []
        Object.keys(param).forEach(item => {
            query.push(`${item}=${encodeURIComponent(param[item])}`)
        })
        const params: string = query.length ? '?' + query.join('&') : '' // fixme
        url = host + url + params

        const init: RequestInit = {
            method: 'GET',
            headers,
            cache: 'default'
        }
        return fetch(url, init)
            .then(checkStatus)
            .then(parseJSON)
    },

    post(url: string, param: any = {}, headers: Headers, host: string) {
        const reqHeaders = new Headers()
        reqHeaders.append('Content-Type', 'application/json')
        reqHeaders.append('Accept', 'application/json')

        url = host + url
        const init: RequestInit = {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify(param)
        }

        return fetch(url, init)
            .then(checkStatus)
            .then(parseJSON)
    },

    put(url: string, param: any = {}, headers: Headers, host: string) {
        const reqHeaders = new Headers()
        reqHeaders.append('Content-Type', 'application/json')
        reqHeaders.append('Accept', 'application/json')

        url = host + url

        const init: RequestInit = {
            method: 'PUT',
            headers: reqHeaders,
            body: JSON.stringify(param)
        }

        return fetch(url, init)
            .then(checkStatus)
            .then(parseJSON)
    }
}
