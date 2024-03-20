export default function BaseStructure({
  children,
  wrapperContent,
  wrapperStyles,
  noInner,
}) {
  return (
    <div className="wrapper" style={wrapperStyles}>
      {wrapperContent}
      {noInner ? "" : <div className="inner">{children}</div>}
    </div>
  );
}
