import React, {useEffect, useState} from 'react';
import {Path, G, Ellipse} from 'react-native-svg';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  setTimeout(() => {
    setDate(new Date());
  }, 1000);

  return (
    <>
      <Path
        d="M15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30ZM15 29.5161C23.017 29.5161 29.5 23.017 29.5 15C29.5 6.98296 23.017 0.48389 15 0.48389C6.98296 0.48389 0.483871 6.98298 0.483871 15C0.483871 23.0171 6.98296 29.5161 15 29.5161Z"
        fill="#9a3412"
      />

      <G>
        <Ellipse cx="15" cy="2.72066" rx="0.387097" ry="1.54" fill="#ea580c" />
        <Ellipse
          cx="8.86033"
          cy="4.36572"
          rx="0.387097"
          ry="1.54"
          transform="rotate(-30 8.86033 4.36572)"
          fill="#ea580c"
        />
        <Ellipse
          cx="4.36577"
          cy="8.8603"
          rx="0.387097"
          ry="1.54"
          transform="rotate(-60 4.36577 8.8603)"
          fill="#ea580c"
        />
        <Ellipse
          cx="2.72064"
          cy="15.0001"
          rx="0.387097"
          ry="1.54"
          transform="rotate(-90 2.72064 15.0001)"
          fill="#ea580c"
        />
        <Ellipse
          cx="4.36577"
          cy="21.1396"
          rx="0.387097"
          ry="1.54"
          transform="rotate(-120 4.36577 21.1396)"
          fill="#ea580c"
        />
        <Ellipse
          cx="8.86031"
          cy="25.6341"
          rx="0.387097"
          ry="1.54"
          transform="rotate(-150 8.86031 25.6341)"
          fill="#ea580c"
        />
        <Ellipse
          cx="15"
          cy="27.2793"
          rx="0.387097"
          ry="1.54"
          transform="rotate(180 15 27.2793)"
          fill="#ea580c"
        />
        <Ellipse
          cx="21.1397"
          cy="25.6343"
          rx="0.387097"
          ry="1.54"
          transform="rotate(150 21.1397 25.6343)"
          fill="#ea580c"
        />
        <Ellipse
          cx="25.6342"
          cy="21.1397"
          rx="0.387097"
          ry="1.54"
          transform="rotate(120 25.6342 21.1397)"
          fill="#ea580c"
        />
        <Ellipse
          cx="27.2794"
          cy="15.0001"
          rx="0.387097"
          ry="1.54"
          transform="rotate(90 27.2794 15.0001)"
          fill="#ea580c"
        />
        <Ellipse
          cx="25.6342"
          cy="8.86036"
          rx="0.387097"
          ry="1.54"
          transform="rotate(60 25.6342 8.86036)"
          fill="#ea580c"
        />
        <Ellipse
          cx="21.1397"
          cy="4.36585"
          rx="0.387097"
          ry="1.54"
          transform="rotate(30 21.1397 4.36585)"
          fill="#ea580c"
        />
      </G>

      <G transform={`rotate(${date.getSeconds() * 6} 15 15)`}>
        <Path
          d="M15.3 14.6838C15.3952 14.7722 15.4838 14.8984 15.4838 15.0386C15.4838 15.3058 15.2672 15.5225 15 15.5225C14.7327 15.5225 14.5161 15.3058 14.5161 15.0386C14.5161 14.8984 14.6048 14.7722 14.7 14.6838V4.03859C14.7 3.85687 14.8182 3.70956 15 3.70956C15.1817 3.70956 15.3 3.85687 15.3 4.03859V14.6838Z"
          fill="#ea580c"
        />
      </G>

      <G transform={`rotate(${date.getMinutes() * 6} 15 15)`}>
        <Path
          d="M15.329 14.6838C15.4242 14.7722 15.4838 14.8984 15.4838 15.0386C15.4838 15.3058 15.2672 15.5225 15 15.5225C14.7327 15.5225 14.5161 15.3058 14.5161 15.0386C14.5161 14.8984 14.5757 14.7722 14.6709 14.6838V6.03859C14.6709 5.85687 14.8182 5.70956 15 5.70956C15.1817 5.70956 15.329 5.85687 15.329 6.03859V14.6838Z"
          fill="#ea580c"
        />
      </G>
      <G
        transform={`rotate(${
          (date.getHours() + date.getMinutes() / 60) * 30
        } 15 15)`}>
        <Path
          d="M14.9997 7.62012C14.7436 7.62012 14.5359 7.82775 14.5359 8.08389L14.5359 14.6925C14.4631 14.7894 14.42 14.9099 14.42 15.0404C14.42 15.3606 14.6795 15.6201 14.9997 15.6201C15.3199 15.6201 15.5794 15.3606 15.5794 15.0404C15.5794 14.9099 15.5363 14.7894 15.4635 14.6925L15.4635 8.08389C15.4635 7.82775 15.2558 7.62012 14.9997 7.62012Z"
          fill="#ea580c"
        />
      </G>
    </>
  );
};
