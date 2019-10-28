import React, {useState,useEffect} from "react";
import {ProductCarosellImg} from '../../inc/product/ImgCarosell';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


function ImageCarrosull(){
    const [hidden, setHidden] = useState(false);
    const [photoIndex,setPhotoIndex] =useState(0);
    let [result1, setResult1] = useState(ProductCarosellImg[0]);
    let ImgHandler = e =>{setResult1(e.target.src);};
    var [count,setCount]=useState(0)

    useEffect(()=>{
        if(count===3){
            count=3
          }
    })


    const NextPhoto=()=>{
       const image={index:0}
      
       const SingleImage=document.getElementById('photo');
       setCount(++count)
       image.index=count;
       if(count>=3) image.index=2 
       SingleImage.src=ProductCarosellImg[image.index]
       console.log(image.index)
    }
    const PrevPhoto=()=>{
        let image={index:0}
        const SingleImage=document.getElementById('photo');
        setCount(--count)
        image.index=count;
        if(count==-1 || count<0) image.index=0;
        SingleImage.src=ProductCarosellImg[image.index] 
        console.log(image.index)
    }



    return (<>


            <div className="row productImageGallery">
                <div className="col-sm-3">
                    <div className="productGallery">

                        {ProductCarosellImg.map((CaroImg, index)=>
                            <div className="singleItem bgGray p-2 mb-2">
                                <img  src={CaroImg} alt="" onClick={ImgHandler}/>
                            </div>

                        )}

                    </div>
                </div>
                {console.log(ProductCarosellImg[0])}
                <div className="col-sm-9">
                    <div className="productSingleView bgGray p-3 text-center">
                        <span onClick={()=>setHidden( true )}><i className="fas fa-expand-arrows-alt Modal"></i></span>
                        <img src= {result1} id={"photo"} alt="image"/>
                        <div className="mt-3">
                            <span className="mr-5" onClick={()=>PrevPhoto()} ><i className="fas fa-arrow-left fa-2x"></i></span>
                            <span className="ml-5" onClick={()=>NextPhoto()} ><i className="fas fa-arrow-right fa-2x"></i></span>
                        </div>
                    </div>

                </div>

            </div>
        <div>
            {hidden && (
                <Lightbox
                    mainSrc={ProductCarosellImg[photoIndex]}
                    nextSrc={ProductCarosellImg[(photoIndex + 1) % ProductCarosellImg.length]}
                    prevSrc={ProductCarosellImg[(photoIndex + ProductCarosellImg.length - 1) % ProductCarosellImg.length]}
                    onCloseRequest={() => setHidden(false )}
                    onMovePrevRequest={() =>
                        setPhotoIndex(photoIndex + ProductCarosellImg.length - 1 % ProductCarosellImg.length)
                    }
                    onMoveNextRequest={() =>setPhotoIndex((photoIndex + 1) % ProductCarosellImg.length)
                    }
                />
            )}
        </div>
        </>
    );

}


export {
    ImageCarrosull
}
