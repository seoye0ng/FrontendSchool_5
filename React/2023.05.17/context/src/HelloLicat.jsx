import React from 'react';
import { UserInfo } from './AppConsumer';

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            {value.id}HelloLicat{value.name}
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
}
