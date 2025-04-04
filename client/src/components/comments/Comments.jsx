import React from "react";
import Image from "../image/Image";
import "./comments.css";

const Comments = () => {
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentsCount">5 comments</span>
        {/* COMMENTS */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentConten">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <span className="commentTime">1hr</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="add a comment" />
        <div className="emoji">
          <div>😍</div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
