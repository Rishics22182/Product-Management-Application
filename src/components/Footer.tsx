import React from "react";

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(229,231,235,0.9)",
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "18px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 10,
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.18)",
    flex: "0 0 auto",
  },
  text: {
    color: "#6b7280",
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.3,
  },
  links: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 700,
    color: "#1d4ed8",
    border: "1px solid rgba(37,99,235,0.25)",
    background: "rgba(37,99,235,0.06)",
    padding: "8px 10px",
    borderRadius: 999,
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <div style={styles.text}>
            <div>© {year} My App</div>
            <div style={{ marginTop: 2 }}>Built By Rishi Gupta</div>
          </div>
        </div>

        <div style={styles.links}>
          <a
            href="https://github.com/Rishics22182"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishi-guptab20/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>
          <a href="#" style={styles.link}>
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;