import * as React from 'react'
import Good from './Good'

interface GoodInstance {
    actualCurrentPrice: number
    goodsId: number
    title: number
    imageUrl: string
    [propName: string]: any
}

interface Props {
    goods: GoodInstance[]
}

export default class Goods extends React.Component<Props, any> {
    public render() {
        const { goods } = this.props
        console.log(goods)
        return goods.map(good => <Good key={good.goodsId} good={good} />)
    }
}
