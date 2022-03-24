import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Search = ({
  
}) =>  {

  const classes = cx(
    styles.search,
  );
  return (
    <div className="search-box" data-testid="search">
      <div className={classes}>
       
       </div>
    </div>
  );
}

export { Search };
