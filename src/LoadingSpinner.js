import React from "react";

export default function LoadingSpinner() {
  return (
    <div class="ui segment">
      <p>Loading!</p>
      <div class="ui active dimmer">
        <div class="ui massive loader"></div>
      </div>
    </div>
  );
}
