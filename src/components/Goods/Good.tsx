import { Card } from 'antd'
import * as React from 'react'
const { Meta } = Card
import './Goods.css'

interface GoodInstance {
    actualCurrentPrice: number
    goodsId: number
    title: number
    imageUrl: string
    [propName: string]: any
}

interface Props {
    good: GoodInstance
}

export default class Goods extends React.Component<Props, any> {
    public render() {
        const { good } = this.props
        return (
            <Card
                style={{ width: '100%' }}
                cover={<img alt="example" src={good.imageUrl} />}
            >
                <Meta
                    title={good.title}
                    className="meta"
                    description={`${good.actualCurrentPrice}/原价:${
                        good.marketPrice
                    }`}
                />
            </Card>
        )
    }
}
