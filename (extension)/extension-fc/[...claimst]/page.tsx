"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo.png";
import React, { useRef, useState, useEffect } from "react";
import News from "@/components/HomePage/News";
import SearchResult from "@/components/HomePage/SearchResult";
import styles from "@/styles/Home.module.css";


const ExtensionHome = ({ params }: { params: { claimst: string } }) => {
  const [claim, setClaim] = React.useState("");
  const decoded = decodeURIComponent(params.claimst);
  const final = decoded.replace(/,/g, ' ');
  console.log(final)
    

  return (
    <div>
      <nav className="flex-shrink-0 sticky top-0 -mx-10 py-6 px-10 flex justify-center items-center bg-white z-40 overflow-hidden">
        <div className="absolute items-center">
          <Link href={"/"} style={{ height: "auto", alignItems: "center" }} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt="logo"
                width={153}
                height={41}
                className="h-7 w-auto"
              />
          </Link>
        </div>
      </nav>
        <SearchResult claim={final} />
    </div>
  );
};

export default ExtensionHome;
