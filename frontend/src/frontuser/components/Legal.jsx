/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../../assets/styles/Legal.css";

export default function Legal({ title, info }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <div
        role="button"
        tabIndex={0}
        className="question-title"
        onClick={() => setExpanded(!expanded)}
        onKeyDown={() => setExpanded(!expanded)}
      >
        {title}
        <button
          type="button"
          className="btn-legal"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {expanded && <p className="question-info">{info}</p>}
    </article>
  );
}
