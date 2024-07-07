import React, { useState } from "react";
import logo from "../images/logo.png";
import { ChevronDown, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownAcik, setDropdownAcik] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container py-2 flex items-center justify-between mx-auto">
      <img
        src={logo}
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
      />
      <input
        type="text"
        className="p-2.5 focus:ring-2 ring-neutral-100 duration-500 border text-base max-w-2xl outline-none w-full rounded-lg"
        placeholder="Ürün Ara"
      />
      <div className="flex space-x-8 items-center">
        <div className="flex space-x-2.5 items-center">
          <ShoppingBag strokeWidth={1.8} size={21} />
          <a
            href="/sepet"
            className="font-semibold hover:underline duration-500"
          >
            Sepet
          </a>
        </div>
        <div className="flex space-x-2.5 items-center">
          <div className="flex relative flex-col">
            <div className="flex items-center space-x-2">
              <User strokeWidth={1.8} size={21} />
              <button
                onClick={() => {
                  setDropdownAcik(!dropdownAcik);
                }}
                className="font-semibold"
              >
                Hesabım
              </button>
              <ChevronDown strokeWidth={1.5} size={20} />
            </div>
            {dropdownAcik && (
              <div className="absolute bg-white mt-8 flex flex-col space-y-3 rounded-lg py-2 w-full border-2">
                <a
                  href="kullanici/hesabim"
                  className="text-sm px-3 hover:bg-neutral-100 font-medium duration-500 py-1"
                >
                  Hesabım
                </a>
                <a
                  href="kullanici/siparisler"
                  className="text-sm px-3 hover:bg-neutral-100 font-medium duration-500 py-1"
                >
                  Siparişler
                </a>
                <a
                  href="kullanici/incelemeler"
                  className="text-sm px-3 hover:bg-neutral-100 font-medium duration-500 py-1"
                >
                  İncelemeler
                </a>
                <a
                  href="kullanici/adresler"
                  className="text-sm px-3 hover:bg-neutral-100 font-medium duration-500 py-1"
                >
                  Adresler
                </a>
                <a className="text-sm px-3 hover:bg-red-400 duration-500 text-red-500 font-semibold py-1">
                  Çıkış Yap
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
