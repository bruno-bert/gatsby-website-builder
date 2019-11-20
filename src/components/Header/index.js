import React from "react"
import { HeaderWrapper } from "./styles"
import Image from "../image"
import { Link } from "gatsby"
export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Image src="landing/logo.png" />
        <nav>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Missão</Link>
            </li>
            <li>
              <Link to="#">Sobre</Link>
            </li>
            <li>
              <Link to="#">Problema</Link>
            </li>
            <li>
              <Link to="#">Aplicação do Cliente</Link>
            </li>
            <li>
              <Link to="#">Recursos</Link>
            </li>
            <li>
              <Link to="#">Roadmap</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  )
}
