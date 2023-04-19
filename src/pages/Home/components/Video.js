import React,{ useEffect, useRef, useState } from "react";
import { FaComment, FaHeart, FaMusic, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './video.module.scss'
import video from '~/assets/videos/Download.mp4'
import { useElementOnScreen } from "../index";



const cx = classNames.bind(styles)
const VideoInfo = () => {
  return (
    <div className="flex flex-row" >
      <img className="w-[50px] h-[50px] rounded-full" src="https://images2.thanhnien.vn/528068263637045248/2023/2/21/blackpink-jisoo-2-1676965715595447024457.jpg" alt="avt" />
      <div className="ml-3 min-w-[80%]">
        <div>
          <Link to="/" id={cx('text-title')} className=" font-bold hover:underline">
              Nguyen Xuan Truong
          </Link>
          <Link to="/" className={cx('nickname')}>
            Truong 261103 
          </Link>
        </div>
        <div className={cx('content')}>#xuhuong #phimhay #reviewphim #phimma #fyp #foryou</div>
        <div className="flex flex-row items-center">
          <div className={cx('music-icon')}><FaMusic /> </div>
          <span className={cx('music')}> nhạc nền - Mêm</span>
        </div>
      </div>
      <div>
       <Button outline small > Follow </Button>
      </div>
    </div>
  );
};

const VideoContent = () => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisibile]);

  return (
    <div className="flex flex-row" id={cx('wrapper')}>
      <video
        ref={videoRef}
        onClick={handleVideo}
        className="w-[60%] max-h-[600px] ml-[50px] rounded-md mt-4"
        src={video}
        loop
      />
      <div className="flex flex-col justify-end ml-7">
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaHeart className={cx('icon-heart')}/>
          </div>
          <span className={cx('content-icon')}>123.3K</span>
        </div>
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaComment className={cx('icon-cmt-share')}/>
          </div>
          <span className={cx('content-icon')}>124.K</span>
        </div>
        <div className="text-center">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaShare className={cx('icon-cmt-share')}/>
          </div>
          <span className={cx('content-icon')}>1000</span>
        </div>
      </div>
    </div>
  );
};
const Video = () => {
  return (
    <div className=" max-w-[600px] border-b-2 border-gray-200 pb-10 pt-10">
      <VideoInfo />
      <VideoContent  />
    </div>
  );
};

export default Video;
