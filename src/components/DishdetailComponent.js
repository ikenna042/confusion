import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            console.log(dish);
            const comments = dish.comments;
            console.log(comments);
            const listItems = comments.map((comment) => 
                <li key={comment.id} className="list-group-item">
                    {comment.comment} <br/>
                    -- {comment.author}, {comment.date}
                </li>
            );
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
                    <div className="col-12 col-md-5 mt-5">
                    <ul className="list-group">
                        {listItems}
                    </ul>
                    </div>
                    
                
                </div>
                
                
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments() {
        const comments = this.props.selectedDish.comments;
        console.log(comments);
    }

    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                <div>
                {/* {this.renderComments()} */}
                </div>
            </div>
        );
    }
}

export default DishDetail;