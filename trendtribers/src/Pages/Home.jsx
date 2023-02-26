import React from "react"
import Footer from "../components/Footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";
function Home(){
    let [images, setImg] = useState(["https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg","https://images.bewakoof.com/uploads/grid/app/1x1-tshirt-dresses-1677000030.jpg","https://images.bewakoof.com/uploads/grid/app/90s-banner-common-frontback-1677231340.jpg"])
    

    let img=[["https://images.bewakoof.com/uploads/grid/app/90s-banner-common-frontback-1677231340.jpg","https://images.bewakoof.com/uploads/grid/app/1x1-jumbo-prints-common-02-1677000028.jpg","https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg"],["https://images.bewakoof.com/uploads/grid/app/1x1-jumbo-prints-common-02-1677000028.jpg","https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg","https://images.bewakoof.com/uploads/grid/app/1x1-tshirt-dresses-1677000030.jpg"],["https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg","https://images.bewakoof.com/uploads/grid/app/1x1-tshirt-dresses-1677000030.jpg","https://images.bewakoof.com/uploads/grid/app/90s-banner-common-frontback-1677231340.jpg"]]
    let i=0;
     const myInterval = setInterval(myTimer,3000)
    // console.log(timer);

    function myTimer(){
            setImg([img[i][0], img[i][1], img[i][2]])
            
            console.log(i);
            if(i==2){
                myStopFunction()
            }
            i++
    }
    function myStopFunction(){
        clearInterval(myInterval)
    }

    return (
        <div>
            <div className={styles.slideImg}>
                <img src={images[0]} alt="" />
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
            </div>
            <img style={{margin:"5px", width:"99%"
            }} src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-verified-1677246449.jpg" alt="" />

        
        <div className={styles.bestSeller}>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-bestsellers-1676881692.jpg" alt="" />
                <p>bestseller</p>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt="" />
                <p>bestseller</p>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" alt="" />
                <p>bestseller</p>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg" alt="" />
                <p>bestseller</p>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" alt="" />
                <p>bestseller</p>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="" />
                <p>bestseller</p>
            </div>
        </div>
        <br />
        <h1 style={{textAlign:"center", fontWeight
    :"800"}}>DESING OF THE WEEK</h1>
        <div style={{display:"flex", justifyContent:"center"}}> 
        <img style={{height:"375px"}}  src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1676955702.jpg" alt="" />
        <img style={{height:"375px"}} src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1676955702.jpg" alt="" />
        </div>

            <br />
            <h1 style={{textAlign:"center", fontWeight
    :800}}>TRENDING CATEGORIES</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg" alt="" />
        </div>
            
            <br />
            <h1 style={{textAlign:"center", fontWeight
    :800}}>TOO HOT TO BE MISSED</h1>
        <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-b3at999-1676885542.jpg" alt="" />
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-BTS-01-1677128271.jpg" alt="" />
        </div>
          <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-MEN-VEST-02-1676611750.jpg" alt="" />
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/1x1-The-Ultimate-Joggers-common--1--1676898158.gif" alt="" />
        </div>


        <br />
            <h1 style={{textAlign:"center", fontWeight
    :800}}>CATEGORIES TO BAG</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png" alt="" />
        </div>
        <img src="https://images.bewakoof.com/uploads/grid/app/desktop-survey-1673330211.jpg" alt="" />

        <br />
            <h1 style={{textAlign:"center", fontWeight
    :800}}>CATEGORIES TO BAG</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-mugs-1673005212.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png" alt="" />
            <img style={{height:"300px"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png" alt="" />
        </div>


        <br />
            <h1 style={{textAlign:"center", fontWeight
    :800}}>OUR BEST PICKS</h1>
        <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1674483112.jpg" alt="" />
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/MIdSizeBanner-TrendyToppers-1676223605.jpg" alt="" />
        </div>
          <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg" alt="" />
            <img style={{height:"380px"}} src="https://images.bewakoof.com/uploads/grid/app/midsizebanner-common-jeans-1675666577.jpg" alt="" />
        </div>
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt="" />
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="" />

        <Footer/>
        </div>
    )
}
export default Home;