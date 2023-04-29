import React from "react";

export default function From_element_content() {
  return (
    <div>
      <div className="form-floating mb-3 ">
        <input
          type="email"
          className="form-control"
          id="floatingInputDisabled"
          placeholder="title"
          
        />
        <label for="floatingInputDisabled p-4">Title</label>
      </div>

      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2Disabled"
          style={{ height: "100px" }}
          
        ></textarea>
        <label for="floatingTextarea2Disabled my-4">Article</label>
      </div>
    </div>
  );
}
