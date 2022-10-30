import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode } from "swiper";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const TopPlay = () => (
  <div>TopPlay</div>
);

export default TopPlay;
