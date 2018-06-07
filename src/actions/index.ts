import fetch from '../service/index'

const prefix: string = '/api'
const getGoodsUrl: string = '/mall/goods'

export function getGoods(page: number, perpage: number) {
    const url = `${prefix}${getGoodsUrl}?page=${page}`
    return (dispatch: any) => {
        dispatch({ type: 'FETCH_GOOD_START' })
        return fetch
            .get(url)
            .then(json => {
                dispatch({
                    type: 'FETCH_GOOD_SUCCESS',
                    goods: json
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_GOOD_FAILED'
                })
            })
    }
}
