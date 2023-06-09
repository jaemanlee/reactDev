import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";



const setImgScale = (event,flag)=> {
  if(flag){
    event.currentTarget.style.scale=1.2;
  }else{
    event.currentTarget.style.scale='';
  }
}


const SwiperPage = () => {
    return(
      <>
         <Swiper style={{height :'480px'}}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 3000,
                     disableOnInteraction: false, }}
         breakpoints={{
          500:{
            slidesPerView:1            
            },

          700:{
        slidesPerView:2             
        },
        1000:{
        slidesPerView:4
        }
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={'/img/AB03/AB03_CODE.jpg'} style={{height:'450px'}} title="aaaa" onMouseEnter={(event)=>{setImgScale(event,true)}} onMouseLeave={(event)=>{setImgScale(event,false)}} alt="미미미"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/img/AB03/AB03_CODE.jpg`} style={{height:'450px'}}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/img/AB03/AB03_CODE.jpg`} style={{height:'450px'}}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/AB03/AB03_CODE.jpg`} style={{height:'450px'}}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/AB03/AB03_CODE.jpg`} style={{height:'450px'}}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/AB03/AB03_CODE.jpg`} style={{height:'450px'}}></img>
        </SwiperSlide>
      </Swiper>
    </>
    );
}



export default SwiperPage;