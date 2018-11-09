<template>
    <div class="clothing">
        <div class="navBanner">
             <el-carousel height="341px"  :interval="30000" indicator-position="outside">
                                  <el-carousel-item >
                                    <img class="phonImg" src="../statics/site/img/banner-3.png" alt="">
                                  </el-carousel-item>
                                   <el-carousel-item   >
                                    <img class="phonImg" src="../statics/site/img/banner-4.jpg" alt="">
                                  </el-carousel-item>
                                   <el-carousel-item   >
                                    <img class="phonImg" src="../statics/site/img/banner-1.jpg" alt="">
                                  </el-carousel-item>
                                   <el-carousel-item   >
                                    <img class="phonImg" src="../statics/site/img/banner-2.png" alt="">
                                  </el-carousel-item>
                                  
                                </el-carousel>  
        </div>
        <div class="banner-area">

            <div class="container">
                 <div class="row">
                    <div class="col-md-12">
                        <div class="section-title"><h2>热卖单品</h2></div>
                    </div>
                </div>
                <div class="section-padding">
                    <div class="row">
                        <div class="col-md-5 col-sm-5">
                            <div class="banner-container">
                                <a href="#">
                                    <img src="../statics/site/img/product/6.jpg" alt="">
                                </a>    
                                <div class="banner-text">
                                    <h3>潮牌大牌</h3>
                                    <p>我们尽可能的为你推荐最潮流的服装搭配</p>
                                    <a href="#">查看所有潮牌</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-7">
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="banner-box">
                                        <a href="#">
                                            <img src="../statics/site/img/banner/2.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="banner-box">
                                        <a href="#">
                                            <img src="../statics/site/img/banner/3.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="banner-box">
                                        <a href="#">
                                            <img src="../statics/site/img/banner/4.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="banner-box">
                                        <a href="#">
                                            <img src="../statics/site/img/banner/5.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <div class="content">
            <div class="section-title"><h2>新品服装</h2></div>
            <ul>
                <li>
                     <div class="single-product-item">
                         <div class="sale-product-label"><span>新品</span></div>
                         <div class="single-product clearfix">
                             <a href="#">
                                 <span class="product-image">
                                     <img src="../statics/site/img/product/1.jpg" alt="">
                                 </span>
                                 <span class="product-image hover-image">
                                     <img src="../statics/site/img/product/2.jpg" alt="">
                                 </span>   
                                 <div class="timer">
                                     <div data-countdown="2022/01/01" class="timer-grid"></div>
                                 </div>
                             </a>
                         </div>
                         <h2 class="single-product-name"><a href="#">歌珀莱品牌女装</a></h2>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥1299.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥999.00</span>
						    </p> 											
                         </div>
                     </div>
                </li>
                <li>
                     <div class="single-product-item">
                         <div class="sale-product-label"><span>新品</span></div>
                         <div class="single-product clearfix">
                             <a href="#">
                                 <span class="product-image">
                                     <img src="../statics/site/img/product/2.jpg" alt="">
                                 </span>
                                 <span class="product-image hover-image">
                                     <img src="../statics/site/img/product/3.jpg" alt="">
                                 </span>   
                                 <div class="timer">
                                     <div data-countdown="2022/01/01" class="timer-grid"></div>
                                 </div>
                             </a>
                         </div>
                         <h2 class="single-product-name"><a href="#">GUCCI 古驰 女装套装</a></h2>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥3199.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥2299.00</span>
						    </p> 											
                         </div>
                     </div>
                </li>
                <li>
                     <div class="single-product-item">
                         <div class="sale-product-label"><span>新品</span></div>
                         <div class="single-product clearfix">
                             <a href="#">
                                 <span class="product-image">
                                     <img src="../statics/site/img/product/4.jpg" alt="">
                                 </span>
                                 <span class="product-image hover-image">
                                     <img src="../statics/site/img/product/5.jpg" alt="">
                                 </span>   
                                 <div class="timer">
                                     <div data-countdown="2022/01/01" class="timer-grid"></div>
                                 </div>
                             </a>
                         </div>
                         <h2 class="single-product-name"><a href="#">BURBERRY/ 巴宝莉 休闲衬衫</a></h2>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥1239.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥899</span>
						    </p> 											
                         </div>
                     </div>
                </li>
                <li>
                     <div class="single-product-item">
                         <div class="sale-product-label"><span>新品</span></div>
                         <div class="single-product clearfix">
                             <a href="#">
                                 <span class="product-image">
                                     <img src="../statics/site/img/product/6.jpg" alt="">
                                 </span>
                                 <span class="product-image hover-image">
                                     <img src="../statics/site/img/product/7.jpg" alt="">
                                 </span>   
                                 <div class="timer">
                                     <div data-countdown="2022/01/01" class="timer-grid"></div>
                                 </div>
                             </a>
                         </div>
                         <h2 class="single-product-name"><a href="#">Armani阿玛尼男装 套装</a></h2>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥3338.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥2888.00</span>
						    </p> 											
                         </div>
                     </div>
                </li>
            </ul>
        </div>
        <div class="sub-content">
            <div class="section-title"><h2>运动专区</h2></div>
            <ul>
                        <li>
                            <div class="single-product-item">
                                    <div class="sale-product-label"><span>折扣</span></div>
                                    <div class="single-product clearfix sub-product">
                                        <a href="#">
                                            <span class="product-image">
                                                <img src="//img14.360buyimg.com/n1/jfs/t8140/313/298001309/344810/c56b3d9/59a54143N0d336374.jpg" alt="">
                                            </span>
                                            <span class="product-image hover-image">
                                                <img src="//img14.360buyimg.com/n1/jfs/t9115/318/307085133/387836/490144f/59a54144N031fd5b8.jpg" alt="">
                                            </span>
                                        </a>
                                        <div class="button-actions clearfix" >	
                                            <button class="button add-to-cart"  style='opacity:0' type="button">
                                                <span><i class="fa fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                    <h2 class="single-product-name"><a href="#"> 亚瑟士跑鞋ASICS 蓝色 </a></h2>
                                    <div class="price-box">
                                        <p class="old-price">
                                            <span class="price">￥888.00</span>
                                        </p>
                                        <p class="special-price">
                                            <span class="price">￥588.00</span>
                                        </p> 											
                                    </div>
                                </div>
                         </li>
                           <li>
                            <div class="single-product-item">
                                    <div class="sale-product-label"><span>折扣</span></div>
                                    <div class="single-product clearfix sub-product">
                                        <a href="#">
                                            <span class="product-image">
                                                <img src="//img13.360buyimg.com/n1/jfs/t19873/203/2671029117/269990/3cc35f8/5b4c51d5Nc3c798b1.jpg" alt="">
                                            </span>
                                            <span class="product-image hover-image">
                                                <img src="//img13.360buyimg.com/n1/jfs/t5833/113/8895340260/364519/1fa22d97/598022c9Nd5578aca.jpg" alt="">
                                            </span>
                                        </a>
                                        <div class="button-actions clearfix" >	
                                            <button class="button add-to-cart"  style='opacity:0' type="button">
                                                <span><i class="fa fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                    <h2 class="single-product-name"><a href="#"> 耐克NIKE 女子 跑步鞋 深乌紫色 </a></h2>
                                    <div class="price-box">
                                        <p class="old-price">
                                            <span class="price">￥1288.00</span>
                                        </p>
                                        <p class="special-price">
                                            <span class="price">￥899.00</span>
                                        </p> 											
                                    </div>
                                </div>
                         </li>
                           <li>
                            <div class="single-product-item">
                                    <div class="sale-product-label"><span>折扣</span></div>
                                    <div class="single-product clearfix sub-product">
                                        <a href="#">
                                            <span class="product-image">
                                                <img src="//img13.360buyimg.com/n1/jfs/t2635/262/216620417/100374/566992c7/5707f573N6cd07885.jpg" alt="">
                                            </span>
                                            <span class="product-image hover-image">
                                                <img src="//img13.360buyimg.com/n1/jfs/t2764/70/198165020/166185/fd5c51cb/5707f583Nf40f42ab.jpg" alt="">
                                            </span>
                                        </a>
                                        <div class="button-actions clearfix" >	
                                            <button class="button add-to-cart"  style='opacity:0' type="button">
                                                <span><i class="fa fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                    <h2 class="single-product-name"><a href="#"> NEW BALANCE（NB）MRL996KC 运动鞋 </a></h2>
                                    <div class="price-box">
                                        <p class="old-price">
                                            <span class="price">￥1318.00</span>
                                        </p>
                                        <p class="special-price">
                                            <span class="price">￥819.00</span>
                                        </p> 											
                                    </div>
                                </div>
                         </li>
                           <li>
                            <div class="single-product-item">
                                    <div class="sale-product-label"><span>折扣</span></div>
                                    <div class="single-product clearfix sub-product">
                                        <a href="#">
                                            <span class="product-image">
                                                <img src="//img11.360buyimg.com/n1/jfs/t1/3114/33/11218/142070/5bcee232Efa075ff0/50cd670a06b970e6.jpg" alt="">
                                            </span>
                                            <span class="product-image hover-image">
                                                <img src="//img11.360buyimg.com/n1/jfs/t1/9080/40/1585/116212/5bcee233E424ee9f5/8a129158d9c6445d.jpg" alt="">
                                            </span>
                                        </a>
                                        <div class="button-actions clearfix" >	
                                            <button class="button add-to-cart"  style='opacity:0' type="button">
                                                <span><i class="fa fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                    <h2 class="single-product-name"><a href="#"> Adidas阿迪达斯新款女童透气魔术贴运动跑步鞋 </a></h2>
                                    <div class="price-box">
                                        <p class="old-price">
                                            <span class="price">￥788.00</span>
                                        </p>
                                        <p class="special-price">
                                            <span class="price">￥428.00</span>
                                        </p> 											
                                    </div>
                                </div>
                         </li>
            </ul>
        </div>
        <div class="packa">
            <div class="section-title"><h2>品牌名包</h2></div>
            <ul>
                <li>
                    <div class="banner-box" style='position:relative'>
                        <div class="sale-product-label"><span>促销</span></div>
                        <a href="#">
                            <img src="//img10.360buyimg.com/n1/jfs/t21526/13/143427030/165607/6b2da3c1/5afe97d9N59fe7c15.jpg" alt="">
                                </a>
                         <p class="title" style='font-size:14px'>COACH 蔻驰 欧美时尚印花</p>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥2238.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥1698.00</span>
						    </p> 											
                         </div>
                        
                     </div>
                </li>
                 <li>
                    <div class="banner-box" style='position:relative'>
                        <div class="sale-product-label"><span>促销</span></div>
                        <a href="#">
                            <img src="//img13.360buyimg.com/n5/s450x450_jfs/t23458/241/924751081/161594/95e9393d/5b485f02Ndd197751.jpg" alt="">
                                </a>
                         <p class="title" style='font-size:14px'>LV路易威登男包 M61692花款</p>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥9880.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥6380.00</span>
						    </p> 											
                         </div>
                        
                     </div>
                </li>
                 <li>
                    <div class="banner-box" style='position:relative'>
                        <div class="sale-product-label"><span>促销</span></div>
                        <a href="#">
                            <img src="//img13.360buyimg.com/n1/jfs/t1/3302/40/12533/313643/5bd450adEf547adf2/59a58470eb6910aa.jpg" alt="">
                                </a>
                         <p class="title" style='font-size:14px'>VH女包单肩包 拼色个性百搭小方包</p>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥1338.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥1198.00</span>
						    </p> 											
                         </div>
                        
                     </div>
                </li>
                 <li>
                    <div class="banner-box" style='position:relative'>
                        <div class="sale-product-label"><span>促销</span></div>
                        <a href="#">
                            <img src="//img10.360buyimg.com/n1/jfs/t7906/267/4376567993/296228/36485ab6/5a056924N5fe6e323.jpg" alt="">
                                </a>
                         <p class="title" style='font-size:14px'>MICHAEL KORS 迈克 科尔斯 MK女包 </p>
                         <div class="price-box">
						    <p class="old-price">
						        <span class="price">￥2990.00</span>
						    </p>
						    <p class="special-price">
                                 <span class="price">￥2390.00</span>
						    </p> 											
                         </div>
                        
                     </div>
                </li>
            </ul>
        </div>
        <div class="brand-area">
            <div class="container">
                <div class="section-title"><h2>品牌大牌</h2></div>
                <div class="brand-content">
                    <div class="row">
                        <div class="brand-carousel">
                            <div class="col-md-2">
                                <div class="single-brand">
                                    <a href="#">
                                        <img src="../statics/site/img/brand/1.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="single-brand">
                                    <a href="#">
                                        <img src="../statics/site/img/brand/2.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="single-brand">
                                    <a href="#">
                                        <img src="../statics/site/img/brand/3.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="single-brand">
                                    <a href="#">
                                        <img src="../statics/site/img/brand/4.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="single-brand">
                                    <a href="#">
                                        <img src="../statics/site/img/brand/5.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="single-brand">
                                    <a href="#">
                                        <img src="../statics/site/img/brand/6.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<style scoped>
.clothing {
  background-color: #fff;
}
.clothing  el-carousel{
    width: 1256px;
    height: 370px;

}
.clothing .phonImg{
    width: 1256px;
    height: 370px;
    margin:0 auto;
    display: block;
}
label {
  font-weight: 400;
}
.section-padding {
  padding-bottom: 50px;
}
.section-top-padding {
  padding-top: 50px;
}
.section-bottom-padding {
  padding-bottom: 50px;
}
.section-title {
  margin-bottom: 40px;
  position: relative;
  padding-top: 50px;
}
.section-title::after {
  background: #f3f3f3 none repeat scroll 0 0;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 100%;
  z-index: 1;
}
.section-title h2 {
  background: #ffffff none repeat scroll 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 17px;
  margin: 0;
  padding-right: 20px;
  text-transform: uppercase;
  z-index: 2;
  position: relative;
}
.area-padding {
  margin-top: 30px;
}

.banner-container {
  position: relative;
}
.banner-container > a {
  display: block;
  position: relative;
}
.banner-container > a::before {
  background: rgba(0, 0, 0, 0.4) none repeat scroll 0 0;
  bottom: 0;
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 300ms ease-in-out 0s;
  visibility: hidden;
  width: 100%;
  z-index: 9;
}
.banner-container:hover a:before {
  opacity: 1;
  visibility: visible;
}
.banner-text {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  bottom: 46px;
  color: #ffffff;
  height: auto;
  left: 30px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  right: 30px;
  text-align: left;
  transition: all 300ms ease-in-out 0s;
  visibility: hidden;
}
.banner-text h3 {
  color: #ffffff;
  font-weight: bold;
}
.banner-text a {
  color: #ffffff;
  float: right;
  text-decoration: underline;
}
.banner-text a:hover {
  color: #e03550;
}
.banner-container:hover .banner-text {
  visibility: visible;
  opacity: 1;
  z-index: 99;
}
.banner-container img {
  height: 530px;
  width: 457px;
}
.banner-area .banner-box {
  display: block;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.banner-box a {
  display: block;
  overflow: hidden;
  position: relative;
  height: 250px;
  width: 311px;
}
.banner-box a img {
  transition: all 300ms ease-in-out 0s;
  height: 250px;
  width: 311px;
}
.banner-box a:hover img {
  transform: scale(1.05);
}
.banner-area .col-md-7 .row:first-child .col-md-6 .banner-box {
  margin-bottom: 30px;
}

/* //内容部分 */
.content,.sub-content,.packa{
    width: 1145px;
    margin:0 auto;
    height: 620px;
}
.packa{
    height: 550px;
}
.content ul li{
    float: left;
    width: 263px;
    height: 354px;
    margin-right: 30px;
}
.sub-content ul li:nth-child(4),
.content ul li:nth-child(4),
.packa ul li:nth-child(4){
    margin:0;
}
.content ul li a {
    width: 100%;

}
.sub-content ul li,
.packa ul li{
 float: left;
 width: 263px;
 height: 400px;
 margin-right: 30px;
}
.packa ul li {
    height: 300px;
     margin-right: 30px;
}
.packa ul li img{
    width: 263px;
}

.product-carousel .col-md-3,
.brand-carousel.owl-carousel .col-md-2,
.blog-carousel .col-md-4 {
  width: 100%;
}
.single-product-item {
  line-height: normal;
  position: relative;
}
.brand-carousel .col-md-2{
    margin-bottom: 80px;
}
.new-product-label,
.sale-product-label {
  background-color: #e03550;
  color: #ffffff;
  font-size: 13px;
  left: 15px;
  padding: 2px 10px;
  position: absolute;
  text-transform: uppercase;
  top: 15px;
  z-index: 10;
}
.new-product-label {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #d5d5d5;
  color: #69686c;
}
.single-product {
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.single-product > a {
  display: block;
  float: left;
  width: 100%;
  z-index: 1;
}
.sub-product{
    height: 300px;
}
.single-product > a .product-image {
  display: block;
  width: 100%;
}
.single-product > a .product-image img {
  width: 100%;
}
.single-product > a .hover-image {
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
}
.single-product-item:hover .hover-image {
  opacity: 1;
}
.single-product-item .button-actions {
  bottom: 30px;
  height: 48px;
  left: 2px;
  position: absolute;
  width: 48px;
}
.single-product-item .button-actions:hover button{
    opacity: 1;
}
.single-product-item .button-actions button.button {
  float: left;
}
.single-product:hover .button.add-to-cart{
     opacity: 1!important;
     
}
.single-product-item .button-actions .add-to-links li a,
.single-product-item .button-actions button.button span {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background-color: #ffffff;
  border-color: #eeeeee -moz-use-text-color #eeeeee #eeeeee;
  -webkit-border-bottom-colors: none;
  -webkit-border-left-colors: none;
  -webkit-border-right-colors: none;
  -webkit-border-top-colors: none;
  border-color: #eeeeee;
  border-image: none;
  border-style: solid none solid solid;
  border-width: 1px 0 1px 1px;
  color: #68696c;
  cursor: pointer;
  display: block;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  opacity: 0;
  padding: 0;
  text-align: center;
  transform: scale(0.2);
  transition: all 250ms cubic-bezier(1, -0.6, 0.57, -0.15) 0s;
  visibility: hidden;
  width: 48px;
}
.single-product-item:hover .button-actions .add-to-links li a,
.single-product-item:hover .button-actions button.button span {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
}
.add-to-links li {
  display: inline;
}
.single-product-item .button-actions .add-to-links li a.link-wishlist {
  transition-delay: 0.3s;
}
.single-product-item .button-actions .add-to-links li a.link-compare {
  border-right: 1px solid #eeeeee;
  transition-delay: 0.4s;
}
button.button span,
.add-to-links li a,
.btn-quickview {
  transition: all 4ms linear 0s;
}
.single-product-item .button-actions .add-to-links li a:hover,
.single-product-item .button-actions button.button:hover span,
.header-r-cart.header-cart-two > li > a:hover {
  color: #e03550;
}
.single-product-name a {
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
}
.price-box {
  color: #69686c;
  font-size: 18px;
  margin: 5px 0 0;
}
p.old-price,
p.special-price {
  display: inline-block;
  vertical-align: top;
  margin: 0 10px 0 0;
}
.old-price .price {
  color: #b1b1b1;
  font-size: 16px;
  text-decoration: line-through;
}

.blog-carousel .image-blog {
  display: inline-block;
  margin-bottom: 25px;
}
.blog-carousel .owl-buttons {
  display: none;
}
.single-blog {
  position: relative;
}
.single-blog .date-time {
  background: #f4f4f4 none repeat scroll 0 0;
  border: 1px solid #d0d0d0;
  font-size: 14px;
  font-weight: bold;
  height: 53px;
  left: 0;
  line-height: 1.1;
  min-width: 53px;
  padding: 10px 0;
  position: absolute;
  text-align: center;
  top: 0;
}
.single-blog .date-time .days {
  display: block;
}
.single-blog .date-time .months {
  font-weight: normal;
}
.single-blog .blog-title {
  display: block;
  margin-left: 70px;
  min-height: 50px;
  padding: 10px 0 0;
}
.single-blog .blog-title span {
  display: block;
  font-family: Lato, arial;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: capitalize;
}
.single-blog p {
  font-size: 1em;
  line-height: 1.5em;
}
.single-blog p.author {
  margin: 20px 0 10px;
}
</style>