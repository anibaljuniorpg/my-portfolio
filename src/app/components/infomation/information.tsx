import {SectionTitle} from "../sectionTitle/section-title"
import "./information.scss"
export function Info(){
    return(
        <div className="info">
          <SectionTitle text="Liguagens"/>
          <h3>Linguagens</h3>
          <div className="languages-info">
            <span>EN - Basico</span>
            <span>PT-BR - Lingua nativa</span>
          </div>
          <SectionTitle text="Educação"/>
          <div className="education-info">
            <span></span>
            <span>Analise e desenvolvimento de sistemas - Faculdade Unicesumar</span>
          </div>
        </div>
    )
}