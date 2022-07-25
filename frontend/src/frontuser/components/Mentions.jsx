import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Traduction from "./Traduction";

export default function Legal() {
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
        <Traduction reference="other_mentions_title" />

        <button
          type="button"
          className="btn-legal"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {expanded && (
        <p className="question-info">
          <Traduction reference="other_mentions_content" />
        </p>
      )}
    </article>
  );
}
