/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Legal({ title, info }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header>
        <div
          role="button"
          tabIndex={0}
          className="question-title"
          onClick={() => setExpanded(!expanded)}
          onKeyDown={() => setExpanded(!expanded)}
        >
          {title}
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  );
}
