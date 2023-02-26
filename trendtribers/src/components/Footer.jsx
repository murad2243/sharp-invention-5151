import React from "react";
import styles from "../styles/Footer.module.css";


const List1 = [
    "Top Wear",
    "Men's New Arrivals",
    "Men's Half Sleeve T-Shirts",
    "Men's Hoodies & Sweatshirts",
    "Men's Long Sleeve T-shirts",
    "Men's Printed T-shirts",
    "Men's Plain T-shirts",
    "Men's Vests",
    "Men's Polo T-Shirts",
    "Men's Kurtas",
    "Men's Combo T-Shirts",
    "Men's Shirts",
    "Men's Nightwear",
    "Men's Plus Size Store",
    "Bottom Wear",
    "Men's Pajamas",
    "Men's Boxer Shorts",
    "Men's Shorts",
    "Men's Track Pants",
    "Men's Pants",
    "Featured",
    "Men's Flip Flops",
    "Men's Sliders",
    "Marvel T-Shirts",
    "Disney T-Shirts",
    "Avengers T-Shirts",
    "Star Wars T-Shirts",
    "Batman T-Shirts",
    "Superman T-Shirts",
    "Joker T-Shirts",
  ];
  
  const List2 = [
    "Women's Top Wear",
    "Women's New Arrivals",
    "Women's T-Shirts",
    "Women's Hoodies & Sweatshirts",
    "Women's Dresses",
    "Women's 3/4 Sleeve T-Shirts",
    "Women's Kurtis",
    "Women's Combo T-Shirts",
    "Women's Nightwear",
    "Women's Plus Size Store",
    "Women's Bottom Wear",
    "Women's Pajamas",
    "Women's Boxer Shorts",
    "Women's Jeans",
    "Women's Joggers",
    "Women's Shorts",
    "BAGS",
    "Laptop Bags",
    "Small Backpacks",
    "Featured",
    "Women's Slides",
    "Women's Flip Flops",
  ];
  
  const List3 = [
    "Brands",
    "Apple",
    "Realme",
    "Samsung",
    "Xiaomi",
    "Oneplus",
    "Vivo",
    "Oppo",
  ];

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div>
          <ul>
            <li>CUSTOMER SERVICE</li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>COMPANY</li>
            <li>About Us</li>
            <li>We're Hiring</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>CONNECT WITH US</li>
            <li>
             
              4.7M People Like this
            </li>
            <li>
              {" "}
             
              1M Followers
            </li>
            <div className={styles.flex3}>
              
              <img src="https://cdn-icons-png.flaticon.com/512/2168/2168336.png"
                style={{ height: "20px", marginRight: "3px", background: "white", borderRadius:"50%" }}
              />
              <img src="https://cdn-icons-png.flaticon.com/512/37/37929.png"
                style={{ height: "20px", marginRight: "3px", background: "white", borderRadius:"50%" }}
              />
               <img src="https://cdn-icons-png.flaticon.com/512/2175/2175225.png"
                style={{ height: "20px", marginRight: "3px", background: "white", borderRadius:"50%" }}
              />
              <img src="https://cdn-icons-png.flaticon.com/512/2175/2175370.png"
                style={{ height: "20px", marginRight: "3px", background: "white", borderRadius:"50%" }}
              />
              
            </div>
          </ul>
        </div>
        <div className={styles.Formm}>
          <ul>
            <li>KEEP UP TO DATE</li>
            <div className={styles.form}>
              <input
                type="text"
                className={styles.input}
                placeholder={"Enter Your Email"}
              />
              <button className={styles.btn}>Subsribe</button>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.container2}>
        <div>
          <p>
            {" "}
            <p style={{ fontSize: "18px", marginRight: "20px" }} />
            15 Days return policy*
          </p>
          <p>
            <p style={{ fontSize: "18px", marginRight: "20px" }} /> Cash on
            delivery*
          </p>
        </div>
        <div className={styles.Playstore}>
          <li>DOWNLOAD THE APP</li>
          <div className={styles.flex}>
            <img
              src="https://images.bewakoof.com/web/app_android_v1.png"
              alt=""
            />
            <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
          </div>
        </div>
        <div className={styles.Links}>
          <li
            style={{ color: "#fdd835", fontSize: "16px", marginBottom: "10px" }}
          >
            100% SECURE PAYMENT
          </li>
          <img src="https://raw.githubusercontent.com/hitesht4/Bewakoof.com-Clone/main/frontend/src/Assets/scr.png" alt="" />
        </div>
        <div className={styles.Noneee}></div>
      </div>
      {/* <Footer2 /> */}

      <div className={styles.container}>
      <div>
        <ul>
          <h5>MEN'S CLOTHING</h5>
          {List1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h5>WOMEN'S CLOTHING</h5>
          {List2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h5>MOBILE COVERS</h5>
          {List3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.Links}>
        <h5>FANBOOK</h5>
        <h5>OFFERS</h5>
        <h5>SITEMAP</h5>
      </div>
    </div>
    </div>
  );
};

export default Footer;