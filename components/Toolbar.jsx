import css from 'sass/components/Toolbar.scss';

export const Toolbar = props => (
  <div role="toolbar" className={`${props.className ? `${props.className} ` : ''}${css.Toolbar}`}>
    {props.children}
  </div>
);
export const ToolbarSpacing = () => (
  <div className={css.ToolbarSpacing} />
);
