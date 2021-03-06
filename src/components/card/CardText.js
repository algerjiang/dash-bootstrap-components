import React from 'react';
import PropTypes from 'prop-types';
import {CardText as RSCardText} from 'reactstrap';
import classNames from 'classnames';

const CardText = props => {
  const {children, loading_state, className, color, ...otherProps} = props;
  const classes = classNames(className, color && `text-${color}`);
  return (
    <RSCardText
      data-dash-is-loading={
        (loading_state && loading_state.is_loading) || undefined
      }
      className={classes}
      {...otherProps}
    >
      {children}
    </RSCardText>
  );
};

CardText.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: PropTypes.string,

  /**
   * HTML tag to use for the card text, default: p
   */
  tag: PropTypes.string,

  /**
   * Text color, options: primary, secondary, success, warning, danger, info,
   * muted, light, dark, body, white, black-50, white-50.
   */
  color: PropTypes.string,

  /**
   * Object that holds the loading state object coming from dash-renderer
   */
  loading_state: PropTypes.shape({
    /**
     * Determines if the component is loading or not
     */
    is_loading: PropTypes.bool,
    /**
     * Holds which property is loading
     */
    prop_name: PropTypes.string,
    /**
     * Holds the name of the component that is loading
     */
    component_name: PropTypes.string
  })
};

export default CardText;
