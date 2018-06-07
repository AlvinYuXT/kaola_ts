import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../../actions/index'
import GoodList from '../../components/Goods/GoodsList'

class Home extends React.Component<any, any> {
    public state = {
        goods: [],
        current: 1
    }
    public componentDidMount() {
        this.queryGoods(1, 20)
    }
    public queryGoods(page: number, perpage: number) {
        const { getGoods } = this.props
        getGoods()
    }

    public render() {
        const { current } = this.state
        const { goods } = this.props
        return (
            <div className="content">
                <header>欢迎森森</header>
                <GoodList goods={goods} />
                <Pagination
                    defaultCurrent={current}
                    defaultPageSize={20}
                    total={1000}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({ goods: state.goods })
function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(action, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
