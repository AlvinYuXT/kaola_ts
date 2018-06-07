import fetch from '../service/index'

const getGoodsUrl: string = '/mall/goods'

export function getGoods(page: number, perpage: number) {
    return (dispatch: any) => {
        dispatch({ type: 'FETCH_GOOD_START' })
        return fetch
            .get(getGoodsUrl)
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
