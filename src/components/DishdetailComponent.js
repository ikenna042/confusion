import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,
         BreadcrumbItem, Button, Form, FormGroup, Label, Input,
         Modal, ModalBody, ModalHeader, Row, Col
        } from 'reactstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    };

    function RenderComments({comments}) {
        console.log(comments);
        if (comments != null)
            return (
                <div className="col-12 col-md-5 mt-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p> {comment.comment} </p>
                                    <p>-- {comment.author}, {comment.date} </p>
                                </li>
                            );
                        })}
                    </ul>
                    <Comment />
                </div>
            );
        else
            return (
                <div></div>
            );
    }

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

    class Comment extends Component {

        constructor(props) {
            super(props);

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

            this.state = {
                isModalOpen: false
            };
        }
    
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values) {
            this.toggleModal();
            alert('Current state is' + JSON.stringify(values));
            console.log('Current state is' + JSON.stringify(values));
        }
    
        render() {
            return (
                <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name" className="form-control"
                                    validators={{
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }} />
                                    <Errors
                                       className="text-danger"
                                       model=".author"
                                       show="touched"
                                       messages={{
                                           minLength: 'Must be greater than 3',
                                           maxLength: 'Must be 15 characters or less'
                                       }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                    </Modal>
                </div>
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
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }

    




export default DishDetail;