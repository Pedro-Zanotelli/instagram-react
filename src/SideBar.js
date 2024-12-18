import Suggestoins from "./Suggestions";
import User from "./User";

export default function SideBar() {
    return(
        <div class="sidebar">
            <User />
            <Suggestoins />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}