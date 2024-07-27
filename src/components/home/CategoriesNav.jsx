import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const CategoriesNav = () => {
  const [active, setActive] = useState(false);
  const [selectedIndex, setSelectIndex] = useState(null);

  const fakeApi = [
    {
      ad: "Apple",
      altKategori: [
        {
          ad: "iPhone",
          slug: "/apple/iphone",
        },
        {
          ad: "iPad",
          slug: "/apple/ipad",
        },
      ],
    },
    {
      ad: "Samsung",
      altKategori: [
        {
          ad: "Galaxy",
          slug: "/samsung/galaxy",
        },
        {
          ad: "Note",
          slug: "/samsung/note",
        },
      ],
    },
  ];

  return (
    <div className="container bg-neutral-100 mx-auto mt-5 flex space-x-4 py-1 px-4 rounded-full">
      {fakeApi.map((kategori, index) => (
        <div key={index}>
          <div
            onClick={
              active
                ? () => {
                    setActive(false);
                    setSelectIndex(null);
                  }
                : () => {
                    setActive(true);
                    setSelectIndex(index);
                  }
            }
            className="hover:bg-white duration-500 cursor-pointer flex items-center space-x-2 py-3 px-4 rounded-full"
          >
            <h1 className="font-medium">{kategori.ad}</h1>
            <ChevronDown strokeWidth={1} />
          </div>
          {active && selectedIndex == index && (
            <div className="bg-white w-40 border rounded-b-xl absolute">
              <div className="flex py-2 w-full px-3 flex-col space-y-2">
                {kategori.altKategori.map((altKategori, index) => (
                  <div key={index}>
                    <a
                      href={altKategori.slug}
                      className="flex items-center rounded-full hover:bg-gray-200 duration-500 space-x-2 py-3 px-4"
                    >
                      <a
                        href={altKategori.slug}
                        className="font-medium text-center"
                      >
                        {altKategori.ad}
                      </a>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesNav;
