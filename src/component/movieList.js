import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UpdateMovie from './updatemovie'
import { deletemovie } from '../actions/actions'

import Rate from './rate'

const movieList = (props) => {
    return (
        <div className="d-flex flex-wrap">

            {props.movie.filter(el => el.title.includes(props.filterbyname) && el.stars >= props.filterbyrate).map(el => <div className="card m-5" style={{ width: "18rem" }} key={el.id}>
                <img src={el.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{el.title} - {el.year}</h5>
                    {/* <h6>{el.stars}</h6> */}
                    <Rate count={el.stars} />
                    <div className="d-flex">
                        <UpdateMovie movie={el} />
                        <button className="ml-2" onClick={() => { props.deletemovie(el.id) }}> Delete Movie</button>
                    </div>
                </div>
            </div>)}
            <Link to='/addmovie'> <h4>Addmovie</h4></Link>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletemovie: id => dispatch(deletemovie(id))
    }
}
export default connect(state => ({ ...state.movie }), mapDispatchToProps)(movieList)
