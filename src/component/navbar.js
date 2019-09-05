import React from 'react'
import Rate from './rate'
import { searchbyname, searchbyrate, rate } from '../actions/actions'
import { connect } from 'react-redux'

const navbar = ({ searchbyname, searchbyrate, rate }) => {
    return (
        <div className="mt-4"> <center>
            <input className="p-2 mr-3" type='text' onChange={(e) => { searchbyname(e.target.value) }} />
            <Rate onchange={(i) => { searchbyrate(i) }} count={rate} /></center>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchbyname: searchname => dispatch(searchbyname(searchname)),
        searchbyrate: sraechrate => dispatch(searchbyrate(sraechrate))
    }
}
const mstp = state => {
    return {
        rate: state.movie.filterbyrate
    }
}
export default connect(mstp, mapDispatchToProps)(navbar)
