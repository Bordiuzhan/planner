function ArrowIcon({ type }) {
  if (type === 'up') {
    return (
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1L5 11M5 1L9 5M5 1L1 5"
          stroke={'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'down') {
    return (
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 11L5 1M5 11L1 7M5 11L9 7"
          stroke={'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return console.log('type of the arrow Unknown');
}

export default ArrowIcon;
