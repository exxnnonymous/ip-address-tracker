import { useRef } from "react";
import { useRouter } from 'next/router'
import styles from "../styles/Search.module.css";

function Search() {
  const inputRef = useRef();

  const router = useRouter()

  function queryValidate(value) {
    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(value)) {
      return "domain"
    }else if(/^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(value)){
      return "ipAddress"
    }else{
    return null
    }
}

  function handleSubmit(value){
    const queryTop = queryValidate(value)

    if (queryTop !== null){
      router.push(`?${queryTop}=${value}`)
    }else{
      fetch(`https://api.ipify.org?format=json`).then(response => response.json()).then(data => router.push(`?ipAddress=${data.ip}`))
    }
  }

  return (
    <div className={styles.search_box}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Search for any IP address or domain"
        ref={inputRef}
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            handleSubmit(inputRef.current.value);
          }
        }}
      />
      <button
      aria-label="search"
        className={styles.search_icon}
        tabIndex={0}
        onClick={() => {
          handleSubmit(inputRef.current.value);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
      </button>
    </div>
  );
}

export default Search;
