
import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { upadtemovie } from '../actions/actions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: props.movie.id,
            year: props.movie.year,
            img: props.movie.img,
            stars: props.movie.stars,
            title: props.movie.title
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    updatemovie = () => {
        this.toggle()
        const { id, year, stars, title, img } = this.state
        const newmovie={
            id ,
            year,
            img ,
            stars,
            title
        }
        this.props.upadtemovie(newmovie)
    }
    render() {
        const { id, year, stars, title, img } = this.state
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Update Movie</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Movie</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <h2>Add new movie</h2>

                            <div className="form-group">
                                <label htmlFor="MovieName">Movie Name</label>
                                <input type="text" value={title} className="form-control" placeholder="Movie Name" name="title" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="MovieYear">Movie Year</label>
                                <input type="text" value={year} className="form-control" placeholder="Movie Year" name="year" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="MovieYear">Movie img</label>
                                <input type="text" value={img} className="form-control" placeholder="Movie image" name="img" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="MovieYear">Movie rate</label>
                                <input type="text" value={stars} className="form-control" placeholder="Movie rate" name="stars" onChange={this.handleChange} />
                            </div>

                            <Link to="/"><button type="button" className="btn btn-default">Submit</button></Link>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updatemovie}>Update</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mdtp = (dispatch) => {
    return {
        upadtemovie: updatedmovie => dispatch(upadtemovie(updatedmovie))
    }
}
export default connect(null, mdtp)(ModalExample);