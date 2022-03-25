import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

import {Button} from "@hasancolak/comp-button";

const Search = ({
  
}) =>  {

  const classes = cx(
    styles.search,
  );
  return (
    <div className="search-box" data-testid="search">
      <div className={classes}>
       <input type="text" placeholder='please enter text' />
       <Button>Send</Button>
       </div>
    </div>
  );
}

export { Search };
