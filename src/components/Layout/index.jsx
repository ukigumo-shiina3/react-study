export const Layout = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-full max-w-2xl">
      {props.children}
    </div>
  );
};
