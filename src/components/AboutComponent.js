import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardHeader, Media, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

function RenderLeader({leader}) {
    return(
        <Media tag="li">
            <Media left >
                <Media object src={baseUrl + leader.image} alt={leader.name}/>
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );

}


function AboutUs(props) {
    const leaders = props.leaders.leaders.map((leader) => {
        return(
            <Fade key={leader.id} in>
                <RenderLeader leader={leader}/>
            </Fade>
        );
        }
    );
    if (props.leaders.isLoading) {
        return(
            <Loading/>
        );
    }else if (props.leaders.errMess) {
        return(
            <h4>{props.leaders.errMess}</h4>
        );
    }else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'> Home </Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-5 m-1">
                        <h1>Our History</h1>
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par
                            excellence in Hong kong. With
                            its unique brand of world fusion cuisine that can be found nowher else, it enjoys patronage
                            from the A-list clientele in
                            Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know
                            what will arrive on tyor plate the next time you visit us.</p>

                        <p>The restaurant traces its humble beginnings to The Frying Pan, a successful chain stated by
                            our CEO, Mr. Peter Pan, that featured for the first time the world's return
                            best cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardHeader className="bg-info text-light">
                                Facts At a Glance
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <CardTitle className="col-6">
                                        Started
                                    </CardTitle>
                                    <CardText className="col-6">
                                        3 Feb. 2013
                                    </CardText>
                                </div>
                                <div className="row">
                                    <CardTitle className="col-6">
                                        Major Stake
                                    </CardTitle>
                                    <CardText className="col-6">
                                        HK Fine Foods Inc.
                                    </CardText>
                                </div>
                                <div className="row">
                                    <CardTitle className="col-6">
                                        Holder
                                    </CardTitle>
                                    <CardText className="col-6">
                                    </CardText>
                                </div>
                                <div className="row">
                                    <CardTitle className="col-6">
                                        Last Year's
                                    </CardTitle>
                                    <CardText className="col-6">
                                        $1,250,375
                                    </CardText>
                                </div>
                                <div className="row">
                                    <CardTitle className="col-6">
                                        Turn Over
                                    </CardTitle>
                                    <CardText className="col-6">
                                    </CardText>
                                </div>
                                <div className="row">
                                    <CardTitle className="col-6">
                                        Employees
                                    </CardTitle>
                                    <CardText className="col-6">
                                        40
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 m-1">
                        <Card>
                            <CardBody>
                                <CardText>You better cut the pizza in four pieces because I'm not hungry enough to eat
                                    six.
                                </CardText>
                                <CardText className="text-muted">
                                    --- Yogi Berrz, The Wit and Wisdom of Yogi Berra, P.Pepe, Diversion Books, 2014
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 m-1">
                        <h1>Corporate Leadership</h1>
                        <Media list>
                            <Stagger in>
                                {leaders}
                            </Stagger>
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;