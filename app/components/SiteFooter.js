import Icon from "./Icon";

export default function SiteFooter() {
  return (
    <>
      <div className="road-divider" />
      <footer>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "14px" }}>
          <a href="https://www.instagram.com/sparkeavenue?igsi=MTJxODM2cWQ1eGg0ag==" target="_blank" rel="noreferrer" title="Instagram" style={{ display: "flex", alignItems: "center" }}>
            <Icon name="instagram" size={18} />
          </a>
          <a href="https://www.facebook.com/share/1FAhyJD6xb/" target="_blank" rel="noreferrer" title="Facebook" style={{ display: "flex", alignItems: "center" }}>
            <Icon name="facebook" size={18} />
          </a>
          <a href="https://www.linkedin.com/company/144785010" target="_blank" rel="noreferrer" title="LinkedIn" style={{ display: "flex", alignItems: "center" }}>
            <Icon name="linkedin" size={18} />
          </a>
        </div>
        &copy; 2026 Sparke Avenue. All rights reserved. —{" "}
        <a href="mailto:hello@sparkeavenue.com">hello@sparkeavenue.com</a>
      </footer>
    </>
  );
}
