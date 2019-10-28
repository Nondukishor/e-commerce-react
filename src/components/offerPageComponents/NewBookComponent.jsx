
import React from 'react';
import{Link} from 'react-router-dom'
import {Col, Card} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NewBookDB} from "../../inc/offerPage/NewBook";



function NewBookComponent({BookImage, ProductTitle, AuthorName, ProductPrice, ImageBg }){
    return(
        <Col className="col-auto">
        <Card className="productCard border-0 bg-transparent">
              <div className={`productMedia mb-3 ${ImageBg}`}>

              <img src={BookImage} alt="" />
          </div>

          <div className="productContent">
            <Link to="#"><h4 className="productTitle mb-1">{ProductTitle}</h4></Link>
            <h5 className="authorName mb-1">{AuthorName}</h5>
            <p className="productPrice">$ {ProductPrice}</p>
          </div>
        </Card>
      </Col>

    )
}

function ImgSlick() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                {NewBookDB.map((value, index) =>
                    <div>
                        <Col className="col-auto">
                            <Card className="productCard border-0 bg-transparent">
                                <div className= "productMedia mb-3 bgGray">
                                     <img src={value.Img} alt=""/>
                                </div>

                                <div className="productContent">
                                    <Link to="#"><h4 className="productTitle mb-1">{value.Title}</h4></Link>
                                    <h5 className="authorName mb-1">{value.Author}</h5>
                                    <p className="productPrice">$ {value.Price}</p>
                                </div>
                            </Card>
                        </Col>
                    </div>
                )
                }
            </Slider>
        </div>
    );
}


export{
    NewBookComponent,
    ImgSlick
}

