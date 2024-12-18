export default function Suggestions() {
    const suggestion = [
        {imagem: "assets/img/bad.vibes.memes.svg", usuario:"bad.vibes.memes", razao:"Segue você"},
        {imagem: "assets/img/chibirdart.svg", usuario:"chibirdart", razao:"Segue você"},
        {imagem: "assets/img/razoesparaacreditar.svg", usuario:"razoesparaacreditar", razao:"Novo no Instagram"},
        {imagem: "assets/img/adorable_animals.svg", usuario:"adorable_animals", razao:"Segue você"},
        {imagem: "assets/img/smallcutecats.svg", usuario:"smallcutecats", razao:"Segue você"}
    ]

    return(
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestion.map(s => <Suggestion imagem={s.imagem} usuario={s.usuario} razao={s.razao} key={s.usuario}/>)}
        </ul>
    )
}

function Suggestion({imagem, usuario, razao}) {
    return(
        <li class="sugestao">
            <div class="usuario">
                <img src={imagem} alt={usuario}/>
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </li>
    )
}