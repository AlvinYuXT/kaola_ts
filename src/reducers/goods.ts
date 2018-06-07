import { Action } from 'redux'

interface GoodsAction extends Action {
    goods: any[]
}

const goods = (state = {}, action: GoodsAction) => {
    switch (action.type) {
        case 'FETCH_GOOD_SUCCESS':
            return action.goods
        default:
            return state
    }
}

export default goods
