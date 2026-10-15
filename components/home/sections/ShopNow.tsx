import { assetPath } from "@/lib/asset-path";
/* eslint-disable @next/next/no-img-element */ 
import { Card, CardContent } from "@/components/ui/card"; 
import Container from "@/components/ui/container"; 
 
const assetBase = assetPath("/assets/images/"); 
 
const shopItems = [ 
  { 
    title: "Grocery Essentials", 
    image: `${assetBase}grocery.png`, 
    imageClassName: "absolute left-16 top-[84px] h-[219px] w-[177px] object-cover", 
  }, 
  { 
    title: "Packaged\n Foods", 
    image: `${assetBase}packaged.png`, 
    secondaryImage: `${assetBase}packaged-secondary.png`, 
    imageClassName: "absolute left-[17px] top-0 h-[225px] w-[200px] object-cover", 
    secondaryImageClassName: "absolute left-0 top-9 h-[180px] w-[87px] object-cover", 
  }, 
  { 
    title: "Dairy &\n Eggs", 
    image: `${assetBase}milk-(1).png`, 
    secondaryImage: `${assetBase}eggs-(1).png`, 
    imageClassName: "absolute left-0 top-0 h-[217px] w-28 object-cover", 
    secondaryImageClassName: "absolute left-[43px] top-[110px] h-[101px] w-[149px] object-cover", 
  }, 
  { 
    title: "Beverages", 
    image: `${assetBase}beverages.png`, 
    imageClassName: "absolute left-0 top-0 h-[218px] w-[238px] object-cover", 
  }, 
  { 
    title: "Baking\n Essentials", 
    image: `${assetBase}baking.png`, 
    secondaryImage: `${assetBase}baking-secondary.png`, 
    imageClassName: "absolute left-0 top-0 h-[220px] w-28 object-cover", 
    secondaryImageClassName: "absolute left-[43px] top-[40px] h-[174px] w-[149px] object-contain", 
  }, 
]; 
 
const imageWrapperClasses = [ 
  "contents", 
  "absolute left-10.75 top-21 h-56.25 w-54.25 max-[320px]:scale-[0.85] max-[320px]:origin-top-left", 
  "absolute left-16 top-21 h-54.5 w-48 max-[320px]:scale-[0.85] max-[320px]:origin-top-left", 
  "absolute left-8.25 top-23.75 h-54.5 w-59.5 max-[320px]:scale-[0.85] max-[320px]:origin-top-left", 
  "absolute left-16 top-21 h-54.5 w-48 max-[320px]:scale-[0.85] max-[320px]:origin-top-left", 
]; 
 
export const ShopNow = () => { 
  return ( 
    <Container className="mt-10 sm:mt-12 lg:mt-16" aria-labelledby="shop-now"> 
      <h2 id="shop-now" className="mb-5 text-[24px] font-semibold leading-tight text-primary sm:mb-6 sm:text-[28px] lg:text-[32px]"> 
        Shop Now 
      </h2> 
 
      <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[920px]:grid-cols-3 min-[1490px]:grid-cols-5 sm:gap-5"> 
        {shopItems.map((item, index) => ( 
          <Card key={item.title} className="relative h-[clamp(360px,112vw,432px)] overflow-hidden rounded-3xl border-0 bg-transparent shadow-none sm:h-108"> 
            <CardContent 
              className="relative h-full p-0" 
              style={{ background: "radial-gradient(126.44% 113.86% at 59.06% 5.81%, #FFF0CF 0%, #F2C86C 52%, #F2B634 100%)" }} 
            > 
              <div className="absolute bottom-[-10] left-4px h-44.75 w-full rounded-[24px_24px_32px_32px] bg-[#fff2d7]" /> 
 
              <div className={imageWrapperClasses[index] || "contents"}> 
                {item.secondaryImage && ( 
                  <img className={item.secondaryImageClassName} alt={`${item.title} secondary`} src={item.secondaryImage} /> 
                )} 
                <img className={item.imageClassName} alt={item.title} src={item.image} /> 
              </div> 
 
              <h3 className="absolute bottom-6 left-1/2 w-[82%] -translate-x-1/2 whitespace-pre-line text-center text-lg font-semibold text-black sm:bottom-8 sm:text-[22px] lg:w-[75%] lg:text-2xl"> 
                {item.title} 
              </h3> 
            </CardContent> 
          </Card> 
        ))} 
      </div> 
    </Container> 
  ); 
};