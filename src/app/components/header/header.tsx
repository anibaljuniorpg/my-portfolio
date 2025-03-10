import Image from "next/image";

import "./header.scss";

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, eu sou Anibal Júnior!</h1>
            <h2>6 anos como programador, trabalho como freelancer e também em projetos acadêmicos.</h2>
          </div>
          <Image
              src="/me.jpeg"
              alt="minha foto"
              width={325}
              height={310}
              priority
            />
      </div>
    )
}