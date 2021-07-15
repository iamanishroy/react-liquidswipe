import React, { useState, useEffect } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./styles/style.css";

const height = window.innerHeight;
const width = window.innerWidth;
let w = width;

const getPath = (y, x, width) => {
  const anchorDistance = 200 + x * 0.5;
  const curviness = anchorDistance - 80;
  return `M${width}, ${height} H0V0h${width}v 
        ${
          y - anchorDistance
        } c0, ${curviness} , ${x} , ${curviness} , ${x} , ${anchorDistance} 
        S${width}, ${y} ,${width}, ${y + anchorDistance * 2} V ${height} z`;
};

export const Page = ({
  prev,
  current,
  next,
  theme = "#333333",
  index,
  setActive,
  gone = false,
}) => {
  const [isGone, setGone] = useState(gone);
  const [isPrevMove, setPrevMove] = useState(false);
  const [isNextMove, setNextMove] = useState(false);

  const [posL, setPosL] = useSpring(() => ({
    posX: -50,
    posY: height * 0.72 - 20,
    config: {
      mass: 3,
    },
  }));

  const [posR, setPosR] = useSpring(() => ({
    posX: w + 50,
    posY: height * 0.72 - 20,
    config: {
      mass: 3,
    },
  }));

  const [{ prevD }, setDPrevValue] = useSpring(() => ({
    prevD: gone ? getPath(0, 0, w) : getPath(height * 0.72, 0, 0),
    config: {
      mass: 3,
    },
    onRest: () => {
      if (isGone) {
        setDPrevValue(getPath(0, 0, w));
      }
    },
  }));

  const [{ nextD }, setDNextValue] = useSpring(() => ({
    nextD: gone ? getPath(0, 0, w) : getPath(height * 0.72, 0, 0),
    config: {
      mass: 3,
    },
    onRest: () => {
      if (isGone) {
        setDNextValue(getPath(0, 0, w));
      }
    },
  }));

  useEffect(() => {
    if (!gone) {
      setDPrevValue({
        prevD: getPath(height * 0.72, 48, 5),
      });
      setDNextValue({
        nextD: getPath(height * 0.72, 48, 5),
      });
      setTimeout(() => {
        setPosL({
          posX: 7,
        });
        setPosR({
          posX: w - 47,
        });
      }, 100);
    }
  }, [gone, setDPrevValue, setDNextValue, setPosL, setPosR]);

  const bind = useDrag(
    ({ down, movement: [mx], xy: [, my], vxvy: [vx] }) => {
      if (!isGone) {
        console.log(mx);

        if (down && isPrevMove) {
          setDPrevValue({
            prevD: getPath(my, mx + 60, 10),
          });
          setPosL({
            posX: mx + 20,
            posY: my - 20,
          });
          if (mx > width / 2 || vx > 3) {
            setDPrevValue({
              prevD: getPath(my, -50, w),
            });
            setGone(true);
            setTimeout(() => {
              setDPrevValue({
                prevD: getPath(my, 0, w),
              });
              setActive(index - 1);
            }, 240);
          }
        } else if (down && isNextMove) {
          mx = Math.abs(mx);
          setDNextValue({
            nextD: getPath(my, mx + 60, 10),
          });
          setPosR({
            posX: w - (mx + 60),
            posY: my - 20,
          });
          if (Math.abs(mx) > width / 2 || vx < -3) {
            setDNextValue({
              nextD: getPath(my, -50, w),
            });
            setGone(true);
            setTimeout(() => {
              setDNextValue({
                nextD: getPath(my, 0, w),
              });
              setActive(index + 1);
            }, 240);
          }
        } else {
          setDPrevValue({
            prevD: getPath(height * 0.72, 48, 5),
          });
          setPosL({
            posX: 7,
            posY: height * 0.72 - 20,
          });
          setDNextValue({
            nextD: getPath(height * 0.72, 48, 5),
          });
          setPosR({
            posX: w - 47,
            posY: height * 0.72 - 20,
          });
        }
      }
    },
    {
      useTouch: width <= 414,
    }
  );
  return (
    <div id={`pageContainer${index}`} {...bind()}>
      <svg
        className="lqsw_svg"
        style={{
          zIndex: 204,
        }}
        version="1.1"
        id="blob"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id={`clipping${index}`}>
          <animated.path id={`blob-path${index}`} d={prevD} />
        </clipPath>
      </svg>
      <svg
        className="lqsw_svg"
        style={{
          zIndex: 204,
        }}
        version="1.1"
        id="blob"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id={`clippingRight${index}`}>
          <animated.path
            transform={`translate(${w}, 0) scale(-1, 1)`}
            id={`blob-path${index}`}
            d={nextD}
          />
        </clipPath>
      </svg>

      {prev && (
        <>
          <div
            className="lqsw_page"
            style={{
              clipPath: `url(#clipping${index})`,
              WebkitClipPath: `url(#clipping${index})`,
              zIndex: 201,
            }}
          >
            {prev}
          </div>
          <animated.button
            className="lqsw_button"
            id={`button1i${index}`}
            color={theme}
            onMouseDown={() => {
              setPrevMove(true);
            }}
            onMouseUp={() => {
              setPrevMove(false);
            }}
            onTouchStart={() => {
              setPrevMove(true);
            }}
            onTouchEnd={() => {
              setPrevMove(false);
            }}
            style={{
              opacity: posL.posX.interpolate({
                range: [0, 100],
                output: [1, 0],
              }),
              zIndex: 205,
              transform: interpolate(
                [
                  posL.posX.interpolate((x) => `translateX(${x}px)`),
                  posL.posY.interpolate((y) => `translateY(${y}px)`),
                ],
                (translateX, translateY) => `${translateX} ${translateY}`
              ),
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6308 13.131C16.5743 13.189 16.3609 13.437 16.1622 13.641C14.9971 14.924 11.9576 17.024 10.3668 17.665C10.1252 17.768 9.51437 17.986 9.18802 18C8.8753 18 8.5772 17.928 8.29274 17.782C7.93814 17.578 7.65368 17.257 7.49781 16.878C7.39747 16.615 7.2416 15.828 7.2416 15.814C7.08573 14.953 7 13.554 7 12.008C7 10.535 7.08573 9.193 7.21335 8.319C7.22796 8.305 7.38383 7.327 7.55431 6.992C7.86702 6.38 8.47784 6 9.13151 6H9.18802C9.61374 6.015 10.509 6.395 10.509 6.409C12.0141 7.051 14.9834 9.048 16.1768 10.375C16.1768 10.375 16.5129 10.716 16.659 10.929C16.887 11.235 17 11.614 17 11.993C17 12.416 16.8724 12.81 16.6308 13.131Z"
                fill="#130F26"
              />
            </svg>
          </animated.button>
        </>
      )}
      <div
        className="lqsw_page"
        style={{
          zIndex: 200,
        }}
      >
        <>{current}</>
      </div>
      {next && (
        <>
          <div
            className="lqsw_page"
            style={{
              clipPath: `url(#clippingRight${index})`,
              WebkitClipPath: `url(#clippingRight${index})`,
              zIndex: 202,
            }}
          >
            {next}
          </div>
          <animated.button
            className="lqsw_button"
            id={`button2i${index}`}
            color={theme}
            onMouseDown={() => {
              setNextMove(true);
            }}
            onMouseUp={() => {
              setNextMove(false);
            }}
            onTouchStart={() => {
              setNextMove(true);
            }}
            onTouchEnd={() => {
              setNextMove(false);
            }}
            style={{
              opacity: posR.posX.interpolate({
                range: [w - 40, w - 140],
                output: [1, 0],
              }),
              zIndex: 205,
              transform: interpolate(
                [
                  posR.posX.interpolate((x) => `translateX(${x}px)`),
                  posR.posY.interpolate((y) => `translateY(${y}px)`),
                ],
                (translateX, translateY) => `${translateX} ${translateY}`
              ),
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.36922 10.869C7.42572 10.811 7.63906 10.563 7.8378 10.359C9.00292 9.076 12.0424 6.976 13.6332 6.335C13.8748 6.232 14.4856 6.014 14.812 6C15.1247 6 15.4228 6.072 15.7073 6.218C16.0619 6.422 16.3463 6.743 16.5022 7.122C16.6025 7.385 16.7584 8.172 16.7584 8.186C16.9143 9.047 17 10.446 17 11.992C17 13.465 16.9143 14.807 16.7867 15.681C16.772 15.695 16.6162 16.673 16.4457 17.008C16.133 17.62 15.5222 18 14.8685 18H14.812C14.3863 17.985 13.491 17.605 13.491 17.591C11.9859 16.949 9.01656 14.952 7.82319 13.625C7.82319 13.625 7.48709 13.284 7.34096 13.071C7.11301 12.765 7 12.386 7 12.007C7 11.584 7.12762 11.19 7.36922 10.869Z"
                fill="#130F26"
              />
            </svg>
          </animated.button>
        </>
      )}
    </div>
  );
};
