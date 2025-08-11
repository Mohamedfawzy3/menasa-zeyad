import React from 'react'
import"../Styles/WhatsPlugin.css"
import whatsappIcon from "../images/icons8-whatsapp.svg";
export default function WhatsPlugin() {
  return (
    <a href="https://wa.me/+966555170120" class="btn-whatsapp-pulse">
        <img src={whatsappIcon} alt="Whats App" />
      </a>
  )
}
