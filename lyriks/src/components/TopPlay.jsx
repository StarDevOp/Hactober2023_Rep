import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard=({song,i})=>{
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
  
  </div>
}

const TopPlay = () => (
  <div>TopPlay</div>
);

export default TopPlay;
