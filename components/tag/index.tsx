import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('tag');

export interface TagProps {
  type?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onTap?: () => void;
}

const Tag = (props: TagProps): React.ReactElement => {
  const { type, size, className = '', style, children, onTap } = props;

  const classes = classNames({
    [prefixCls]: true,
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-info`]: type === 'info',
    [`${prefixCls}-success`]: type === 'success',
    [`${prefixCls}-warning`]: type === 'warning',
    [`${prefixCls}-error`]: type === 'error',
    [className]: true,
  });

  return (
    <View className={classes} style={style} onTap={onTap}>
      {children}
    </View>
  );
};

export interface CheckableTagProps {
  className?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
}

Tag.CheckableTag = (props: CheckableTagProps) => {
  const { className = '', checked, onChange, children } = props;

  return (
    <Tag
      size="large"
      {...props}
      className={classNames({
        [`${prefixCls}-checkable`]: true,
        [`${prefixCls}-checked`]: checked,
        [className]: true,
      })}
      onTap={() => {
        onChange?.(!checked);
      }}
    >
      {children}
    </Tag>
  );
};

export default Tag;
