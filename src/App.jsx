import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  
  const[count, setCount]=useState(0)
  return (
    <>
    < NavBarItems count={count} />
    <TopStyle/>    
    <AllItemCards setCount={setCount} count={count}/> 
    <BottomStyle/>
    
    </>
  )   
}

function AllItemCards({setCount, count}){
  const Data=[
    {
      title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      stars:false,
      price: 114,
      description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      sale:false,
      image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
     
  },
  {
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    stars:true,
    price:566,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16",
    sale:true,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
   
  },
  {
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    stars:false,
    price:55,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    sale:true,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  
  {
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    stars:true,
    price:112,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside. ",
    sale:false,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    stars:false,
    price:679,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    sale:true,
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
   
  },
  {
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    stars:false,
    price:65,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    sale:false,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    stars:true,
   price:699,
   description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    sale:true,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
   
  },
  {
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    stars:true,
   price:59,
   description: "100% Polyester, Machine wash,100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great FitLightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away,  Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    sale:false, 
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",                                                                         
  },
  

  ];
 
return (
    <>
    <div className='all-cards'> 
      {Data.map((val,idx)=>(
        <ItemsCard prop={val} key={idx} setCount={setCount} count={count}/>
      ))}
   
 </div>
    </>
  )
}

export default App;


function TopStyle(){
  return(
    <>
    <div  className='styles'>
     <h2 className='head'>Shop in style</h2>
     <p className='subhead'>With this shop hompeage template</p>
    </div>
    </>
  )
}






function ItemsCard({prop , setCount, count}){
  const [show, setShow]=useState(true);
  function handleAddBtn(){
    setShow(!show)
    setCount(count+1) 
  }
  function handleRemBtn(){
    setShow(!show)
    setCount(count-1) 
  }
  return (
    <>
    
    <div className='items-cards'>
    <div className='number'>
    <div className='SoledItems'>
    {prop.sale && <div className='sale'><p>Sale</p></div>}
    </div>
    <img src={prop.image} alt='#'/>
     
    </div>
    <div className='product'>
      <h2 className='title'>{prop.title}</h2>
      {/* {prop.stars && <div className="stars">
                <span className="fa fa-star checked"> </span>
               <span className="fa fa-star checked"> </span>
                 <span className="fa fa-star checked"> </span>
                 <span className="fa fa-star checked"> </span>
                <span className="fa fa-star checked"> </span>
                 
                 </div>}
       */}
      
      
      <h4>${prop.price}</h4>
      <p className='Des'>{prop.description}</p>
      
    </div>
    {/* conditional rendering. */}
    {show ? (<button className='btn' onClick={handleAddBtn}>Add to Cart</button>):(
    <button className='btn' onClick={handleRemBtn}>Remove to Cart</button>)}
    {/* <button className='btn'>Add to Cart</button> */}
    {/* <button className='btn'>Add to Cart</button> */}
    </div> 
    </>  
  )
}
function BottomStyle(){
  return(
    <>
    <div  className='botstyle'>
     <p className='botpara'>Copyright © your Website 2023</p>
    </div>
    </>
  )

}

function  NavBarItems({count}){
   
  return(
    <>
    <div class="navbar">
     
   <span  className='align-items'>  <p className='SB'>Sart Bootstrap</p>
    <a href="#home" className='home'>Home</a>
    <a href="#about" className='about'>About</a>
   
  <div class="dropdown">
    <span className='shop'>Shop
    <button class="dropbtn">
      <i class="fa fa-caret-down"></i>
    </button></span> 
    <div class="dropdown-content">
      <table >
        {/* <tbody> */}
      <trow><a href="#">All Product</a><hr></hr></trow>
      <td><a href="#">Popular Items</a></td>
      <trow><a href="#">New Arrivals</a></trow>
      {/* </tbody> */}
      </table>
    </div>
    </div>
    </span>
    <div className='cart' >
    <i className="fa fa-shopping-cart" aria-hidden="true">&nbsp;</i>
    <p className='cartitem'>Cart &nbsp;</p>
    <span className='count'>{count}&nbsp;</span>
    
    </div>
    </div>
   
  
    
    </>
    
  )
    
  
};


