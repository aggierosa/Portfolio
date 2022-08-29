import "./style.css";

const Footer = () => {
  return (
    <div className="footerBox">
      <h3>Quer entrar em contato?</h3>
      <form
        action="mailto:agnes.rosa@hotmail.com"
        method="post"
        enctype="text/plain"
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Seu nome"
        />
        <input
          className="input"
          type="text"
          name="mail"
          placeholder="Seu e-mail"
        />
        <textarea
          className="text"
          type="text"
          name="comment"
          size="50"
          placeholder="Comentário"
        />
      </form>

      <button className="buttonGlitch" type="submit">
        {`>`}Enviar
      </button>
    </div>
  );
};
export default Footer;
