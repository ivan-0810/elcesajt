import React, { useEffect, useState } from "react";

export const SpinnerLoader = () => {
  const [counter, setCounter] = useState(11);
  const colors = [
    "0.3",
    "0.3",
    "0.3",
    "0.3",
    "0.3",
    "0.3",
    "0.3",
    "0.44",
    "0.65",
    "0.86",
    "0.93",
  ];
  const [random, setRandom] = useState(colors[11]);
  const [pathCollors, setPathCollors] = useState({
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPathCollors((prevState) => ({
        zero: prevState.zero === 0 ? 11 : prevState.zero - 1,
        one: prevState.one === 0 ? 11 : prevState.one - 1,
        two: prevState.two === 0 ? 11 : prevState.two - 1,
        three: prevState.three === 0 ? 11 : prevState.three - 1,
        four: prevState.four === 0 ? 11 : prevState.four - 1,
        five: prevState.five === 0 ? 11 : prevState.five - 1,
        six: prevState.six === 0 ? 11 : prevState.six - 1,
        seven: prevState.seven === 0 ? 11 : prevState.seven - 1,
        eight: prevState.eight === 0 ? 11 : prevState.eight - 1,
        nine: prevState.nine === 0 ? 11 : prevState.nine - 1,
        ten: prevState.ten === 0 ? 11 : prevState.ten - 1,
        eleven: prevState.eleven === 0 ? 11 : prevState.eleven - 1,
      }));

      setRandom(colors[counter]);
      setCounter((prevState) => {
        if (prevState === colors.length - 1) {
          return 0;
        }
        return (prevState += 1); // eslint-disable-line
      });
    }, 50);
    return () => clearInterval(interval);
  }, [random, counter]); // eslint-disable-line

  return (
    <svg
      width="118"
      height="118"
      viewBox="0 0 118 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>loader</title>
      <path
        opacity={colors[pathCollors.zero]}
        d="M76.7005 33.0396C79.3073 33.0396 81.4205 30.9264 81.4205 28.3196C81.4205 25.7128 79.3073 23.5996 76.7005 23.5996C74.0937 23.5996 71.9805 25.7128 71.9805 28.3196C71.9805 30.9264 74.0937 33.0396 76.7005 33.0396Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.one]}
        d="M89.6809 46.0201C92.2877 46.0201 94.4009 43.9069 94.4009 41.3001C94.4009 38.6933 92.2877 36.5801 89.6809 36.5801C87.0742 36.5801 84.9609 38.6933 84.9609 41.3001C84.9609 43.9069 87.0742 46.0201 89.6809 46.0201Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.two]}
        d="M94.3997 63.7203C97.0065 63.7203 99.1197 61.6071 99.1197 59.0003C99.1197 56.3935 97.0065 54.2803 94.3997 54.2803C91.7929 54.2803 89.6797 56.3935 89.6797 59.0003C89.6797 61.6071 91.7929 63.7203 94.3997 63.7203Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.three]}
        d="M89.6809 81.4205C92.2877 81.4205 94.4009 79.3073 94.4009 76.7005C94.4009 74.0937 92.2877 71.9805 89.6809 71.9805C87.0742 71.9805 84.9609 74.0937 84.9609 76.7005C84.9609 79.3073 87.0742 81.4205 89.6809 81.4205Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.four]}
        d="M76.7005 94.4C79.3073 94.4 81.4205 92.2867 81.4205 89.68C81.4205 87.0732 79.3073 84.96 76.7005 84.96C74.0937 84.96 71.9805 87.0732 71.9805 89.68C71.9805 92.2867 74.0937 94.4 76.7005 94.4Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.five]}
        d="M58.9993 99.1197C61.6061 99.1197 63.7193 97.0065 63.7193 94.3997C63.7193 91.7929 61.6061 89.6797 58.9993 89.6797C56.3925 89.6797 54.2793 91.7929 54.2793 94.3997C54.2793 97.0065 56.3925 99.1197 58.9993 99.1197Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.six]}
        d="M41.3001 94.4C43.9069 94.4 46.0201 92.2867 46.0201 89.68C46.0201 87.0732 43.9069 84.96 41.3001 84.96C38.6933 84.96 36.5801 87.0732 36.5801 89.68C36.5801 92.2867 38.6933 94.4 41.3001 94.4Z"
        fill="#0643B7"
      />

      <path
        opacity={colors[pathCollors.seven]}
        d="M28.3196 81.4205C30.9264 81.4205 33.0396 79.3073 33.0396 76.7005C33.0396 74.0937 30.9264 71.9805 28.3196 71.9805C25.7128 71.9805 23.5996 74.0937 23.5996 76.7005C23.5996 79.3073 25.7128 81.4205 28.3196 81.4205Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.eight]}
        d="M23.6009 63.7203C26.2076 63.7203 28.3209 61.6071 28.3209 59.0003C28.3209 56.3935 26.2076 54.2803 23.6009 54.2803C20.9941 54.2803 18.8809 56.3935 18.8809 59.0003C18.8809 61.6071 20.9941 63.7203 23.6009 63.7203Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.nine]}
        d="M28.3196 46.0201C30.9264 46.0201 33.0396 43.9069 33.0396 41.3001C33.0396 38.6933 30.9264 36.5801 28.3196 36.5801C25.7128 36.5801 23.5996 38.6933 23.5996 41.3001C23.5996 43.9069 25.7128 46.0201 28.3196 46.0201Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.ten]}
        d="M41.3001 33.0396C43.9069 33.0396 46.0201 30.9264 46.0201 28.3196C46.0201 25.7128 43.9069 23.5996 41.3001 23.5996C38.6933 23.5996 36.5801 25.7128 36.5801 28.3196C36.5801 30.9264 38.6933 33.0396 41.3001 33.0396Z"
        fill="#0643B7"
      />
      <path
        opacity={colors[pathCollors.eleven]}
        d="M58.9993 28.3199C61.6061 28.3199 63.7193 26.2067 63.7193 23.5999C63.7193 20.9931 61.6061 18.8799 58.9993 18.8799C56.3925 18.8799 54.2793 20.9931 54.2793 23.5999C54.2793 26.2067 56.3925 28.3199 58.9993 28.3199Z"
        fill="#0643B7"
      />
    </svg>
  );
};
