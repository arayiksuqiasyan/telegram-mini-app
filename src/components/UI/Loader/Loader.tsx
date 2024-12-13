import React from 'react'
import classes from './Loader.module.scss'
import classNames from 'classnames'
interface ILoader {
  text?: string
  fixCenter?: boolean
}

const Loader: React.FC<ILoader> = ({ text = '', fixCenter = true }) => {
  return (
    <div className={classNames({[classes.center]:fixCenter})}>
      <div className={classes.loader}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={classes.line} />
        ))}
        {text && <span className={classes.loaderText}>{text}</span>}
      </div>
    </div>
  )
}

export default Loader
