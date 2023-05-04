import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Offers, Category, trending, Baby_care, Rice_Atta_Dal } from "../Data/Data";
function Details() {
    const loc = useLocation()
    const [product] = useState(loc.state)
    console.log(product);
let {data,shop} = loc.state

console.log(data);
console.log(shop);
    function shopby() {
        console.log("shop");
        /* return(
             Special_offers.map(function(d){
        
                    return(
                        <div>
                                <h1>{d. name}</h1>
                               
                        </div>
                    )})
        )   */

    }
    return (
        <Container>
            <Row>

                {/* <Col lg={12}>
                   {
           product==="Special"?Special_offers.map(function(d){

            return(
                <div>
                        <h1>{d. name}</h1>
                        <img src={d.Img} />
                </div>
            )}
           ):
                product==="SHOP"?
           Category.map(function(d){

                return(
                    <div>
                            <h1>{d. name}</h1>
                           
                    </div>
                )})
                   :<>
                   <div>
                    <p>{product.name}</p>
                    <img src={product.Img} />
                   </div>
                   </>                        

                   }
                </Col> */}


                <Col  >
                    {
                        product === "Special" ? Offers.map(function (d) {

                            return (
                                <div>
                                    <Container fluid>
                                        <Row className="detailrowstyle">
                                            <Col lg={4} className="detailstyle">

                                                <img src={d.Img} className="detailimg" />
                                            </Col>
                                            <Col lg={8} className="bg-primary">
                                                <Row>
                                                    <h1>{d.name}</h1>
                                                </Row>
                                                <Row>
                                                    <Col lg={6}>
                                                        <h3>MRP{d.MRP}</h3>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <h3>Our_Price{d.Our_Price}</h3>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <h4>{d.About_this_item}</h4>
                                                </Row>





                                            </Col>
                                        </Row>
                                    </Container>

                                </div>
                            )
                        }
                        ) :
                            product === "SHOP" ?
                                Category.map(function (d) {

                                    return (
                                        <div>
                                            <Container>
                                                <Row>
                                                    <Col className="shopcategorydetail">
                                                        <img src={d.Img} />
                                                    </Col>
                                                </Row>
                                            </Container>

                                            {/* <h1>{d. name}</h1> */}


                                        </div>
                                    )
                                }) :

                                product === "trending" ?
                                    trending.map(function (d) {

                                        return (
                                            <div>
                                                <Container fluid>
                                                    <Row className="detailrowstyle">
                                                        <Col lg={4} className="detailstyle">

                                                            <img src={d.Img} className="detailimg" />
                                                        </Col>
                                                        <Col lg={8} className="bg-primary">
                                                            <Row>
                                                                <h1>{d.name}</h1>
                                                            </Row>
                                                            <Row>
                                                                <cOL lg={6}>
                                                                    <h3>MRP{d.MRP}</h3>
                                                                </cOL>

                                                                <cOL lg={6}>
                                                                    <h3>Our_Price{d.Our_Price}</h3>
                                                                </cOL>
                                                            </Row>

                                                            <Row>
                                                                <h4>{d.About_this_item}</h4>
                                                            </Row>





                                                        </Col>
                                                    </Row>
                                                </Container>

                                            </div>
                                        )
                                    })
                                    : <>
                                        <div>
                                            <h2 className="productnamestyle">{data.name} </h2>
                                            <img src={data.Img} className="productimgstyle" />
                                        </div>
                                      
                                            <Row>

    {
        shop==="baby" ?Baby_care.map(function(d){
            return(
                <><Col lg={4}>
                    <div className="babyproduct">
                        <img src={d.Img} style={{width:'100%',height:300}}/>
                                <h5>{d.name}</h5>
                                <h5>{d.MRP}</h5>
                                </div>
                 </Col>

                </>
            )
        }):Rice_Atta_Dal.map(function(d){
            return(
                <><Col lg={4}>
                    <div className="babyproduct">
                        <img src={d.Img} style={{width:'100%',height:300}}/>
                                <h5>{d.name}</h5>
                                <h5>{d.MRP}</h5>
                                </div>
                 </Col>

                </>
            )
        })
    }
    
                                     
                                        </Row>
                                    </>

                    }:
                </Col >


            </Row>

        </Container>
    );
}
export default Details;