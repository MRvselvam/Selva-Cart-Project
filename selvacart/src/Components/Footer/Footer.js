import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="bg-light rounded">
      
      <div className="footerWhite mt-5 p-5 alert alert-light">
      <h2 className="mt-5" style={{position:"absolute", marginLeft:"40%"}}>Footer</h2>
        <dl className="text-start ms-5" style={{ marginTop: "20vh" }}>
          <dt>Mobile Phones</dt>
          <dd className="ms-5 ">
            ● &nbsp; Smartphones: Latest models with advanced features,
            high-resolution cameras, and fast processors. Brands include Apple,
            Samsung, Huawei, Xiaomi.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Feature Phones: Basic models with essential features,
            suitable for calls and texts. Brands include Nokia, Samsung.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Accessories: Cases, screen protectors, chargers, earbuds,
            and portable power banks.
          </dd>
          <dt>Laptops</dt>
          <dd className="ms-5 ">
            ● &nbsp; Ultrabooks: Thin, lightweight laptops with powerful
            processors and long battery life. Popular brands include Dell XPS,
            MacBook Air, HP Spectre.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Gaming Laptops: High-performance machines with advanced
            graphics cards, suitable for gaming and heavy-duty tasks. Brands
            include ASUS ROG, MSI, Alienware.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; 2-in-1 Laptops: Convertible models that can function as
            both a laptop and a tablet. Examples include Microsoft Surface,
            Lenovo Yoga.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Accessories: Laptop bags, cooling pads, external keyboards,
            mice, docking stations.
          </dd>
          <dt>Electronics</dt>
          <dd className="ms-5 ">
            ● &nbsp; Televisions: LED, OLED, QLED models with smart TV
            capabilities. Brands like Sony, LG, Samsung.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Audio Systems: Home theaters, soundbars, Bluetooth
            speakers. Popular brands include Bose, JBL, Sony.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Wearables: Smartwatches, fitness trackers. Brands include
            Apple, Fitbit, Garmin.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Cameras: DSLRs, mirrorless cameras, action cameras. Brands
            include Canon, Nikon, GoPro.
          </dd>
          <dt>Furniture</dt>
          <dd className="ms-5 ">
            ● &nbsp; Living Room: Sofas, coffee tables, TV units. Popular brands
            include IKEA, Ashley Furniture.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Bedroom: Beds, wardrobes, bedside tables. Brands include
            Wayfair, West Elm.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Office: Desks, ergonomic chairs, bookshelves. Examples
            include Herman Miller, Steelcase.{" "}
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Outdoor: Patio sets, hammocks, garden benches. Brands like
            Home Depot, Lowe's.
          </dd>
          <dt>Cosmetics</dt>
          <dd className="ms-5 ">
            ● &nbsp; Skincare: Cleansers, moisturizers, serums. Popular brands
            include Neutrogena, The Ordinary, La Roche-Posay.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Makeup: Foundations, lipsticks, mascaras. Brands like MAC,
            Maybelline, Fenty Beauty.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Haircare: Shampoos, conditioners, styling products.
            Examples include Pantene, L'Oréal, Aveda.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Fragrances: Perfumes, colognes. Brands include Chanel,
            Dior, Tom Ford.
          </dd>
          <dt>Toys</dt>
          <dd className="ms-5 ">
            ● &nbsp; Educational Toys: STEM kits, puzzles, learning tablets.
            Popular brands include Lego, Fisher-Price, Melissa & Doug.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Action Figures: Superheroes, movie characters. Brands like
            Hasbro, Mattel.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Dolls: Barbie, American Girl, baby dolls. Examples include
            Mattel, Hasbro.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Outdoor Toys: Bikes, scooters, playhouses. Brands include
            Razor, Little Tikes.
          </dd>
          <dd className="ms-5 ">● &nbsp; </dd>
          <dt>Clothes</dt>
          <dd className="ms-5 ">
            ● &nbsp; Men's Wear: Suits, casual shirts, jeans. Brands include
            Levi's, Hugo Boss, Nike.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Women's Wear: Dresses, blouses, skirts. Popular brands
            include Zara, H&M, Gucci.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Kids' Wear: T-shirts, shorts, dresses. Brands like Gap
            Kids, Carter's.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Activewear: Sports bras, leggings, running shoes. Brands
            include Adidas, Lululemon, Under Armour.
          </dd>
          <dt>Jewelry</dt>
          <dd className="ms-5 ">
            ● &nbsp; Fine Jewelry: Gold, diamond, platinum pieces. Brands like
            Tiffany & Co., Cartier, Harry Winston.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Fashion Jewelry: Costume pieces, trendy designs. Popular
            brands include Pandora, Swarovski.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Watches: Luxury and everyday watches. Brands like Rolex,
            Omega, Casio.
          </dd>
          <dd className="ms-5 ">
            ● &nbsp; Accessories: Bracelets, necklaces, rings. Examples include
            Alex and Ani, David Yurman.
          </dd>
        </dl>
      </div>
      <div className="footerDark">
        <div className="footer-content">
          <p>&copy; 2024 SelvaCart. All rights reserved.</p>
          <p>
            Follow us on
            <a
              href="https://twitter.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Twitter
            </a>
            ,
            <a
              href="https://facebook.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Facebook
            </a>
            ,
            <a
              href="https://instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
