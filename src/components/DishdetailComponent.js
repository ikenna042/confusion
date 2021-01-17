import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';



    function RenderDish({dish}) {
        if (dish != null) {
            console.log(dish);
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
                    <div>
                        <RenderComments comments={dish.comments} />
                    </div>
                    
                </div>
                
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        const commentsArray = comments;
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

    const DishDetail = (props) => {
        console.log(props);
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="./menu">Menu</Link>
                        </BreadcrumbItem>
                <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                <div className="col-12">
                    <h3> {props.dish.name} </h3>
                    <hr />
                </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                </div>
            </div>
        );
    }


export default DishDetail;