import classes from "src/components/Footer/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a
        // href="https://vercel.com?/ce=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={classes.logo}>
          {/* <Img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>
      </a>
    </footer>
  );
};
