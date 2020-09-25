import { css, cx } from "emotion";
import React from "react";

export default React.forwardRef(function Button(props) {
    return (
        <button
            className={cx(css`
        appearance: none;
        border: none;
        padding: 8px 12px;
        margin-top: 15px;
        border-radius: 4px;
        background: #39b0a4;
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
        color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
      `)}
            {...props}
        />
    );
});
