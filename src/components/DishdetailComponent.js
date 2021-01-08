import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            console.log(dish);
            // const comments = dish.comments;
            // console.log(comments);
            // const listItems = comments.map((comment) => 
            //     <li key={comment.id} className="list-group-item">
            //         {comment.comment} <br/>
            //         -- {comment.author}, <Moment format="MMM D, YYYY">{comment.date}</Moment> 
            //     </li>
            // );
            return (
                <div className="row">
                    <div className="col-12 col-md-5 mt-5">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText> {dish.description} </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {/* <div className="col-12 col-md-5 mt-5">
                    <ul className="list-group list-unstyled">
                        <h4>Comments</h4>
                        {listItems}
                    </ul>
                    </div> */}
                    <div>{this.renderComments(this.props.selectedDish)}</div>
                    
                </div>
                
                
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        const commentsArray = dish.comments;
        if (commentsArray != null) {
            // run shit
            const listItems = commentsArray.map((comment) => 
                <li key={comment.id} className="list-unstyled p-2">
                    {comment.comment} <br/>
                    -- {comment.author}, <Moment format="MMM D, YYYY">{comment.date}</Moment> 
                </li>
            );
            return (
                <div className="col-12 col-md-10 mt-5">
                    <ul>
                        <h4>Comments</h4>
                        {listItems}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                <div>
                {/* {this.renderComments(this.props.selectedDish)} */}
                </div>
            </div>
        );
    }
}

export default DishDetail;