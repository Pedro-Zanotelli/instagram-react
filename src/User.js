import React from "react"

export default function User() {
    const imagemInicial = "assets/img/avatar.jpg";

    const [nome, setNome] = React.useState("UserName");
    const [foto, setFoto] = React.useState(imagemInicial);

    function inserirNome() {
        const nomeDigitado = prompt("Isira seu nome")

        if (nomeDigitado) {
            setNome(nomeDigitado)
        }
    }

    function mudaFoto() {
        const linkDigitado = prompt("Digite o link da sua imagem");

        if (linkDigitado) {
            setFoto(linkDigitado)
        }
    }

    return(
        <div className="usuario">
            <img onClick={mudaFoto} src={foto} alt="imagem de perfil"/>
            <div className="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={inserirNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}